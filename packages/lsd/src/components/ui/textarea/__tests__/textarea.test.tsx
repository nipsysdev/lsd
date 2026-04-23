import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Textarea } from '../index';

describe('Textarea', () => {
  it('renders without crashing', () => {
    render(<Textarea />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders as a textarea element', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('applies data-slot attribute', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('data-slot', 'textarea');
  });

  it('applies base layout classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:flex');
    expect(textarea).toHaveClass('lsd:w-full');
  });

  it('applies sizing classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:min-h-16');
    expect(textarea).toHaveClass('lsd:field-sizing-content');
  });

  it('applies border classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:rounded-none');
    expect(textarea).toHaveClass('lsd:border');
    expect(textarea).toHaveClass('lsd:border-lsd-border');
  });

  it('applies shadow classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:shadow-xs');
  });

  it('applies background classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:bg-transparent');
  });

  it('applies spacing classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:px-(--lsd-spacing-base)');
    expect(textarea).toHaveClass('lsd:py-(--lsd-spacing-base)');
  });

  it('applies typography size classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:text-base');
    expect(textarea).toHaveClass('md:lsd:text-sm');
  });

  it('applies transition classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:transition-[color,box-shadow]');
  });

  it('applies focus outline classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:outline-none');
  });

  it('applies focus-visible border classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('focus-visible:lsd:border-lsd-primary');
  });

  it('applies focus-visible ring classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('focus-visible:lsd:ring-[3px]');
    expect(textarea).toHaveClass('focus-visible:lsd:ring-lsd-primary/50');
  });

  it('applies placeholder color classes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:placeholder:text-lsd-text-secondary');
  });

  it('applies disabled state cursor class', () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:disabled:cursor-not-allowed');
  });

  it('applies disabled state opacity class', () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:disabled:opacity-50');
  });

  it('applies aria-invalid border class', () => {
    render(<Textarea aria-invalid="true" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:aria-invalid:border-lsd-destructive');
  });

  it('applies aria-invalid ring classes', () => {
    render(<Textarea aria-invalid="true" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('lsd:aria-invalid:ring-lsd-destructive/40');
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test content' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('handles focus events', () => {
    const handleFocus = vi.fn();
    render(<Textarea onFocus={handleFocus} />);
    fireEvent.focus(screen.getByRole('textbox'));
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('handles blur events', () => {
    const handleBlur = vi.fn();
    render(<Textarea onBlur={handleBlur} />);
    fireEvent.blur(screen.getByRole('textbox'));
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
  });

  it('merges custom className with component classes', () => {
    render(<Textarea className="custom-class" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
    expect(textarea).toHaveClass('lsd:flex'); // Verify base classes are still present
  });

  it('passes through additional props', () => {
    render(<Textarea data-testid="test-textarea" id="textarea-1" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('data-testid', 'test-textarea');
    expect(textarea).toHaveAttribute('id', 'textarea-1');
  });

  it('forwards ref to underlying textarea element', () => {
    const ref = vi.fn();
    render(<Textarea ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('renders with placeholder', () => {
    render(<Textarea placeholder="Enter your message" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('placeholder', 'Enter your message');
  });

  it('renders with value', () => {
    render(<Textarea value="test value" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('test value');
  });

  it('renders with rows attribute', () => {
    render(<Textarea rows={5} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('renders with cols attribute', () => {
    render(<Textarea cols={30} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('cols', '30');
  });

  it('renders with name attribute', () => {
    render(<Textarea name="message" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('name', 'message');
  });

  it('renders with required attribute', () => {
    render(<Textarea required />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeRequired();
  });

  it('renders with readOnly attribute', () => {
    render(<Textarea readOnly />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('readonly');
  });

  it('renders with minLength attribute', () => {
    render(<Textarea minLength={10} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('minlength', '10');
  });

  it('renders with maxLength attribute', () => {
    render(<Textarea maxLength={100} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('maxlength', '100');
  });

  it('renders with aria-label', () => {
    render(<Textarea aria-label="Message input" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-label', 'Message input');
  });

  it('renders with aria-describedby', () => {
    render(<Textarea aria-describedby="description-id" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-describedby', 'description-id');
  });

  it('has displayName', () => {
    expect(Textarea.displayName).toBe('Textarea');
  });
});
