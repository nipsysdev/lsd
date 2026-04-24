import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import type { AutocompleteOption } from './types';

/**
 * Props for the AutocompleteContent component.
 *
 * Internal component used by Autocomplete to render the dropdown content.
 */
interface AutocompleteContentProps {
  /**
   * Current search text entered by the user.
   */
  searchText: string;
  /**
   * Callback for updating the search text.
   */
  onSearchTextChange: (text: string) => void;
  /**
   * Placeholder text for the search input.
   */
  placeholder: string;
  /**
   * Text to display while options are loading.
   */
  loadingText: string;
  /**
   * Text to display when no options are available.
   */
  emptyText: string;
  /**
   * Whether async option fetching is in progress.
   */
  isLoading: boolean;
  /**
   * Options to display in the dropdown.
   */
  filteredOptions: AutocompleteOption[];
  /**
   * Callback fired when an option is selected.
   */
  onSelect: (value: string) => void;
}

/**
 * AutocompleteContent - Dropdown content for the autocomplete component
 *
 * Internal component that renders dropdown list with search input, loading state,
 * empty state, and selectable options. Uses Radix Command for keyboard navigation
 * and highlights matching portion of option labels based on search text.
 *
 * @exportAs sub
 */
export function AutocompleteContent({
  searchText,
  onSearchTextChange,
  placeholder,
  loadingText,
  emptyText,
  isLoading,
  filteredOptions,
  onSelect,
}: AutocompleteContentProps) {
  return (
    <PopoverContent
      className={cn(
        // Spacing
        'lsd:p-0',
        // Colors & Backgrounds
        'lsd:bg-lsd-surface',
        'lsd:border-lsd-border',
        // Borders, Shapes & Effects
        'lsd:data-[side=top]:border-b-0',
        'lsd:data-[side=bottom]:border-t-0'
      )}
      align="start"
      sideOffset={0}
    >
      <Command
        className={cn(
          // Borders, Shapes & Effects
          'lsd:rounded-none',
          'lsd:border-none',
          // Shadows
          'lsd:shadow-none'
        )}
      >
        <CommandInput
          value={searchText}
          onValueChange={onSearchTextChange}
          className={cn(
            // Sizing
            'lsd:h-9',
            // Borders, Shapes & Effects
            'lsd:border-none'
          )}
          placeholder={placeholder}
        />
        <CommandList>
          {isLoading ? (
            <CommandEmpty>{loadingText}</CommandEmpty>
          ) : filteredOptions.length === 0 ? (
            <CommandEmpty>{emptyText}</CommandEmpty>
          ) : (
            filteredOptions?.map(option => {
              const inputValue = searchText;
              const matchedPart = option.label.slice(0, inputValue.length);
              const remainingPart = option.label.slice(inputValue.length);

              return (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  keywords={[option.label]}
                  onSelect={() => onSelect(option.value)}
                  className={cn(
                    // Colors & Backgrounds
                    'lsd:text-lsd-text-primary',
                    // Interactive States
                    'lsd:hover:underline',
                    'lsd:focus:underline',
                    'lsd:cursor-pointer',
                    // Pseudo-selectors & ARIA
                    'lsd:data-[selected=true]:underline'
                  )}
                >
                  <span
                    className={cn(
                      // Display
                      'lsd:block',
                      // Other Utility Classes
                      'lsd:overflow-hidden',
                      'lsd:whitespace-nowrap',
                      'lsd:text-ellipsis'
                    )}
                  >
                    {matchedPart}
                    <span
                      className={cn(
                        // Colors & Backgrounds
                        'lsd:text-lsd-text-primary',
                        // Other Utility Classes
                        'lsd:whitespace-pre'
                      )}
                    >
                      {remainingPart}
                    </span>
                  </span>
                </CommandItem>
              );
            })
          )}
        </CommandList>
      </Command>
    </PopoverContent>
  );
}
