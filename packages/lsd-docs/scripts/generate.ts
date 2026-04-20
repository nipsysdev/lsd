#!/usr/bin/env node

/**
 * Documentation Generator CLI
 *
 * This is the main CLI entry point for generating component documentation.
 * Run with: pnpm docs:generate [component-name] [--all] [--help]
 *
 * Examples:
 *   pnpm docs:generate accordion
 *   pnpm docs:generate --all
 *   pnpm docs:generate --help
 */

import { generateAllComponents, generateDocumentation } from './docs-generator';
import { parseArgs, printError, printHelp } from './docs-generator/cli';

/**
 * Main CLI entry point
 */
async function main() {
  try {
    const args = parseArgs(process.argv.slice(2));

    if (args.help) {
      printHelp();
      return;
    }

    if (args.all) {
      await generateAllComponents();
    } else if (args.component) {
      await generateDocumentation(args.component);
    } else {
      printError('Please specify a component name or use --all flag');
      printHelp();
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Fatal error:');
    console.error(error);
    process.exit(1);
  }
}

main();
