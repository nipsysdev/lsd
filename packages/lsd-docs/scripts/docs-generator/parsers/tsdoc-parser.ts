/**
 * TSDoc Parser
 *
 * This module parses TSDoc annotations from component source files.
 * It extracts standard TSDoc and custom tags using the @microsoft/tsdoc library.
 */

import {
  DocNodeKind,
  TSDocConfiguration,
  TSDocParser,
  TSDocTagDefinition,
  TSDocTagSyntaxKind,
} from '@microsoft/tsdoc';
import type { SourceFile } from 'ts-morph';

/**
 * Complete TSDoc metadata
 */
export interface TSDocMetadata {
  /** Main description from TSDoc summary */
  description: string;
  /** Remarks sections */
  remarks?: string;
  /** PageHeader description (falls back to description if not set) */
  pageDescription?: string;
  /** About section description (falls back to description if not set) */
  aboutDescription?: string;
  /** All custom tags as raw key-value pairs */
  customTags: Record<string, string>;
}

/**
 * Create a TSDoc configuration with custom tags defined
 */
function createTSDocConfiguration(): TSDocConfiguration {
  const configuration = new TSDocConfiguration();

  // Define custom tags for documentation
  const customTags = [
    '@docSectionPageDescription',
    '@docSectionAbout',
    '@docSectionComposition',
    '@docSectionAccessibilityKeyboard',
    '@docSectionAccessibilityAria',
    '@docSectionAccessibilityFocus',
    '@docSectionUsageSingleMode',
    '@docSectionUsageMultipleMode',
    '@docSectionFeaturesAnimated',
    '@docSectionFeaturesCollapsible',
    '@docSectionFeaturesDefaultValue',
    '@docSectionFeaturesAsChild',
    '@docSectionFeaturesDisabled',
    '@docSectionFeaturesLoading',
    '@docSectionFeaturesAsyncOptions',
    '@docSectionFeaturesClientSideFiltering',
    '@docSectionFeaturesClearable',
    '@docSectionFeaturesControlledUncontrolled',
    '@docSectionFeaturesIconSupport',
  ];

  for (const tagName of customTags) {
    const tagDefinition = new TSDocTagDefinition({
      tagName,
      syntaxKind: TSDocTagSyntaxKind.BlockTag,
      allowMultiple: false,
    });
    configuration.addTagDefinition(tagDefinition);
  }

  return configuration;
}

/**
 * Parse TSDoc annotations from a source file
 *
 * Extracts both standard TSDoc comments and custom tags using the
 * @microsoft/tsdoc parser. Custom tags are accessed via customBlocks.
 *
 * @param sourceFile - The component source file with TSDoc comments
 * @returns Complete TSDoc metadata
 */
export async function parseTSDoc(sourceFile: SourceFile): Promise<TSDocMetadata> {
  const metadata: TSDocMetadata = {
    description: '',
    customTags: {},
  };

  const configuration = createTSDocConfiguration();
  const parser = new TSDocParser(configuration);

  // Get all functions, variable declarations, interfaces, and type aliases with JSDoc
  const nodes = [
    ...sourceFile.getFunctions(),
    ...sourceFile.getVariableStatements(),
    ...sourceFile.getInterfaces(),
    ...sourceFile.getTypeAliases(),
  ];

  for (const node of nodes) {
    const jsDocs = node.getJsDocs();
    for (const jsDoc of jsDocs) {
      const fullComment = jsDoc.getFullText();

      try {
        // Parse using TSDoc
        const parseResult = parser.parseString(fullComment);
        const docComment = parseResult.docComment;

        if (!docComment) {
          continue;
        }

        // Extract summary (main description)
        if (!metadata.description && docComment.summarySection) {
          metadata.description = extractTextFromDocNode(docComment.summarySection);
        }

        // Extract remarks
        if (!metadata.remarks && docComment.remarksBlock) {
          metadata.remarks = extractTextFromDocNode(docComment.remarksBlock.content);
        }

        // Extract custom tags from customBlocks
        for (const block of docComment.customBlocks) {
          const tagName = block.blockTag.tagName;

          // Remove @ prefix from tag name for consistency
          const cleanTagName = tagName.replace(/^@/, '');

          // For composition and accessibility tags, extract raw text preserving newlines
          let content: string;
          if (
            cleanTagName === 'docSectionComposition' ||
            cleanTagName.startsWith('docSectionAccessibility')
          ) {
            content = extractRawTextPreservingNewlines(fullComment, tagName);
          } else {
            content = extractTextFromDocNode(block.content);
          }

          // Store special tags in their own fields
          if (cleanTagName === 'docSectionPageDescription') {
            if (!content) {
              throw new Error(
                '@docSectionPageDescription tag must have content in TSDoc comment. Found tag with no content.'
              );
            }
            if (!metadata.pageDescription) {
              metadata.pageDescription = content;
            }
          } else if (cleanTagName === 'docSectionAbout') {
            if (!content) {
              throw new Error(
                '@docSectionAbout tag must have content in TSDoc comment. Found tag with no content.'
              );
            }
            if (!metadata.aboutDescription) {
              metadata.aboutDescription = content;
            }
          } else {
            // Store other custom tags (even if content is empty)
            metadata.customTags[cleanTagName] = content;
          }
        }
      } catch (error) {
        // Log error but continue processing other comments
        console.error('Error parsing TSDoc:', error);
      }
    }
  }

  // Validate that required custom tags are present
  if (!metadata.pageDescription) {
    throw new Error(
      'Component TSDoc must include @docSectionPageDescription custom tag with content for the PageHeader description.'
    );
  }

  if (!metadata.aboutDescription) {
    throw new Error(
      'Component TSDoc must include @docSectionAbout custom tag with content for the About section.'
    );
  }

  return metadata;
}

/**
 * Extract raw text from a JSDoc comment for a specific tag, preserving newlines
 *
 * This function extracts the raw content of a custom tag from the full JSDoc comment,
 * preserving the original formatting including newlines and indentation. This is
 * necessary for tags like @docSectionComposition that rely on indentation for
 * structure (tree visualization).
 *
 * @param fullComment - The full JSDoc comment text
 * @param tagName - The tag name to extract (e.g., '@docSectionComposition')
 * @returns Raw text content of the tag, with newlines preserved
 */
function extractRawTextPreservingNewlines(fullComment: string, tagName: string): string {
  // Simply search for the tag line
  const tagIndex = fullComment.indexOf(tagName);

  if (tagIndex === -1) {
    return '';
  }

  // Move to the end of the tag line
  const lineEndIndex = fullComment.indexOf('\n', tagIndex);
  const tagStartIndex = lineEndIndex !== -1 ? lineEndIndex + 1 : tagIndex + tagName.length;

  // Extract content starting from after the tag
  const afterTag = fullComment.substring(tagStartIndex);

  // Find the end of the content (next @ tag or closing comment)
  let endIndex = afterTag.length;

  // Look for the next tag starting with @ (may have * before it)
  const nextTagIndex = afterTag.search(/\n\s*\*?\s*@\w+/);
  if (nextTagIndex !== -1) {
    endIndex = nextTagIndex;
  } else {
    // Look for closing comment */
    const closingCommentIndex = afterTag.search(/\*\//);
    if (closingCommentIndex !== -1) {
      endIndex = closingCommentIndex;
    }
  }

  // Extract the content
  const content = afterTag.substring(0, endIndex);

  // Remove leading asterisks but preserve indentation
  const lines = content.split('\n').map(line => {
    // Remove leading whitespace before asterisk, and then the asterisk itself
    const match = line.match(/^\s*\*\s?(.*)/);
    return match ? match[1] : line;
  });

  // Remove empty lines at the start
  while (lines.length > 0 && lines[0].trim() === '') {
    lines.shift();
  }

  // Remove empty lines at the end
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
    lines.pop();
  }

  return lines.join('\n');
}

/**
 * Extract plain text from a TSDoc DocNode
 *
 * Traverses the DocNode tree using the public API and extracts all text content,
 * ignoring formatting and structure.
 *
 * @param node - The TSDoc DocNode to extract text from
 * @returns Plain text string
 */
function extractTextFromDocNode(node: unknown): string {
  if (!node) {
    return '';
  }

  const docNode = node as {
    kind: DocNodeKind;
    getChildNodes?: () => unknown[];
    text?: string;
    tagContent?: unknown;
  };

  const kind = docNode.kind;

  // Handle nodes with child nodes (Paragraph, Section, Block)
  if (
    kind === DocNodeKind.Paragraph ||
    kind === DocNodeKind.Section ||
    kind === DocNodeKind.Block
  ) {
    let text = '';
    if (docNode.getChildNodes) {
      for (const child of docNode.getChildNodes()) {
        text += extractTextFromDocNode(child);
      }
    }
    return text;
  }

  // PlainText contains just text
  if (kind === DocNodeKind.PlainText) {
    return (docNode.text || '').trim();
  }

  // SoftBreak represents a soft line break (treat as space)
  if (kind === DocNodeKind.SoftBreak) {
    return ' ';
  }

  // InlineTag represents inline tags like {@link}
  if (kind === DocNodeKind.InlineTag) {
    // Extract text from the tag content if available
    if (docNode.tagContent) {
      return extractTextFromDocNode(docNode.tagContent);
    }
    return '';
  }

  // Fallback for other node types
  return '';
}

/**
 * Get all custom tag names from a source file
 *
 * @param sourceFile - The source file to search
 * @returns Array of custom tag names
 */
export function getCustomTagNames(sourceFile: SourceFile): string[] {
  const tagNames = new Set<string>();
  const configuration = createTSDocConfiguration();
  const parser = new TSDocParser(configuration);

  const nodes = [
    ...sourceFile.getFunctions(),
    ...sourceFile.getVariableStatements(),
    ...sourceFile.getInterfaces(),
    ...sourceFile.getTypeAliases(),
  ];

  for (const node of nodes) {
    const jsDocs = node.getJsDocs();
    for (const jsDoc of jsDocs) {
      const fullComment = jsDoc.getFullText();
      const parseResult = parser.parseString(fullComment);
      const docComment = parseResult.docComment;

      if (!docComment) {
        continue;
      }

      for (const block of docComment.customBlocks) {
        const tagName = block.blockTag.tagName.replace(/^@/, '');
        tagNames.add(tagName);
      }
    }
  }

  return Array.from(tagNames);
}

/**
 * Check if a tag exists in the source file
 *
 * @param sourceFile - The source file to search
 * @param tagName - The tag name to search for
 * @returns True if the tag exists, false otherwise
 */
export function hasTag(sourceFile: SourceFile, tagName: string): boolean {
  const customTags = getCustomTagNames(sourceFile);
  return customTags.includes(tagName);
}
