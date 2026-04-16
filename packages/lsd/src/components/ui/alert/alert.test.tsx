import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alert, AlertDescription, AlertTitle } from './index';

describe('Alert', () => {
  it('renders correctly with default variant', () => {
    const { container } = render(
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    );
    expect(container.firstChild).toHaveAttribute('data-slot', 'alert');
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('renders all variants correctly', () => {
    const variants = ['default', 'destructive', 'info', 'success', 'warning'] as const;

    variants.forEach(variant => {
      const { container } = render(
        <Alert variant={variant}>
          <AlertTitle>Test Title</AlertTitle>
          <AlertDescription>Test Description</AlertDescription>
        </Alert>
      );
      expect(container.firstChild).toHaveAttribute('data-variant', variant);
    });
  });

  it('applies custom className', () => {
    const { container } = render(
      <Alert className="custom-class">
        <AlertTitle>Test</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders AlertTitle correctly', () => {
    render(<AlertTitle>Alert Title</AlertTitle>);
    const title = screen.getByText('Alert Title');
    expect(title).toHaveAttribute('data-slot', 'alert-title');
  });

  it('renders AlertDescription correctly', () => {
    render(<AlertDescription>Alert Description</AlertDescription>);
    const description = screen.getByText('Alert Description');
    expect(description).toHaveAttribute('data-slot', 'alert-description');
    expect(description.tagName).toBe('P');
  });

  it('renders with only Alert (no subcomponents)', () => {
    const { container } = render(<Alert>Simple alert message</Alert>);
    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByText('Simple alert message')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const { container } = render(
      <Alert>
        <svg data-testid="icon" />
        <AlertTitle>Icon Alert</AlertTitle>
        <AlertDescription>With icon</AlertDescription>
      </Alert>
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('pass through extra props to Alert', () => {
    const { container } = render(<Alert id="test-alert">Test</Alert>);
    expect(container.firstChild).toHaveAttribute('id', 'test-alert');
  });

  it('AlertDescription applies custom className', () => {
    const { container } = render(<AlertDescription className="custom-desc">Test</AlertDescription>);
    expect(container.firstChild).toHaveClass('custom-desc');
  });

  it('AlertTitle applies custom className', () => {
    const { container } = render(<AlertTitle className="custom-title">Test</AlertTitle>);
    expect(container.firstChild).toHaveClass('custom-title');
  });

  it('exports alertVariants', async () => {
    const { alertVariants } = await import('./index');
    expect(alertVariants).toBeDefined();
    expect(typeof alertVariants).toBe('function');
  });

  it('renders with children elements inside AlertDescription', () => {
    render(
      <AlertDescription>
        <p>First paragraph</p>
        <p>Second paragraph</p>
      </AlertDescription>
    );
    expect(screen.getByText('First paragraph')).toBeInTheDocument();
    expect(screen.getByText('Second paragraph')).toBeInTheDocument();
  });

  it('has proper role attribute', () => {
    const { container } = render(<Alert>Test Alert</Alert>);
    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });
});
