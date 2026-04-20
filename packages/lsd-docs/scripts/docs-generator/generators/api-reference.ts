/**
 * API Reference Generator
 *
 * This module generates the API Reference section for component documentation.
 * It displays component props in a grid layout with type information.
 */

import type { PropMetadata } from '../parsers/metadata-extractor';

/**
 * Generate the API Reference section
 *
 * If props are available, displays them in a grid layout. If no props exist,
 * shows fallback documentation links to Radix UI and shadcn/ui for components
 * that wrap Radix primitives.
 *
 * @param props - Array of component prop metadata
 * @param componentName - Name of the component (e.g., "dropdown-menu")
 * @param isRadixComponent - Whether this component wraps a Radix UI primitive
 * @returns Generated API Reference section as a string
 */
export function generateAPIReferenceSection(
  props: PropMetadata[],
  componentName: string,
  isRadixComponent: boolean
): string {
  // If there are props, generate the prop cards grouped by component
  if (props.length > 0) {
    // Group props by component name ( componentName or default to main component name)
    const groupedProps = props.reduce(
      (acc, prop) => {
        const key = prop.componentName || componentName;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(prop);
        return acc;
      },
      {} as Record<string, PropMetadata[]>
    );

    // Generate sections for each component group
    const sections = Object.entries(groupedProps)
      .map(([componentGroupName, componentProps]) => {
        const componentDisplayName = toPascalCase(componentGroupName);

        // Generate prop cards for this component
        const propsGrid = componentProps
          .map(prop => generatePropCard(prop))
          .map(card => `  ${card.trim()}`)
          .join('\n    ');

        return `
        <div className="mt-(--lsd-spacing-large)">
          <Typography variant="h4" className="mb-(--lsd-spacing-base)">${componentDisplayName}</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
${propsGrid}
          </div>
        </div>`;
      })
      .join('\n');

    return `
      <PageSection title="API Reference">
${sections}
      </PageSection>`;
  }

  // If no props, show fallback documentation links
  let fallbackLinks = '';

  if (isRadixComponent) {
    const componentDisplayName = toPascalCase(componentName);
    // Radix UI uses kebab-case for URLs
    const radixUrl = `https://www.radix-ui.com/primitives/docs/components/${componentName}`;

    fallbackLinks = `
        <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
          <Card>
            <CardHeader>
              <CardTitle>Radix UI Documentation</CardTitle>
              <CardDescription>
                ${componentDisplayName} wraps Radix UI primitives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="${radixUrl}"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Radix UI ${componentDisplayName} documentation →
              </a>
            </CardContent>
          </Card>
        </div>`;
  } else if (componentName === 'calendar') {
    // Custom handling for react-day-picker based Calendar component
    const componentDisplayName = toPascalCase(componentName);
    const dayPickerUrl = 'https://daypicker.dev/';

    fallbackLinks = `
        <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
          <Card>
            <CardHeader>
              <CardTitle>React DayPicker Documentation</CardTitle>
              <CardDescription>
                ${componentDisplayName} is built on react-day-picker and extends all its props
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="${dayPickerUrl}"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View React DayPicker documentation →
              </a>
            </CardContent>
          </Card>
        </div>`;
  } else if (componentName === 'sonner') {
    // Custom handling for sonner based Toaster component
    const componentDisplayName = toPascalCase(componentName);
    const sonnerUrl = 'https://sonner.emilkowal.ski/getting-started';

    fallbackLinks = `
        <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
          <Card>
            <CardHeader>
              <CardTitle>Sonner Documentation</CardTitle>
              <CardDescription>
                ${componentDisplayName} wraps the sonner library and extends all its props
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="${sonnerUrl}"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Sonner documentation →
              </a>
            </CardContent>
          </Card>
        </div>`;
  }

  // Only generate the section if we have props or fallback content
  if (!fallbackLinks) {
    return '';
  }

  return `
      <PageSection title="API Reference">
        ${fallbackLinks}
      </PageSection>`;
}

/**
 * Generate a single prop card
 *
 * @param prop - Prop metadata
 * @returns Generated prop card as a string
 */
function generatePropCard(prop: PropMetadata): string {
  const options = prop.options
    ? `
      <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
        <strong>Options:</strong> ${prop.options.join(', ')}
      </Typography>`
    : '';

  const defaultValue = prop.defaultValue
    ? `
      <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
        <strong>Default:</strong> ${prop.defaultValue}
      </Typography>`
    : '';

  const requiredBadge = prop.isRequired
    ? ''
    : `
      <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
        <strong>Optional</strong>
      </Typography>`;

  // HTML-encode special characters for JSX text content
  // Important: Encode & first to avoid double-encoding in HTML entities
  const safeType = prop.type
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;');

  // Show description in CardDescription, fallback to empty string
  const description = prop.description || '';

  return `<Card>
    <CardHeader>
      <CardTitle>${prop.name}</CardTitle>
      <CardDescription>${description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
        <strong>Type:</strong>{' '}<code>${safeType}</code>
      </Typography>${options}${defaultValue}${requiredBadge}
    </CardContent>
  </Card>`;
}

/**
 * Convert kebab-case to PascalCase (e.g., "dropdown-menu" → "DropdownMenu")
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
