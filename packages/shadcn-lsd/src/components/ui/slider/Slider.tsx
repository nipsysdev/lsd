import { Slider as SliderPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'lsd:relative lsd:flex lsd:w-full lsd:touch-none lsd:items-center lsd:select-none lsd:data-[disabled]:opacity-50 lsd:data-[orientation=vertical]:h-full lsd:data-[orientation=vertical]:min-h-[var(--lsd-spacing-largest)] lsd:data-[orientation=vertical]:w-auto lsd:data-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          'lsd:relative lsd:grow lsd:overflow-hidden lsd:rounded-full lsd:bg-lsd-base-surface lsd:data-[orientation=horizontal]:h-[var(--lsd-spacing-smaller)] lsd:data-[orientation=horizontal]:w-full lsd:data-[orientation=vertical]:h-full lsd:data-[orientation=vertical]:w-[var(--lsd-spacing-smaller)]'
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            'lsd:absolute lsd:bg-lsd-primary lsd:data-[orientation=horizontal]:h-full lsd:data-[orientation=vertical]:w-full'
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={`thumb-${_values[index]}`}
          className={cn(
            'lsd:block lsd:size-[var(--lsd-spacing-small)] lsd:shrink-0 lsd:rounded-full lsd:border lsd:border-lsd-primary lsd:bg-lsd-background lsd:shadow-xs lsd:ring-lsd-text/50 lsd:transition-all hover:lsd:ring-[var(--lsd-spacing-base)] focus-visible:lsd:ring-[var(--lsd-spacing-base)] focus-visible:lsd:outline-none lsd:disabled:pointer-events-none lsd:disabled:opacity-50'
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

Slider.displayName = 'Slider';

export { Slider };
