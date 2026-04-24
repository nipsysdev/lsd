import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Slider } from './index';

describe('Slider', () => {
  it('renders correctly', () => {
    const { container } = render(<Slider defaultValue={[33]} />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'slider');
  });

  it('applies custom className', () => {
    const { container } = render(<Slider className="custom-slider" defaultValue={[50]} />);
    expect(container.firstChild).toHaveClass('custom-slider');
  });

  it('passes through extra props', () => {
    const { container } = render(<Slider id="test-slider" defaultValue={[50]} />);
    expect(container.firstChild).toHaveAttribute('id', 'test-slider');
  });

  it('renders track with data-slot', () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    const track = container.querySelector('[data-slot="slider-track"]');
    expect(track).toBeInTheDocument();
    expect(track).toHaveAttribute('data-slot', 'slider-track');
  });

  it('renders range with data-slot', () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    const range = container.querySelector('[data-slot="slider-range"]');
    expect(range).toBeInTheDocument();
    expect(range).toHaveAttribute('data-slot', 'slider-range');
  });

  it('renders thumb with data-slot', () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs).toHaveLength(1);
    expect(thumbs[0]).toHaveAttribute('data-slot', 'slider-thumb');
  });

  it('renders two thumbs for range slider', () => {
    const { container } = render(<Slider defaultValue={[33, 66]} />);
    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs).toHaveLength(2);
  });

  it('renders multiple thumbs for multiple values', () => {
    const { container } = render(<Slider defaultValue={[25, 50, 75]} />);
    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs).toHaveLength(3);
  });

  it('applies key usage props (min, max, step)', () => {
    const { container } = render(<Slider defaultValue={[50]} min={0} max={200} step={5} />);
    // Radix Slider uses these internally but doesn't expose as HTML attributes
    // Just verify component renders correctly
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies custom value directly (controlled)', () => {
    const { container } = render(<Slider value={[75]} />);
    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs).toHaveLength(1);
  });

  it('renders disabled state', () => {
    const { container } = render(<Slider defaultValue={[50]} disabled />);
    expect(container.firstChild).toHaveAttribute('data-disabled');
  });

  it('applies vertical orientation', () => {
    const { container } = render(<Slider defaultValue={[50]} orientation="vertical" />);
    expect(container.firstChild).toHaveAttribute('data-orientation', 'vertical');
  });

  it('renders default range when no value or defaultValue provided', () => {
    const { container } = render(<Slider />);
    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    // Should render two thumbs for [min, max] default range
    expect(thumbs).toHaveLength(2);
  });

  it('renders default range with custom min and max', () => {
    const { container } = render(<Slider min={10} max={90} />);
    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    // Should render two thumbs for [min, max] default range
    expect(thumbs).toHaveLength(2);
  });
});
