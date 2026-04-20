#!/usr/bin/env node

/**
 * CLI Entry Point
 *
 * This module provides the command-line interface for the documentation generator.
 * It parses command-line arguments and invokes the generator for specified components.
 */

/**
 * Parsed command-line arguments
 */
export interface CliArgs {
  component: string | null;
  all: boolean;
  help: boolean;
}

/**
 * Parse command-line arguments
 *
 * @param args - Array of command-line arguments (typically from process.argv.slice(2))
 * @returns Parsed command-line arguments
 */
export function parseArgs(args: string[]): CliArgs {
  const result: CliArgs = {
    component: null,
    all: false,
    help: false,
  };

  for (const arg of args) {
    if (arg === '--all') {
      result.all = true;
    } else if (arg === '--help' || arg === '-h') {
      result.help = true;
    } else if (!arg.startsWith('-')) {
      result.component = arg;
    }
  }

  return result;
}

/**
 * Print help message to console
 */
export function printHelp(): void {
  console.log(`
LSD Documentation Generator
===========================

Usage:
  tsx scripts/generate.ts [component-name] [--all] [--help]

Arguments:
  component-name    Generate documentation for a specific component
  --all            Generate documentation for all components
  --help, -h       Show this help message

Examples:
  tsx scripts/generate.ts accordion
  tsx scripts/generate.ts --all
  tsx scripts/generate.ts --help
`);
}

/**
 * Print error message to console
 *
 * @param message - The error message to display
 */
export function printError(message: string): void {
  console.error(`Error: ${message}`);
}
