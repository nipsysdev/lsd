/** biome-ignore-all lint/suspicious/noArrayIndexKey: We combine value index + slider ID */
import { Slider as SliderPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface SliderProps
  extends Omit<React.ComponentProps<typeof SliderPrimitive.Root>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

const sliderSizes = {
  sm: {
    track: 'lsd:h-1',
    thumb: 'lsd:size-4 lsd:shadow-sm',
  },
  md: {
    track: 'lsd:h-1.5',
    thumb: 'lsd:size-5 lsd:shadow-md',
  },
  lg: {
    track: 'lsd:h-2',
    thumb: 'lsd:size-6 lsd:shadow-lg',
  },
};

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  size = 'md',
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  );

  const sliderId = React.useId();
  const sizeStyles = sliderSizes[size];

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      data-size={size}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        // Positioning
        'lsd:relative',
        // Layout & Positioning
        'lsd:flex',
        'lsd:items-center',
        // Other Utility Classes - touch
        'lsd:touch-none',
        // Other Utility Classes - select
        'lsd:select-none',
        // Pseudo-selectors & ARIA - disabled
        'lsd:data-disabled:opacity-50',
        // Pseudo-selectors & ARIA - orientation vertical
        'lsd:data-[orientation=vertical]:h-full',
        'lsd:data-[orientation=vertical]:min-h-(--lsd-spacing-largest)',
        'lsd:data-[orientation=vertical]:w-auto',
        'lsd:data-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          // Positioning
          'lsd:relative',
          // Overflow
          'lsd:overflow-hidden',
          // Colors & Backgrounds
          'lsd:bg-lsd-border/20',
          // Pseudo-selectors & ARIA - orientation horizontal
          'lsd:data-[orientation=horizontal]:w-full',
          'lsd:data-[orientation=horizontal]:lsd:grow',
          // Pseudo-selectors & ARIA - orientation vertical
          'lsd:data-[orientation=vertical]:h-full',
          'lsd:data-[orientation=vertical]:lsd:w-full',
          // Dynamic track size
          sizeStyles.track
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            // Positioning
            'lsd:absolute',
            // Colors & Backgrounds
            'lsd:bg-lsd-primary',
            // Pseudo-selectors & ARIA - orientation horizontal
            'lsd:data-[orientation=horizontal]:h-full',
            // Pseudo-selectors & ARIA - orientation vertical
            'lsd:data-[orientation=vertical]:w-full'
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={`${sliderId}-thumb-${index}`}
          className={cn(
            // Display
            'lsd:block',
            // Other Utility Classes - shrink
            'lsd:shrink-0',
            // Borders, Shapes & Effects
            'lsd:rounded-full',
            'lsd:border-2',
            'lsd:border-lsd-primary',
            // Colors & Backgrounds
            'lsd:bg-lsd-surface',
            // Transitions & Animations
            'lsd:transition-all',
            'lsd:duration-200',
            'lsd:ease-out',
            // Transform - hover
            'hover:lsd:scale-110',
            // Transform - active
            'active:lsd:scale-95',
            // Interactive States - focus visible
            'focus-visible:lsd:outline-none',
            'focus-visible:lsd:ring-2',
            'focus-visible:lsd:ring-lsd-primary',
            'focus-visible:lsd:ring-offset-2',
            // Interactive States - disabled
            'lsd:disabled:pointer-events-none',
            'lsd:disabled:opacity-50',
            // Dynamic thumb size
            sizeStyles.thumb
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

Slider.displayName = 'Slider';

export { Slider };
