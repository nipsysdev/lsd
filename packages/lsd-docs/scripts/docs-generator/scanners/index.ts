/**
 * Scanners Index
 *
 * Exports all scanner and loader functionality for the documentation generator.
 */

export type { LoadedExample } from './example-loader';
// Example Loader
export {
  loadAllExamples,
  loadExampleCode,
} from './example-loader';
// Types
export type { Example, ExampleCategory } from './example-scanner';
// Example Scanner
export {
  discoverExamples,
  formatTitle,
} from './example-scanner';
