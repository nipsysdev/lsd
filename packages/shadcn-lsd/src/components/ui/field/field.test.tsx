import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from './index';

describe('Field', () => {
  it('renders without crashing', () => {
    const { container } = render(<Field />);
    expect(container.querySelector('[data-slot="field"]')).toBeInTheDocument();
  });

  it('renders as a div element', () => {
    const { container } = render(<Field />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field?.tagName).toBe('DIV');
  });

  it('applies base classes correctly', () => {
    const { container } = render(<Field />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field).toHaveClass('lsd:box-border');
  });

  it('applies vertical orientation classes', () => {
    const { container } = render(<Field orientation="vertical" />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field).toHaveClass('lsd:flex');
    expect(field).toHaveClass('lsd:flex-col');
    expect(field).toHaveAttribute('data-orientation', 'vertical');
  });

  it('applies horizontal orientation classes', () => {
    const { container } = render(<Field orientation="horizontal" />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field).toHaveClass('lsd:flex-row-reverse');
    expect(field).toHaveClass('lsd:gap-(--lsd-spacing-base)');
    expect(field).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('applies responsive orientation classes', () => {
    const { container } = render(<Field orientation="responsive" />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field).toHaveClass('lsd:flex-col');
    expect(field).toHaveClass('md:lsd:flex-row-reverse');
    expect(field).toHaveClass('md:lsd:gap-(--lsd-spacing-base)');
  });

  it('defaults to responsive orientation', () => {
    const { container } = render(<Field />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field).toHaveAttribute('data-orientation', 'responsive');
  });

  it('merges custom className with component classes', () => {
    const { container } = render(<Field className="custom-class" />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    const { container } = render(<Field id="field-1" data-custom="test" />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field).toHaveAttribute('id', 'field-1');
    expect(field).toHaveAttribute('data-custom', 'test');
  });

  it('applies data-slot attribute', () => {
    const { container } = render(<Field />);
    const field = container.querySelector('[data-slot="field"]');
    expect(field).toHaveAttribute('data-slot', 'field');
  });
});

describe('FieldGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(<FieldGroup />);
    expect(container.querySelector('[data-slot="field-group"]')).toBeInTheDocument();
  });

  it('renders as a div element', () => {
    const { container } = render(<FieldGroup />);
    const fieldGroup = container.querySelector('[data-slot="field-group"]');
    expect(fieldGroup?.tagName).toBe('DIV');
  });

  it('applies base classes correctly', () => {
    const { container } = render(<FieldGroup />);
    const fieldGroup = container.querySelector('[data-slot="field-group"]');
    expect(fieldGroup).toHaveClass('lsd:flex');
    expect(fieldGroup).toHaveClass('lsd:flex-col');
    expect(fieldGroup).toHaveClass('lsd:gap-(--lsd-spacing-base)');
  });

  it('merges custom className with component classes', () => {
    const { container } = render(<FieldGroup className="custom-class" />);
    const fieldGroup = container.querySelector('[data-slot="field-group"]');
    expect(fieldGroup).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    const { container } = render(<FieldGroup id="group-1" data-custom="test" />);
    const fieldGroup = container.querySelector('[data-slot="field-group"]');
    expect(fieldGroup).toHaveAttribute('id', 'group-1');
    expect(fieldGroup).toHaveAttribute('data-custom', 'test');
  });

  it('applies data-slot attribute', () => {
    const { container } = render(<FieldGroup />);
    const fieldGroup = container.querySelector('[data-slot="field-group"]');
    expect(fieldGroup).toHaveAttribute('data-slot', 'field-group');
  });
});

describe('FieldSet', () => {
  it('renders without crashing', () => {
    const { container } = render(<FieldSet />);
    expect(container.querySelector('[data-slot="fieldset"]')).toBeInTheDocument();
  });

  it('renders as a fieldset element', () => {
    const { container } = render(<FieldSet />);
    const fieldSet = container.querySelector('[data-slot="fieldset"]');
    expect(fieldSet?.tagName).toBe('FIELDSET');
  });

  it('applies base classes correctly', () => {
    const { container } = render(<FieldSet />);
    const fieldSet = container.querySelector('[data-slot="fieldset"]');
    expect(fieldSet).toHaveClass('lsd:border-none');
    expect(fieldSet).toHaveClass('lsd:p-0');
  });

  it('merges custom className with component classes', () => {
    const { container } = render(<FieldSet className="custom-class" />);
    const fieldSet = container.querySelector('[data-slot="fieldset"]');
    expect(fieldSet).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    const { container } = render(<FieldSet disabled data-custom="test" />);
    const fieldSet = container.querySelector('[data-slot="fieldset"]');
    expect(fieldSet).toBeDisabled();
    expect(fieldSet).toHaveAttribute('data-custom', 'test');
  });

  it('applies data-slot attribute', () => {
    const { container } = render(<FieldSet />);
    const fieldSet = container.querySelector('[data-slot="fieldset"]');
    expect(fieldSet).toHaveAttribute('data-slot', 'fieldset');
  });
});

describe('FieldLegend', () => {
  it('renders without crashing', () => {
    render(<FieldLegend>Legend Text</FieldLegend>);
    expect(screen.getByText('Legend Text')).toBeInTheDocument();
  });

  it('renders as a legend element', () => {
    render(<FieldLegend>Legend Text</FieldLegend>);
    const legend = screen.getByText('Legend Text');
    expect(legend.tagName).toBe('LEGEND');
  });

  it('applies base classes correctly', () => {
    render(<FieldLegend>Legend Text</FieldLegend>);
    const legend = screen.getByText('Legend Text');
    expect(legend).toHaveClass('lsd:text-[1.5rem]');
    expect(legend).toHaveClass('lsd:text-lsd-text-primary');
    expect(legend).toHaveClass('lsd:font-medium');
  });

  it('merges custom className with component classes', () => {
    render(<FieldLegend className="custom-class">Legend Text</FieldLegend>);
    const legend = screen.getByText('Legend Text');
    expect(legend).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <FieldLegend id="legend-1" data-custom="test">
        Legend Text
      </FieldLegend>
    );
    const legend = screen.getByText('Legend Text');
    expect(legend).toHaveAttribute('id', 'legend-1');
    expect(legend).toHaveAttribute('data-custom', 'test');
  });

  it('applies data-slot attribute', () => {
    render(<FieldLegend>Legend Text</FieldLegend>);
    expect(screen.getByText('Legend Text')).toHaveAttribute('data-slot', 'field-legend');
  });
});

describe('FieldDescription', () => {
  it('renders without crashing', () => {
    render(<FieldDescription>Description Text</FieldDescription>);
    expect(screen.getByText('Description Text')).toBeInTheDocument();
  });

  it('renders as a paragraph element', () => {
    render(<FieldDescription>Description Text</FieldDescription>);
    const description = screen.getByText('Description Text');
    expect(description.tagName).toBe('P');
  });

  it('applies base classes correctly', () => {
    render(<FieldDescription>Description Text</FieldDescription>);
    const description = screen.getByText('Description Text');
    expect(description).toHaveClass('lsd:text-[0.875rem]');
    expect(description).toHaveClass('lsd:text-lsd-text-secondary');
  });

  it('merges custom className with component classes', () => {
    render(<FieldDescription className="custom-class">Description Text</FieldDescription>);
    const description = screen.getByText('Description Text');
    expect(description).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <FieldDescription id="desc-1" data-custom="test">
        Description Text
      </FieldDescription>
    );
    const description = screen.getByText('Description Text');
    expect(description).toHaveAttribute('id', 'desc-1');
    expect(description).toHaveAttribute('data-custom', 'test');
  });

  it('applies data-slot attribute', () => {
    render(<FieldDescription>Description Text</FieldDescription>);
    expect(screen.getByText('Description Text')).toHaveAttribute('data-slot', 'field-description');
  });
});

describe('FieldLabel', () => {
  it('renders without crashing', () => {
    render(<FieldLabel>Label Text</FieldLabel>);
    expect(screen.getByText('Label Text')).toBeInTheDocument();
  });

  it('renders as a label element', () => {
    render(<FieldLabel>Label Text</FieldLabel>);
    const label = screen.getByText('Label Text');
    expect(label.tagName).toBe('LABEL');
  });

  it('applies base classes correctly', () => {
    render(<FieldLabel>Label Text</FieldLabel>);
    const label = screen.getByText('Label Text');
    expect(label).toHaveClass('lsd:text-[0.875rem]');
    expect(label).toHaveClass('lsd:font-medium');
    expect(label).toHaveClass('lsd:text-lsd-text-primary');
    expect(label).toHaveClass('lsd:mb-(--lsd-spacing-smaller)');
    expect(label).toHaveClass('lsd:block');
  });

  it('applies htmlFor attribute', () => {
    render(<FieldLabel htmlFor="input-1">Label Text</FieldLabel>);
    const label = screen.getByText('Label Text');
    expect(label).toHaveAttribute('for', 'input-1');
  });

  it('merges custom className with component classes', () => {
    render(<FieldLabel className="custom-class">Label Text</FieldLabel>);
    const label = screen.getByText('Label Text');
    expect(label).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <FieldLabel id="label-1" data-custom="test">
        Label Text
      </FieldLabel>
    );
    const label = screen.getByText('Label Text');
    expect(label).toHaveAttribute('id', 'label-1');
    expect(label).toHaveAttribute('data-custom', 'test');
  });

  it('applies data-slot attribute', () => {
    render(<FieldLabel>Label Text</FieldLabel>);
    expect(screen.getByText('Label Text')).toHaveAttribute('data-slot', 'field-label');
  });
});

describe('FieldContent', () => {
  it('renders without crashing', () => {
    const { container } = render(<FieldContent>Content</FieldContent>);
    expect(container.querySelector('[data-slot="field-content"]')).toBeInTheDocument();
  });

  it('renders as a div element', () => {
    const { container } = render(<FieldContent>Content</FieldContent>);
    const fieldContent = container.querySelector('[data-slot="field-content"]');
    expect(fieldContent?.tagName).toBe('DIV');
  });

  it('applies base classes correctly', () => {
    const { container } = render(<FieldContent>Content</FieldContent>);
    const fieldContent = container.querySelector('[data-slot="field-content"]');
    expect(fieldContent).toHaveClass('lsd:w-full');
  });

  it('renders children correctly', () => {
    render(
      <FieldContent>
        <span>Child Content</span>
      </FieldContent>
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('merges custom className with component classes', () => {
    const { container } = render(<FieldContent className="custom-class">Content</FieldContent>);
    const fieldContent = container.querySelector('[data-slot="field-content"]');
    expect(fieldContent).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    const { container } = render(
      <FieldContent id="content-1" data-custom="test">
        Content
      </FieldContent>
    );
    const fieldContent = container.querySelector('[data-slot="field-content"]');
    expect(fieldContent).toHaveAttribute('id', 'content-1');
    expect(fieldContent).toHaveAttribute('data-custom', 'test');
  });

  it('applies data-slot attribute', () => {
    const { container } = render(<FieldContent>Content</FieldContent>);
    const fieldContent = container.querySelector('[data-slot="field-content"]');
    expect(fieldContent).toHaveAttribute('data-slot', 'field-content');
  });
});

describe('FieldSeparator', () => {
  it('renders without crashing', () => {
    const { container } = render(<FieldSeparator />);
    expect(container.querySelector('[data-slot="field-separator"]')).toBeInTheDocument();
  });

  it('renders as an hr element', () => {
    const { container } = render(<FieldSeparator />);
    const separator = container.querySelector('[data-slot="field-separator"]');
    expect(separator?.tagName).toBe('HR');
  });

  it('applies base classes correctly', () => {
    const { container } = render(<FieldSeparator />);
    const separator = container.querySelector('[data-slot="field-separator"]');
    expect(separator).toHaveClass('lsd:border-0');
    expect(separator).toHaveClass('lsd:border-t');
    expect(separator).toHaveClass('lsd:border-lsd-border');
    expect(separator).toHaveClass('lsd:my-(--lsd-spacing-base)');
  });

  it('merges custom className with component classes', () => {
    const { container } = render(<FieldSeparator className="custom-class" />);
    const separator = container.querySelector('[data-slot="field-separator"]');
    expect(separator).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    const { container } = render(<FieldSeparator id="separator-1" data-custom="test" />);
    const separator = container.querySelector('[data-slot="field-separator"]');
    expect(separator).toHaveAttribute('id', 'separator-1');
    expect(separator).toHaveAttribute('data-custom', 'test');
  });

  it('applies data-slot attribute', () => {
    const { container } = render(<FieldSeparator />);
    const separator = container.querySelector('[data-slot="field-separator"]');
    expect(separator).toHaveAttribute('data-slot', 'field-separator');
  });
});

describe('Field Composition', () => {
  it('renders nested field components correctly', () => {
    const { container } = render(
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="test">Test Label</FieldLabel>
          <FieldContent>Input Content</FieldContent>
        </Field>
        <FieldSeparator />
      </FieldGroup>
    );

    expect(container.querySelector('[data-slot="field-group"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="field"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="field-separator"]')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="field-content"]')).toBeInTheDocument();
  });

  it('renders fieldset with legend and description', () => {
    const { container } = render(
      <FieldSet>
        <FieldLegend>Section Title</FieldLegend>
        <FieldDescription>Section description</FieldDescription>
      </FieldSet>
    );

    expect(container.querySelector('[data-slot="fieldset"]')).toBeInTheDocument();
    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Section description')).toBeInTheDocument();
  });
});
