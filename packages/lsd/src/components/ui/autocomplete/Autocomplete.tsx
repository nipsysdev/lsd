import { XIcon } from '@phosphor-icons/react';
import * as React from 'react';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { AutocompleteContent } from './AutocompleteList';
import type { AutocompleteProps } from './types';
import { AUTOCOMPLETE_SIZE_CLASSES } from './types';
import { useAutocompleteFetch } from './useAutocompleteFetch';

/**
 * Autocomplete - Text input with searchable dropdown suggestions
 *
 * Displays filtered options or fetched results in a dropdown. Supports static local
 * options and remote server-side fetching with debouncing.
 *
 * @docSectionPageDescription
 * Text input with searchable dropdown suggestions
 *
 * @docSectionAbout
 * A text input component that displays filtered options or fetched results in a dropdown. Supports static local options with client-side filtering, and remote server-side fetching with debouncing. Can operate in controlled or uncontrolled modes.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to the autocomplete input
 * • ArrowDown - Open dropdown and move to first option
 * • ArrowUp - Move to previous option in dropdown
 * • Enter - Select the highlighted option
 * • Escape - Close dropdown without selecting
 *
 * @docSectionAccessibilityAria
 * • role="combobox" is managed by Radix Popover
 * • aria-expanded indicates dropdown open state
 * • aria-controls links input to dropdown content
 * • aria-activedescendant identifies selected option
 *
 * @docSectionAccessibilityFocus
 * Focus managed by Radix Popover component. First option receives focus when dropdown opens. Focus returns to input when option selected or dropdown closes. Clicking outside closes dropdown and returns focus to input.
 *
 * @exportAs root
 */
const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      onOptionsFetch,
      placeholder = 'Search...',
      emptyText = 'No results found.',
      loadingText = 'Loading...',
      className,
      onValueChange,
      onClear,
      disabled = false,
      label,
      size = 'md',
      icon,
      error = false,
      variant = 'outlined',
      clearable = false,
      value: controlledValue,
      isLoading: externalIsLoading,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState('');
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const [searchText, setSearchText] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Forward ref to inputRef
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const { asyncOptions, isLoading } = useAutocompleteFetch({
      onOptionsFetch,
      searchText,
      open,
      externalIsLoading,
    });

    const handleSelect = React.useCallback(
      (currentValue: string) => {
        if (controlledValue === undefined) {
          setInternalValue(currentValue);
        }
        setSearchText('');
        setOpen(false);
        onValueChange?.(currentValue);
      },
      [onValueChange, controlledValue]
    );

    const onCancel = () => {
      if (controlledValue === undefined) {
        setInternalValue('');
      }
      setSearchText('');
      onValueChange?.('');
      onClear?.();
    };

    // Filter options based on search text
    const filteredOptions = React.useMemo(() => {
      if (onOptionsFetch) {
        // For async options, we don't filter locally as the server should handle it
        return asyncOptions;
      }

      if (!options) return [];

      if (!searchText) return options;
      return options.filter(option =>
        option.label.toLowerCase().startsWith(searchText.toLowerCase())
      );
    }, [options, asyncOptions, searchText, onOptionsFetch]);

    const inputId = props.id || 'autocomplete-input';
    const currentSize = AUTOCOMPLETE_SIZE_CLASSES[size];

    const displayValue = value
      ? options?.find(opt => opt.value === value)?.label ||
        asyncOptions?.find(opt => opt.value === value)?.label ||
        ''
      : '';

    return (
      <div
        {...props}
        className={cn(
          // Box Model
          'lsd:box-border',
          currentSize.container,
          className
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              // Display
              'lsd:block',
              // Typography
              'lsd:text-sm',
              currentSize.label,
              // Colors & Backgrounds
              disabled ? 'lsd:text-lsd-text-secondary' : 'lsd:text-lsd-text-primary'
            )}
          >
            {label}
          </label>
        )}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div
              className={cn(
                // Layout & Positioning
                'lsd:flex',
                'lsd:justify-between',
                currentSize.inputContainer,
                // Borders, Shapes & Effects
                variant === 'outlined'
                  ? disabled
                    ? 'lsd:border lsd:border-lsd-border'
                    : 'lsd:border lsd:border-lsd-border'
                  : disabled
                    ? 'lsd:border lsd:border-transparent lsd:border-b-lsd-border'
                    : 'lsd:border lsd:border-transparent lsd:border-b-lsd-border',
                // Interactive States
                disabled ? 'lsd:cursor-not-allowed' : 'lsd:cursor-pointer'
              )}
            >
              <input
                ref={inputRef}
                id={inputId}
                value={displayValue}
                placeholder={placeholder}
                disabled={disabled}
                readOnly
                className={cn(
                  // Borders, Shapes & Effects
                  'lsd:border-none',
                  'lsd:outline-none',
                  // Colors & Backgrounds
                  'lsd:bg-none',
                  // Sizing
                  'lsd:w-full',
                  // Typography
                  'lsd:text-[14px]',
                  currentSize.input,
                  // Colors & Backgrounds
                  disabled
                    ? 'lsd:text-lsd-text-secondary'
                    : error
                      ? 'lsd:text-lsd-destructive'
                      : 'lsd:text-lsd-text-primary',
                  // Interactive States
                  disabled ? 'lsd:cursor-not-allowed' : '',
                  // Typography
                  'lsd:placeholder:lsd-text-secondary'
                )}
              />
              {icon && (
                <div
                  className={cn(
                    // Layout & Positioning
                    'lsd:flex',
                    'lsd:items-center',
                    currentSize.icon
                  )}
                >
                  {icon}
                </div>
              )}
              {value && clearable && (
                <button
                  type="button"
                  onClick={onCancel}
                  disabled={disabled}
                  className={cn(
                    // Layout & Positioning
                    'lsd:flex',
                    'lsd:items-center',
                    currentSize.icon,
                    // Interactive States
                    disabled ? 'lsd:cursor-not-allowed' : 'lsd:cursor-pointer'
                  )}
                >
                  <XIcon
                    className={cn(
                      // Sizing
                      'lsd:size-(--lsd-spacing-base)',
                      // Colors & Backgrounds
                      disabled ? 'lsd:text-lsd-text-secondary' : 'lsd:text-lsd-icon-primary'
                    )}
                    weight="duotone"
                  />
                </button>
              )}
            </div>
          </PopoverTrigger>
          <AutocompleteContent
            searchText={searchText}
            onSearchTextChange={setSearchText}
            placeholder={placeholder}
            loadingText={loadingText}
            emptyText={emptyText}
            isLoading={isLoading}
            filteredOptions={filteredOptions}
            onSelect={handleSelect}
          />
        </Popover>
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
