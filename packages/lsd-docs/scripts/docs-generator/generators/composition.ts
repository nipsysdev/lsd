/**
 * Composition Section Generator
 *
 * This module generates the Composition section for documentation pages.
 * It explains how a component is composed of sub-components and their relationships.
 */

import type { TSDocMetadata } from '../parsers/tsdoc-parser';

interface CompositionNode {
  name: string;
  description: string;
  children: CompositionNode[];
}

/**
 * Parse composition text into a tree structure
 *
 * @param composition - The composition text from TSDoc
 * @returns A tree of composition nodes
 */
function parseCompositionTree(composition: string): CompositionNode | null {
  // Split into lines and keep original lines for depth calculation
  const originalLines = composition.split('\n');

  // Filter for lines that contain bullet points (trim first to check)
  const validIndices: number[] = [];
  originalLines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed?.startsWith('•')) {
      validIndices.push(index);
    }
  });

  if (validIndices.length === 0) {
    return null;
  }

  // Parse each valid line to extract component name, description, and depth
  const parsedLines = validIndices.map(index => {
    const line = originalLines[index];
    const trimmedLine = line.trim();

    // Extract content after the bullet
    const bulletIndex = trimmedLine.indexOf('•');
    const content = trimmedLine.substring(bulletIndex + 1).trim();

    // Split into name and description
    const firstPipeIndex = content.indexOf('-');
    let name = content;
    let description = '';

    if (firstPipeIndex !== -1) {
      name = content.substring(0, firstPipeIndex).trim();
      description = content.substring(firstPipeIndex + 1).trim();
    }

    // Calculate depth from leading spaces in original line
    const leadingSpaces = line.length - trimmedLine.length;
    const depth = Math.floor(leadingSpaces / 2);

    return { name, description, depth };
  });

  // Build the tree structure
  const root: CompositionNode = {
    name: parsedLines[0].name,
    description: parsedLines[0].description,
    children: [],
  };

  // Track the last node at each level (0 = root's level)
  // lastNodes[0] = last node that has depth 0 (after processing)
  // lastNodes[1] = last node that has depth 1
  // lastNodes[2] = last node that has depth 2
  const lastNodes: (CompositionNode | undefined)[] = [undefined];

  for (let i = 1; i < parsedLines.length; i++) {
    const parsed = parsedLines[i];
    const node: CompositionNode = {
      name: parsed.name,
      description: parsed.description,
      children: [],
    };

    if (parsed.depth === 0) {
      // Direct child of root
      root.children.push(node);
      lastNodes[0] = node;
      // Clear deeper levels when we start a new level 0 sibling
      lastNodes[1] = undefined;
      lastNodes[2] = undefined;
    } else if (parsed.depth === 1) {
      // Child of the preceding level 0 item
      const parent = lastNodes[0] || root;
      parent.children.push(node);
      lastNodes[1] = node;
      // Clear deeper levels
      lastNodes[2] = undefined;
    } else if (parsed.depth === 2) {
      // Child of the preceding level 1 item
      const parent = lastNodes[1];
      if (!parent) {
        throw new Error(`No parent found for node "${parsed.name}" at depth ${parsed.depth}`);
      }
      parent.children.push(node);
      lastNodes[2] = node;
    }
  }

  return root;
}

/**
 * Generate tree visualization with box-drawing characters
 */
function generateTreeVisualization(
  node: CompositionNode,
  depth = 0, // Current depth (0 = root, 1 = root's children, etc.)
  isLast = true, // Whether this node is the last child of its parent
  parentPrefix = '' // Prefix to place before connector (for depth > 1)
): string[] {
  const lines: string[] = [];

  // Add node name with connector
  if (depth === 0) {
    // Root - just the name, no connector
    lines.push(node.name);
  } else if (depth === 1) {
    // Root's direct children - connector without parentPrefix
    const connector = isLast ? '└──' : '├──';
    lines.push(`${connector} ${node.name}`);
  } else {
    // Deeper levels - parentPrefix before connector
    const connector = isLast ? '└──' : '├──';
    lines.push(`${parentPrefix}${connector} ${node.name}`);
  }

  // Process children
  if (node.children.length > 0) {
    node.children.forEach((child, index) => {
      const isLastChild = index === node.children.length - 1;

      let newParentPrefix: string;
      if (depth === 0) {
        // Root's children: they don't use parentPrefix, but they pass one to their children
        // based on whether this node is the last sibling
        newParentPrefix = isLastChild ? '    ' : '│   ';
      } else if (depth === 1) {
        // Depth 1 nodes: check if this node itself is last, not just its children
        // If this node is not last, its children need the vertical line
        // If this node is last, its children use spaces
        newParentPrefix = isLast ? '    ' : '│   ';
      } else {
        // Deeper levels extend parentPrefix based on whether this node is last
        newParentPrefix = parentPrefix + (isLastChild ? '    ' : '│   ');
      }

      const childLines = generateTreeVisualization(child, depth + 1, isLastChild, newParentPrefix);
      lines.push(...childLines);
    });
  }

  return lines;
}

/**
 * Generate the Composition section
 *
 * Creates a section documenting component composition when sub-components exist.
 * Uses the @docSectionComposition custom tag content to provide detailed information
 * about how sub-components work together in a hierarchical structure.
 *
 * If no composition tag is present, returns an empty string and the section is omitted.
 *
 * @param tsdocMetadata - TSDoc metadata including custom tags
 * @returns Generated Composition section as a string, or empty string if no composition tag
 *
 * @example
 * ```typescript
 * const composition = generateCompositionSection({
 *   customTags: {
 *     docSectionComposition: `
 * • Table - Main container with horizontal scroll
 * • TableHeader - Wraps column header rows
 *   • TableHead - Column header cell with bold text
 * • TableBody - Wraps data rows
 *   • TableRow - Individual table row
 *     • TableCell - Data cell with padding
 * • TableFooter - Optional footer for summaries
 * • TableCaption - Optional caption for the table
 * `,
 *   },
 * });
 * // Returns a PageSection with tree structure visualization
 * ```
 */
export function generateCompositionSection(tsdocMetadata: TSDocMetadata): string {
  const composition = tsdocMetadata.customTags.docSectionComposition;

  if (!composition) {
    return '';
  }

  const root = parseCompositionTree(composition);

  if (!root) {
    return '';
  }

  // Generate tree visualization starting at depth 0 (root)
  const treeLines = generateTreeVisualization(root, 0, true, '');
  const _treeCode = treeLines.join('\n');

  // Render tree lines as a JavaScript array to preserve newlines in JSX
  const treeLinesArray = JSON.stringify(treeLines);

  return `        <PageSection title="Composition">
           <Card className="mt-(--lsd-spacing-base)">
             <CardContent className="pt-(--lsd-spacing-base)">
               <CodeBlock>{${treeLinesArray}}</CodeBlock>
             </CardContent>
           </Card>
         </PageSection>
  `;
}
