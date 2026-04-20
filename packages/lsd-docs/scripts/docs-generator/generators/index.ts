/**
 * Generators Index
 *
 * Exports all generator functions and types for documentation generation.
 */

// Section generators
export { generateAboutSection } from './about';
export { generateAccessibilitySection } from './accessibility';
export { generateAPIReferenceSection } from './api-reference';
export { generateCompositionSection } from './composition';
export { generateFeaturesSection } from './features';
export { generateInstallationSection } from './installation';
// Main page generator
export type { PageGeneratorConfig } from './page-generator';
export { generatePage } from './page-generator';
export { generateSizesSection } from './sizes';
export { generateUsageSection } from './usage';
export { generateVariantsSection } from './variants';
