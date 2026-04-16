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

interface AutocompleteContentProps {
  searchText: string;
  onSearchTextChange: (text: string) => void;
  placeholder: string;
  loadingText: string;
  emptyText: string;
  isLoading: boolean;
  filteredOptions: AutocompleteOption[];
  onSelect: (value: string) => void;
}

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
