import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RadioGroup, RadioGroupItem } from './index';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const { container } = render(
      <RadioGroup>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    );
    expect(container.firstChild).toHaveAttribute('data-slot', 'radio-group');
  });

  it('applies custom className', () => {
    const { container } = render(
      <RadioGroup className="custom-group">
        <RadioGroupItem value="test" />
      </RadioGroup>
    );
    expect(container.firstChild).toHaveClass('custom-group');
  });

  it('pass through extra props (id works)', () => {
    const { container } = render(
      <RadioGroup id="test-group">
        <RadioGroupItem value="opt" />
      </RadioGroup>
    );
    expect(container.firstChild).toHaveAttribute('id', 'test-group');
  });

  it('renders with default value (internal state, not attribute)', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" aria-label="Option 1" />
        <RadioGroupItem value="option2" aria-label="Option 2" />
      </RadioGroup>
    );
    const opt1 = screen.getByRole('radio', { name: 'Option 1' });
    expect(opt1).toHaveAttribute('aria-checked', 'true');
  });
});

describe('RadioGroupItem', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" aria-label="Option 1" />
      </RadioGroup>
    );
    const item = screen.getByRole('radio', { name: 'Option 1' });
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-slot', 'radio-group-item');
  });

  it('applies custom className', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="test" className="custom-item" aria-label="Test" />
      </RadioGroup>
    );
    const item = screen.getByRole('radio');
    expect(item).toHaveClass('custom-item');
  });

  it('pass through extra props', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="test" id="test-radio" aria-label="Test" />
      </RadioGroup>
    );
    const item = screen.getByRole('radio');
    expect(item).toHaveAttribute('id', 'test-radio');
    expect(item).toHaveAttribute('value', 'test');
  });

  it('renders indicator inside', () => {
    render(
      <RadioGroup defaultValue="test">
        <RadioGroupItem value="test" aria-label="Test">
          <span>Test content</span>
        </RadioGroupItem>
      </RadioGroup>
    );
    const indicator = document.querySelector('[data-slot="radio-group-indicator"]');
    expect(indicator).toBeInTheDocument();
  });

  it('applies disabled state styles', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="test" disabled aria-label="Disabled" />
      </RadioGroup>
    );
    const item = screen.getByRole('radio');
    expect(item).toBeDisabled();
  });

  it('applies invalid state styles', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="test" aria-invalid="true" aria-label="Invalid" />
      </RadioGroup>
    );
    const item = screen.getByRole('radio');
    expect(item).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders multiple items in group', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="opt1" aria-label="Option 1" />
        <RadioGroupItem value="opt2" aria-label="Option 2" />
        <RadioGroupItem value="opt3" aria-label="Option 3" />
      </RadioGroup>
    );
    const items = screen.getAllByRole('radio');
    expect(items).toHaveLength(3);
  });

  it('handles onValueChange callback', async () => {
    let capturedValue: string | undefined;
    render(
      <RadioGroup onValueChange={value => (capturedValue = value)}>
        <RadioGroupItem value="test" aria-label="Test" />
      </RadioGroup>
    );
    const item = screen.getByRole('radio');
    item.click();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(capturedValue).toBe('test');
  });
});
