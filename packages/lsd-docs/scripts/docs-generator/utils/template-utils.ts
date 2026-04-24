/**
 * Template Utilities
 *
 * This module provides helper functions for working with template strings.
 */

/**
 * Safely interpolate values into a template string
 */
export function interpolate(template: string, values: Record<string, unknown>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return String(values[key] ?? match);
  });
}

/**
 * Dedent a template string by removing common leading whitespace
 */
export function dedent(strings: TemplateStringsArray, ...values: unknown[]): string {
  const raw = String.raw(strings, ...values);
  const lines = raw.split('\n');

  // Remove leading and trailing empty lines
  const trimmedLines = lines.filter((line, i) => {
    return line.trim().length > 0 || (i > 0 && i < lines.length - 1);
  });

  // Find the minimum indentation
  const indentMatch = trimmedLines
    .map(line => line.match(/^\s+/))
    .filter((match): match is RegExpMatchArray => match !== null);

  if (indentMatch.length === 0) {
    return trimmedLines.join('\n');
  }

  const minIndent = Math.min(...indentMatch.map(match => match[0].length));

  // Remove the minimum indentation from each line
  const dedentedLines = trimmedLines.map(line => {
    return line.slice(minIndent);
  });

  return dedentedLines.join('\n');
}

/**
 * Escape special characters for use in template strings
 */
export function escapeTemplate(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}');
}
