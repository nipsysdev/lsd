import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Slider } from '../index';

describe('Slider', () => {
  it('renders without crashing', () => {
    render(<Slider aria-label="Test slider" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('renders with aria-label attribute', () => {
    render(<Slider aria-label="Volume control" />);
    const slider = document.querySelector('[data-slot="slider"]');
    expect(slider).toHaveAttribute('aria-label', 'Volume control');
  });

  it('applies data-slot attribute', () => {
    render(<Slider aria-label="Test slider" />);
    const slider = document.querySelector('[data-slot="slider"]');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('data-slot', 'slider');
  });

  it('applies data-size attribute for md size (default)', () => {
    render(<Slider aria-label="Test slider" />);
    const slider = document.querySelector('[data-slot="slider"]');
    expect(slider).toHaveAttribute('data-size', 'md');
  });

  it('applies correct data-size attribute for sm variant', () => {
    render(<Slider aria-label="Test slider" size="sm" />);
    const slider = document.querySelector('[data-slot="slider"]');
    expect(slider).toHaveAttribute('data-size', 'sm');
  });

  it('applies correct data-size attribute for lg variant', () => {
    render(<Slider aria-label="Test slider" size="lg" />);
    const slider = document.querySelector('[data-slot="slider"]');
    expect(slider).toHaveAttribute('data-size', 'lg');
  });

  describe('size variants', () => {
    it('applies sm size classes to track', () => {
      render(<Slider aria-label="Test slider" size="sm" />);
      const track = document.querySelector('[data-slot="slider-track"]');
      expect(track).toHaveClass('lsd:h-1');
    });

    it('applies md size classes to track', () => {
      render(<Slider aria-label="Test slider" size="md" />);
      const track = document.querySelector('[data-slot="slider-track"]');
      expect(track).toHaveClass('lsd:h-1.5');
    });

    it('applies lg size classes to track', () => {
      render(<Slider aria-label="Test slider" size="lg" />);
      const track = document.querySelector('[data-slot="slider-track"]');
      expect(track).toHaveClass('lsd:h-2');
    });

    it('applies sm size classes to thumb', () => {
      render(<Slider aria-label="Test slider" size="sm" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:size-4');
      expect(thumb).toHaveClass('lsd:shadow-sm');
    });

    it('applies md size classes to thumb', () => {
      render(<Slider aria-label="Test slider" size="md" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:size-5');
      expect(thumb).toHaveClass('lsd:shadow-md');
    });

    it('applies lg size classes to thumb', () => {
      render(<Slider aria-label="Test slider" size="lg" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:size-6');
      expect(thumb).toHaveClass('lsd:shadow-lg');
    });
  });

  describe('disabled state', () => {
    it('applies disabled attribute', () => {
      render(<Slider aria-label="Test slider" disabled />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toHaveAttribute('data-disabled');
    });

    it('applies disabled opacity class', () => {
      render(<Slider aria-label="Test slider" disabled />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toHaveClass('lsd:data-disabled:opacity-50');
    });

    it('thumbs have disabled pointer-events-none class', () => {
      render(<Slider aria-label="Test slider" disabled />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:disabled:pointer-events-none');
    });

    it('thumbs have disabled opacity class', () => {
      render(<Slider aria-label="Test slider" disabled />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:disabled:opacity-50');
    });
  });

  describe('min/max constraints', () => {
    it('has default min and max values', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-valuemin', '0');
      expect(thumb).toHaveAttribute('aria-valuemax', '100');
    });

    it('applies custom min and max values', () => {
      render(<Slider aria-label="Test slider" min={10} max={1000} />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-valuemin', '10');
      expect(thumb).toHaveAttribute('aria-valuemax', '1000');
    });

    it('applies negative min value', () => {
      render(<Slider aria-label="Test slider" min={-100} max={100} />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-valuemin', '-100');
      expect(thumb).toHaveAttribute('aria-valuemax', '100');
    });
  });

  describe('defaultValue', () => {
    it('renders with single defaultValue value', () => {
      render(<Slider aria-label="Test slider" defaultValue={[50]} />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-valuenow', '50');
    });

    it('renders with range defaultValue values', () => {
      render(<Slider aria-label="Test slider" defaultValue={[20, 80]} />);
      const thumbs = screen.getAllByRole('slider');
      expect(thumbs).toHaveLength(2);
      expect(thumbs[0]).toHaveAttribute('aria-valuenow', '20');
      expect(thumbs[1]).toHaveAttribute('aria-valuenow', '80');
    });

    it('renders without defaultValue defaults to min/max', () => {
      render(<Slider aria-label="Test slider" />);
      const thumbs = screen.getAllByRole('slider');
      expect(thumbs).toHaveLength(1);
      expect(thumbs[0]).toHaveAttribute('aria-valuenow', '0');
    });
  });

  describe('controlled value', () => {
    it('renders with single controlled value', () => {
      render(<Slider aria-label="Test slider" value={[75]} />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-valuenow', '75');
    });

    it('renders with range controlled values', () => {
      render(<Slider aria-label="Test slider" value={[10, 90]} />);
      const thumbs = screen.getAllByRole('slider');
      expect(thumbs).toHaveLength(2);
      expect(thumbs[0]).toHaveAttribute('aria-valuenow', '10');
      expect(thumbs[1]).toHaveAttribute('aria-valuenow', '90');
    });

    it('renders with controlled value at min', () => {
      render(<Slider aria-label="Test slider" value={[0]} />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-valuenow', '0');
    });

    it('renders with controlled value at max', () => {
      render(<Slider aria-label="Test slider" value={[100]} />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-valuenow', '100');
    });
  });

  describe('track', () => {
    it('renders track element', () => {
      render(<Slider aria-label="Test slider" />);
      const track = document.querySelector('[data-slot="slider-track"]');
      expect(track).toBeInTheDocument();
      expect(track).toHaveClass('lsd:relative');
      expect(track).toHaveClass('lsd:overflow-hidden');
    });

    it('applies background color to track', () => {
      render(<Slider aria-label="Test slider" />);
      const track = document.querySelector('[data-slot="slider-track"]');
      expect(track).toHaveClass('lsd:bg-lsd-border/20');
    });

    it('applies width classes to horizontal track', () => {
      render(<Slider aria-label="Test slider" />);
      const track = document.querySelector('[data-slot="slider-track"]');
      expect(track).toHaveClass('lsd:data-[orientation=horizontal]:w-full');
    });
  });

  describe('range', () => {
    it('renders range element within track', () => {
      render(<Slider aria-label="Test slider" />);
      const range = document.querySelector('[data-slot="slider-range"]');
      expect(range).toBeInTheDocument();
    });

    it('applies background color to range', () => {
      render(<Slider aria-label="Test slider" />);
      const range = document.querySelector('[data-slot="slider-range"]');
      expect(range).toHaveClass('lsd:bg-lsd-primary');
    });

    it('applies absolute positioning to range', () => {
      render(<Slider aria-label="Test slider" />);
      const range = document.querySelector('[data-slot="slider-range"]');
      expect(range).toHaveClass('lsd:absolute');
    });
  });

  describe('thumb', () => {
    it('renders thumb element', () => {
      render(<Slider aria-label="Test slider" defaultValue={[50]} />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toBeInTheDocument();
    });

    it('renders two thumbs for range', () => {
      render(<Slider aria-label="Test slider" defaultValue={[20, 80]} />);
      const thumbs = document.querySelectorAll('[data-slot="slider-thumb"]');
      expect(thumbs).toHaveLength(2);
    });

    it('applies rounded-full class to thumb', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:rounded-full');
    });

    it('applies border classes to thumb', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:border-2');
      expect(thumb).toHaveClass('lsd:border-lsd-primary');
    });

    it('applies background color to thumb', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:bg-lsd-surface');
    });

    it('applies transition classes to thumb', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('lsd:transition-all');
      expect(thumb).toHaveClass('lsd:duration-200');
      expect(thumb).toHaveClass('lsd:ease-out');
    });

    it('applies hover transformation', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('hover:lsd:scale-110');
    });

    it('applies active transformation', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('active:lsd:scale-95');
    });

    it('applies focus-visible outline classes', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = document.querySelector('[data-slot="slider-thumb"]');
      expect(thumb).toHaveClass('focus-visible:lsd:outline-none');
      expect(thumb).toHaveClass('focus-visible:lsd:ring-2');
      expect(thumb).toHaveClass('focus-visible:lsd:ring-lsd-primary');
      expect(thumb).toHaveClass('focus-visible:lsd:ring-offset-2');
    });
  });

  describe('accessibility', () => {
    it('thumbs have role="slider"', () => {
      render(<Slider aria-label="Test slider" />);
      const thumbs = screen.getAllByRole('slider');
      expect(thumbs.length).toBeGreaterThan(0);
    });

    it('root has aria-label', () => {
      render(<Slider aria-label="Volume" />);
      const root = document.querySelector('[data-slot="slider"]');
      expect(root).toHaveAttribute('aria-label', 'Volume');
    });

    it('has aria-orientation default to horizontal', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('thumbs are focusable', () => {
      render(<Slider aria-label="Test slider" />);
      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('tabIndex', '0');
    });
  });

  describe('orientation', () => {
    it('applies vertical orientation classes when orientation=vertical', () => {
      render(<Slider aria-label="Test slider" orientation="vertical" />);
      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('applies data-orientation to slider for vertical', () => {
      render(<Slider aria-label="Test slider" orientation="vertical" />);
      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('data-orientation', 'vertical');
    });
  });

  describe('step prop', () => {
    it('renders with step prop', () => {
      render(<Slider aria-label="Test slider" step={5} />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toBeInTheDocument();
    });

    it('renders with decimal step', () => {
      render(<Slider aria-label="Test slider" step={0.5} />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toBeInTheDocument();
    });
  });

  describe('className merging', () => {
    it('merges custom className with component classes', () => {
      render(<Slider aria-label="Test slider" className="custom-slider-class" />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toHaveClass('custom-slider-class');
      expect(slider).toHaveClass('lsd:relative'); // Verify base classes are still present
    });
  });

  describe('props passthrough', () => {
    it('passes through data-testid', () => {
      render(<Slider aria-label="Test slider" data-testid="test-slider" />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toHaveAttribute('data-testid', 'test-slider');
    });

    it('passes through id', () => {
      render(<Slider aria-label="Test slider" id="slider-1" />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toHaveAttribute('id', 'slider-1');
    });
  });

  it('has displayName', () => {
    expect(Slider.displayName).toBe('Slider');
  });

  describe('base classes', () => {
    it('applies positioning classes', () => {
      render(<Slider aria-label="Test slider" />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toHaveClass('lsd:relative');
    });

    it('applies layout classes', () => {
      render(<Slider aria-label="Test slider" />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toHaveClass('lsd:flex');
      expect(slider).toHaveClass('lsd:items-center');
    });

    it('applies utility classes', () => {
      render(<Slider aria-label="Test slider" />);
      const slider = document.querySelector('[data-slot="slider"]');
      expect(slider).toHaveClass('lsd:touch-none');
      expect(slider).toHaveClass('lsd:select-none');
    });
  });
});
