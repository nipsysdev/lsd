/**
 * Error Handler
 *
 * This module provides error handling utilities for the documentation generator.
 */

/**
 * Base error class for documentation generator errors
 */
export class DocumentationGeneratorError extends Error {
  constructor(
    public component: string,
    public phase: 'discovery' | 'parsing' | 'generation',
    public details: string
  ) {
    super(`Failed to generate documentation for ${component}: [${phase}] ${details}`);
    this.name = 'DocumentationGeneratorError';
  }
}

/**
 * Error thrown when a component is not found
 */
export class ComponentNotFoundError extends DocumentationGeneratorError {
  constructor(component: string) {
    super(component, 'discovery', `Component "${component}" not found in main.ts or file system`);
    this.name = 'ComponentNotFoundError';
  }
}

/**
 * Error thrown when an interface is not found
 */
export class InterfaceNotFoundError extends DocumentationGeneratorError {
  constructor(component: string, interfaceName: string) {
    super(component, 'parsing', `Interface "${interfaceName}" not found in component file`);
    this.name = 'InterfaceNotFoundError';
  }
}

/**
 * Error thrown when TSDoc parsing fails
 */
export class TSDocParsingError extends DocumentationGeneratorError {
  constructor(component: string, originalError: Error) {
    super(component, 'parsing', `Failed to parse TSDoc: ${originalError.message}`);
    this.name = 'TSDocParsingError';
    this.stack = originalError.stack;
  }
}

/**
 * Log an error to console
 */
export function logError(error: Error): void {
  console.error(`\n❌ ${error.message}`);
  if (error instanceof DocumentationGeneratorError) {
    console.error(`   Component: ${error.component}`);
    console.error(`   Phase: ${error.phase}`);
    console.error(`   Details: ${error.details}`);
  }
  if (error.stack) {
    console.error(`\nStack trace:\n${error.stack}`);
  }
}

/**
 * Handle and optionally suppress an error
 */
export function handleError(error: Error, suppress = false): void {
  logError(error);
  if (!suppress) {
    throw error;
  }
}
