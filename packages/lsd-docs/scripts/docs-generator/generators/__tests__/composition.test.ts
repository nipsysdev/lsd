/**
 * Tests for composition.ts generator
 */

import { describe, expect, it } from 'vitest';
import { generateCompositionSection } from '../composition';

describe('composition.ts generator', () => {
  describe('generateCompositionSection', () => {
    it('should return empty string when no composition tag is present', () => {
      const metadata = {
        description: 'Test description',
        customTags: {},
      };

      const result = generateCompositionSection(metadata);

      expect(result).toBe('');
    });

    it('should return empty string when composition tag is empty', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: '',
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toBe('');
    });

    it('should return empty string when composition has no bullet points', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: 'Some text without bullet points',
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toBe('');
    });

    it('should generate composition section for single root component', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: '• Button - Primary button component',
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('<Card className="mt-(--lsd-spacing-base)">');
      expect(result).toContain('<CodeBlock>');
      expect(result).toContain('Button');
      expect(result).toContain('</CodeBlock>');
      expect(result).toContain('</PageSection>');
    });

    it('should generate composition section with simple tree structure', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Table - Main container
  • TableHeader - Header row
  • TableBody - Body content
  • TableFooter - Footer row
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('Table');
      expect(result).toContain('TableHeader');
      expect(result).toContain('TableBody');
      expect(result).toContain('TableFooter');
    });

    it('should generate composition section with nested tree structure', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Form - Form container
  • FormField - Form field wrapper
    • FormLabel - Label for input
    • FormInput - Input field
    • FormError - Error message
  • FormFooter - Form footer
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('Form');
      expect(result).toContain('FormField');
      expect(result).toContain('FormLabel');
      expect(result).toContain('FormInput');
      expect(result).toContain('FormError');
      expect(result).toContain('FormFooter');
    });

    it('should generate composition section with multiple root siblings', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Alert - Alert component
• Dialog - Dialog component
• Popover - Popover component
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('Alert');
      expect(result).toContain('Dialog');
      expect(result).toContain('Popover');
    });

    it('should generate composition section with complex nested structure (depth 2 supported)', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• DropdownMenu - Menu container
  • DropdownMenuTrigger - Trigger button
  • DropdownMenuContent - Menu content
    • DropdownMenuItem - Menu item
    • DropdownMenuSeparator - Separator line
  • DropdownMenuPortal - Portal for rendering
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('DropdownMenu');
      expect(result).toContain('DropdownMenuTrigger');
      expect(result).toContain('DropdownMenuContent');
      expect(result).toContain('DropdownMenuItem');
      expect(result).toContain('DropdownMenuSeparator');
      expect(result).toContain('DropdownMenuPortal');
      // Depth 3 item (DropdownMenuShortcut) would not be included
    });

    it('should handle components without descriptions', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• ComponentA
  • ComponentB
    • ComponentC
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('ComponentA');
      expect(result).toContain('ComponentB');
      expect(result).toContain('ComponentC');
    });

    it('should handle mixed descriptions', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• ComponentA - With description
  • ComponentB
  • ComponentC - Also with description
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('ComponentA');
      expect(result).toContain('ComponentB');
      expect(result).toContain('ComponentC');
    });

    it('should handle varying indentation depths (up to depth 2)', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Root - Root component
  • Child1 - First child
    • Grandchild1 - First grandchild
    • Grandchild2 - Second grandchild
  • Child2 - Second child
    • Grandchild3 - Third grandchild
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('Root');
      expect(result).toContain('Child1');
      expect(result).toContain('Grandchild1');
      expect(result).toContain('Grandchild2');
      expect(result).toContain('Child2');
      expect(result).toContain('Grandchild3');
      // Depth 3 item (GreatGrandchild) would not be included
    });

    it('should handle components with hyphens in names', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• NavigationMenu - Navigation menu
  • NavigationMenuTrigger - Trigger button
  • NavigationMenuContent - Content area
  • NavigationMenuItem - Menu item
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('NavigationMenu');
      expect(result).toContain('NavigationMenuTrigger');
      expect(result).toContain('NavigationMenuContent');
      expect(result).toContain('NavigationMenuItem');
    });

    it('should preserve JSON array format for tree lines', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: '• Component - Description',
        },
      };

      const result = generateCompositionSection(metadata);

      // Should contain a valid JSON array
      const arrayMatch = result.match(/\["[^"]*"\]/);
      expect(arrayMatch).toBeTruthy();
    });

    it('should generate tree visualization with proper box-drawing characters', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Root - Root component
  • Child1 - First child
  • Child2 - Second child
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      // Should contain box-drawing characters
      expect(result).toMatch(/└──|├──|│/);
    });

    it('should handle multiple levels of nesting correctly (up to depth 2)', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Level0
  • Level1a
    • Level2a
    • Level2b
  • Level1b
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Level0');
      expect(result).toContain('Level1a');
      expect(result).toContain('Level1b');
      expect(result).toContain('Level2a');
      expect(result).toContain('Level2b');
      // Depth 3 item (Level3a) would not be included
    });

    it('should handle empty lines in composition text', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• ComponentA

  • ComponentB

• ComponentC
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('<PageSection title="Composition">');
      expect(result).toContain('ComponentA');
      expect(result).toContain('ComponentB');
      expect(result).toContain('ComponentC');
    });

    it('should handle components with special characters in names', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Button<Input> - Generic component
  • Button<Output> - Output component
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Button<Input>');
      expect(result).toContain('Button<Output>');
      // Button-State is at depth 0 as a sibling, so only the root's children are displayed
    });

    it('should handle components (descriptions are not included in output)', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Component - This is a very long description that spans multiple words and provides detailed information about what the component does
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Component');
      // Descriptions are not included in the tree output, only component names
      expect(result).not.toContain('This is a very long description');
    });

    it('should generate correct tree structure for single level', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Root
  • Child1
  • Child2
  • Child3
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Root');
      expect(result).toContain('Child1');
      expect(result).toContain('Child2');
      expect(result).toContain('Child3');
    });

    it('should generate correct tree structure with last child indicators', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Root
  • Child1
  • Child2
  • Child3
    • Grandchild1
    • Grandchild2
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Root');
      expect(result).toContain('Child3');
      expect(result).toContain('Grandchild1');
      expect(result).toContain('Grandchild2');
    });

    it('should handle composition with multiple root items at depth 0', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Item1
  • SubItem1
• Item2
  • SubItem2
• Item3
  • SubItem3
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      // Should contain root (first item) and its children
      expect(result).toContain('Item1');
      expect(result).toContain('SubItem1');
    });

    it('should maintain proper spacing for depth 2 nodes', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Root
  • Level1
    • Level2A
    • Level2B
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Root');
      expect(result).toContain('Level1');
      expect(result).toContain('Level2A');
      expect(result).toContain('Level2B');
    });

    it('should handle components with numbers in names', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Step1 - First step
  • Step1.1 - Sub step 1
  • Step1.2 - Sub step 2
• Step2 - Second step
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Step1');
      expect(result).toContain('Step1.1');
      expect(result).toContain('Step1.2');
      expect(result).toContain('Step2');
    });

    it('should produce valid JSX structure', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: '• Component - Description',
        },
      };

      const result = generateCompositionSection(metadata);

      // Should have proper opening and closing tags
      expect(result).toContain('<PageSection');
      expect(result).toContain('</PageSection>');
      expect(result).toContain('<Card');
      expect(result).toContain('</Card>');
      expect(result).toContain('<CardContent');
      expect(result).toContain('</CardContent>');
      expect(result).toContain('<CodeBlock');
      expect(result).toContain('</CodeBlock>');
    });

    it('should handle unicode content in names', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• ÉmojisComponent
  • SpëcialComponent
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('ÉmojisComponent');
      expect(result).toContain('SpëcialComponent');
      // Descriptions are not included in the tree output
    });

    it('should handle components with underscores', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Component_A
  • Component_B
    • Component_C
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Component_A');
      expect(result).toContain('Component_B');
      expect(result).toContain('Component_C');
    });

    it('should throw error when depth 2 node has no parent', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Root
    • Orphan - This should throw an error
          `.trim(),
        },
      };

      expect(() => {
        generateCompositionSection(metadata);
      }).toThrow('No parent found for node "Orphan" at depth 2');
    });

    it('should handle nodes at exactly depth 2 correctly', () => {
      const metadata = {
        description: 'Test description',
        customTags: {
          docSectionComposition: `
• Root
  • Level1A
    • Level2A
    • Level2B
  • Level1B
          `.trim(),
        },
      };

      const result = generateCompositionSection(metadata);

      expect(result).toContain('Root');
      expect(result).toContain('Level1A');
      expect(result).toContain('Level1B');
      expect(result).toContain('Level2A');
      expect(result).toContain('Level2B');
      // Verify proper tree structure
      expect(result).toContain('├──');
      expect(result).toContain('└──');
      expect(result).toContain('│');
    });
  });
});
