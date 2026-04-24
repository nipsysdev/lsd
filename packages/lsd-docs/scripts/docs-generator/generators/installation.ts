/**
 * Installation Section Generator
 *
 * This module generates the Installation section for documentation pages.
 * It creates import statement examples using the CodeExample component.
 */

/**
 * Generate the Installation section
 *
 * Creates a section showing how to import the component from LSD.
 * Uses CodeExample component without Accordion wrapper for simple code display.
 *
 * @param componentName - Name of the component (e.g., "accordion")
 * @returns Generated Installation section as a string
 *
 * @example
 * ```typescript
 * const installation = generateInstallationSection('accordion');
 * // Returns:
 * // <PageSection title="Installation">
 * //   <Typography variant="body1">Import the Accordion component from LSD:</Typography>
 * //   <Card className="mt-(--lsd-spacing-base)">
 * //     <CardContent>
 * //       <CodeExample
 * //         useAccordion={false}
 * //         code={`import { Accordion } from '@nipsys/lsd'
 * //
 * // export default function MyComponent() {
 * //   return <Accordion />
 * // }`}
 * //       />
 * //     </CardContent>
 * //   </Card>
 * // </PageSection>
 * ```
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export function generateInstallationSection(componentName: string): string {
  const componentPascal = toPascalCase(componentName);

  return `        <PageSection title="Installation">
          <Typography variant="body1">Import the ${componentPascal} component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={\`import { ${componentPascal} } from '@nipsys/lsd'

export default function MyComponent() {
  return <${componentPascal} />
}\`}
              />
            </CardContent>
          </Card>
        </PageSection>`;
}
