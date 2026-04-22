import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  componentExists,
  discoverAllComponents,
  resolveComponentPath,
} from '../component-discovery';

describe('ComponentDiscovery', () => {
  const workspaceRoot = '/tmp/test-component-discovery';
  const mainPath = path.join(workspaceRoot, 'packages', 'lsd', 'src', 'main.ts');

  beforeEach(async () => {
    vi.spyOn(process, 'cwd').mockReturnValue(workspaceRoot);

    try {
      // Create the full directory structure for main.ts
      await fs.mkdir(path.dirname(mainPath), { recursive: true });
    } catch {
      // Directory might exist
    }
  });

  afterEach(async () => {
    vi.restoreAllMocks();

    try {
      await fs.rm(workspaceRoot, { recursive: true, force: true });
    } catch {
      // Directory might not exist
    }
  });

  describe('discoverAllComponents', () => {
    it('should extract component names from export statements', async () => {
      const mainContent = `export * from '@/components/ui/accordion';
export * from '@/components/ui/alert';
export * from '@/components/ui/button';`;

      await fs.writeFile(mainPath, mainContent);

      const components = await discoverAllComponents();

      expect(components).toEqual(['accordion', 'alert', 'button']);
    });

    it('should return empty array when no exports found', async () => {
      const mainContent = `// Some other code
import { something } from 'somewhere';`;

      await fs.writeFile(mainPath, mainContent);

      const components = await discoverAllComponents();

      expect(components).toEqual([]);
    });

    it('should return empty array when file does not exist', async () => {
      const components = await discoverAllComponents();

      expect(components).toEqual([]);
    });

    it('should handle mixed export patterns', async () => {
      const mainContent = `import { Component } from './components';
export * from '@/components/ui/input';
export { default as MyComponent } from './MyComponent';
export * from '@/components/ui/select';`;

      await fs.writeFile(mainPath, mainContent);

      const components = await discoverAllComponents();

      expect(components).toEqual(['input', 'select']);
    });

    it('should ignore non-component exports', async () => {
      const mainContent = `export * from '@/components/ui/checkbox';
export * from '@/utils/helpers';
export * from '@/components/ui/dialog';`;

      await fs.writeFile(mainPath, mainContent);

      const components = await discoverAllComponents();

      expect(components).toEqual(['checkbox', 'dialog']);
    });

    it('should handle kebab-case component names correctly', async () => {
      const mainContent = `export * from '@/components/ui/button-group';
export * from '@/components/ui/dropdown-menu';
export * from '@/components/ui/input-group';`;

      await fs.writeFile(mainPath, mainContent);

      const components = await discoverAllComponents();

      expect(components).toEqual(['button-group', 'dropdown-menu', 'input-group']);
    });

    it('should handle duplicate exports', async () => {
      const mainContent = `export * from '@/components/ui/button';
export * from '@/components/ui/button';`;

      await fs.writeFile(mainPath, mainContent);

      const components = await discoverAllComponents();

      expect(components).toEqual(['button', 'button']);
    });

    it('should handle complex path structures', async () => {
      const mainContent = `export * from '@/components/ui/accordion/types';
export * from '@/components/ui/dialog/index';
export * from '@/components/ui/menu';`;

      await fs.writeFile(mainPath, mainContent);

      const components = await discoverAllComponents();

      expect(components).toEqual(['accordion/types', 'dialog/index', 'menu']);
    });

    it('should handle when current directory ends with /scripts', async () => {
      const scriptsDir = path.join(workspaceRoot, 'scripts');
      vi.spyOn(process, 'cwd').mockReturnValue(scriptsDir);

      // Create the main.ts file from the parent directory perspective
      const mainPathFromScripts = path.join(workspaceRoot, 'packages', 'lsd', 'src', 'main.ts');
      await fs.mkdir(path.dirname(mainPathFromScripts), { recursive: true });
      await fs.writeFile(mainPathFromScripts, `export * from '@/components/ui/test';`);

      const components = await discoverAllComponents();

      expect(components).toEqual(['test']);
    });

    it('should handle when current directory ends with /packages/lsd-docs', async () => {
      const lsdDocsDir = path.join(workspaceRoot, 'packages', 'lsd-docs');
      vi.spyOn(process, 'cwd').mockReturnValue(lsdDocsDir);

      // Create the main.ts file from the workspace root perspective
      const mainPathFromLsdDocs = path.join(workspaceRoot, 'packages', 'lsd', 'src', 'main.ts');
      await fs.mkdir(path.dirname(mainPathFromLsdDocs), { recursive: true });
      await fs.writeFile(mainPathFromLsdDocs, `export * from '@/components/ui/example';`);

      const components = await discoverAllComponents();

      expect(components).toEqual(['example']);
    });
  });

  describe('resolveComponentPath', () => {
    it('should resolve path for component name', () => {
      vi.spyOn(process, 'cwd').mockReturnValue(workspaceRoot);
      const resolvedPath = resolveComponentPath('button');

      expect(resolvedPath).toContain('button');
      expect(resolvedPath).toContain('components/ui');
      expect(resolvedPath).toBe(path.join(workspaceRoot, 'packages/lsd/src/components/ui/button'));
    });

    it('should resolve path for kebab-case component name', () => {
      vi.spyOn(process, 'cwd').mockReturnValue(workspaceRoot);
      const resolvedPath = resolveComponentPath('dropdown-menu');

      expect(resolvedPath).toContain('dropdown-menu');
      expect(resolvedPath).toContain('components/ui');
    });

    it('should handle multiple calls', () => {
      vi.spyOn(process, 'cwd').mockReturnValue(workspaceRoot);
      const path1 = resolveComponentPath('input');
      const path2 = resolveComponentPath('select');

      expect(path1).toContain('input');
      expect(path2).toContain('select');
    });

    it('should handle when current directory ends with /scripts', () => {
      const scriptsDir = path.join(workspaceRoot, 'scripts');
      vi.spyOn(process, 'cwd').mockReturnValue(scriptsDir);

      const resolvedPath = resolveComponentPath('button');

      expect(resolvedPath).toContain('button');
      expect(resolvedPath).toContain('components/ui');
      // Should resolve from parent directory (lsd-docs)
      expect(resolvedPath).toContain('packages/lsd/src');
    });

    it('should handle when current directory ends with /packages/lsd-docs', () => {
      const lsdDocsDir = path.join(workspaceRoot, 'packages/lsd-docs');
      vi.spyOn(process, 'cwd').mockReturnValue(lsdDocsDir);

      const resolvedPath = resolveComponentPath('alert');

      expect(resolvedPath).toContain('alert');
      expect(resolvedPath).toContain('components/ui');
      // Should resolve from grandparent directory (workspace root)
      expect(resolvedPath).toContain('packages/lsd/src');
    });
  });

  describe('componentExists', () => {
    it('should return true for existing component', async () => {
      const mainContent = `export * from '@/components/ui/button';
export * from '@/components/ui/input';`;

      await fs.writeFile(mainPath, mainContent);

      const exists = await componentExists('button');

      expect(exists).toBe(true);
    });

    it('should return false for non-existing component', async () => {
      const mainContent = `export * from '@/components/ui/button';`;

      await fs.writeFile(mainPath, mainContent);

      const exists = await componentExists('input');

      expect(exists).toBe(false);
    });

    it('should work with provided component list', async () => {
      await fs.writeFile(mainPath, `export * from '@/components/ui/button';`);

      const components = await discoverAllComponents();
      const exists = await componentExists('button', components);

      expect(exists).toBe(true);
    });

    it('should discover components when list not provided', async () => {
      const mainContent = `export * from '@/components/ui/alert';`;

      await fs.writeFile(mainPath, mainContent);

      const exists = await componentExists('alert');

      expect(exists).toBe(true);
    });

    it('should handle empty component list', async () => {
      const mainContent = '// No exports';

      await fs.writeFile(mainPath, mainContent);

      const components = await discoverAllComponents();
      const exists = await componentExists('button', components);

      expect(exists).toBe(false);
    });
  });
});
