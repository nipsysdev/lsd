import { describe, expect, it } from 'vitest';
import { generateCompositionSection } from '../../generators/composition';
import type { TSDocMetadata } from '../../parsers/tsdoc-parser';

describe('Composition Generator', () => {
  it('should generate correct tree structure for simple hierarchy', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Test component',
      customTags: {
        docSectionComposition: `• ComponentA - Root component
  • ComponentB - Child component
    • ComponentC - Grandchild component`,
      },
    } as TSDocMetadata;

    const result = generateCompositionSection(tsdocMetadata);

    expect(result).toContain('ComponentA');
    expect(result).toContain('ComponentB');
    expect(result).toContain('ComponentC');
  });

  it('should generate correct tree structure for table-like hierarchy', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Test component',
      customTags: {
        docSectionComposition: `• Table - Main container
• TableHeader - Wraps headers
  • TableRow - Header row
    • TableHead - Header cell
• TableBody - Wraps body
  • TableRow - Body row
    • TableCell - Data cell`,
      },
    } as TSDocMetadata;

    const result = generateCompositionSection(tsdocMetadata);

    // The result should contain the tree structure
    expect(result).toContain('Table');
    expect(result).toContain('TableHeader');
    expect(result).toContain('TableBody');
    expect(result).toContain('TableRow');
    expect(result).toContain('TableHead');
    expect(result).toContain('TableCell');
  });

  it('should handle multiple children at same level', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Test component',
      customTags: {
        docSectionComposition: `• ComponentA - Root
  • ComponentB - Child 1
  • ComponentC - Child 2
  • ComponentD - Child 3`,
      },
    } as TSDocMetadata;

    const result = generateCompositionSection(tsdocMetadata);

    expect(result).toContain('ComponentA');
    expect(result).toContain('ComponentB');
    expect(result).toContain('ComponentC');
    expect(result).toContain('ComponentD');
  });

  it('should handle varying depths', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Test component',
      customTags: {
        docSectionComposition: `• Root - Top level
  • Level1A - First level
  • Level1B - Another first level
    • Level2 - Second level
      • Level3 - Third level
  • Level1C - Yet another first level`,
      },
    } as TSDocMetadata;

    const result = generateCompositionSection(tsdocMetadata);

    expect(result).toContain('Root');
    expect(result).toContain('Level1A');
    expect(result).toContain('Level1B');
    expect(result).toContain('Level1C');
    expect(result).toContain('Level2');
    expect(result).toContain('Level3');
  });

  it('should return empty string when no composition tag exists', () => {
    const tsdocMetadata: TSDocMetadata = {
      customTags: {},
    } as TSDocMetadata;

    const result = generateCompositionSection(tsdocMetadata);

    expect(result).toBe('');
  });
});
