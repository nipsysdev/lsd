import type * as React from 'react';
import type { BorderVariant, SizeVariant } from '@/lib/types';

/**
 * Represents an option in the autocomplete dropdown.
 */
export type AutocompleteOption = {
  /**
   * Unique identifier for the option.
   */
  value: string;
  /**
   * Display text shown in the dropdown.
   */
  label: string;
};

export type AutocompleteSize = SizeVariant;
export type AutocompleteVariant = BorderVariant;

/**
 * Props for the Autocomplete component.
 *
 * Extends standard HTML input attributes with autocomplete functionality. Supports
 * server-side and client-side options, and controlled/uncontrolled modes.
 */
export interface AutocompleteProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'size'> {
  /**
   * Array of options for client-side filtering.
   */
  options?: AutocompleteOption[];
  /**
   * Fetches options asynchronously based on search text.
   */
  onOptionsFetch?: (searchText: string) => Promise<AutocompleteOption[]>;
  /**
   * Placeholder text displayed when no value is selected.
   */
  placeholder?: string;
  /**
   * Text displayed when no options match the search.
   */
  emptyText?: string;
  /**
   * Text displayed while options are being fetched.
   */
  loadingText?: string;
  /**
   * Optional className for custom styling.
   */
  className?: string;
  /**
   * Callback fired when the selected value changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear?: () => void;
  /**
   * Disables the autocomplete input.
   */
  disabled?: boolean;
  /**
   * Label shown above the input field.
   */
  label?: string;
  /**
   * Size of the autocomplete component.
   */
  size?: AutocompleteSize;
  /**
   * Icon element displayed at the end of the input.
   */
  icon?: React.ReactNode;
  /**
   * Displays the input in error state.
   */
  error?: boolean;
  /**
   * Visual style variant for the input border.
   */
  variant?: AutocompleteVariant;
  /**
   * Shows a clear button when a value is selected.
   */
  clearable?: boolean;
  /**
   * Currently selected value string for controlled mode.
   */
  value?: string;
  /**
   * External loading state override for async fetching.
   */
  isLoading?: boolean;
}

/**
 * Size classes configuration for the Autocomplete component.
 *
 * Maps size variants to CSS classes for container, label, input container, input, and icon elements.
 */
export const AUTOCOMPLETE_SIZE_CLASSES: Record<
  AutocompleteSize,
  {
    container: string;
    label: string;
    inputContainer: string;
    input: string;
    icon: string;
  }
> = {
  xs: {
    container: 'lsd:w-[140px]',
    label: 'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-small)]',
    inputContainer: 'lsd:h-[var(--lsd-spacing-larger)]',
    input: 'lsd:px-[var(--lsd-spacing-smaller)] lsd:py-[var(--lsd-spacing-smallest)]',
    icon: 'lsd:px-[var(--lsd-spacing-smaller)] lsd:py-[var(--lsd-spacing-smaller)]',
  },
  sm: {
    container: 'lsd:w-[164px]',
    label: 'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-small)]',
    inputContainer: 'lsd:h-[var(--lsd-spacing-largest)]',
    input: 'lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)]',
    icon: 'lsd:px-[var(--lsd-spacing-smaller)] lsd:py-[var(--lsd-spacing-smaller)]',
  },
  md: {
    container: 'lsd:w-[188px]',
    label: 'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-base)]',
    inputContainer: 'lsd:h-8',
    input: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-smaller)]',
    icon: 'lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)]',
  },
  lg: {
    container: 'lsd:w-[208px]',
    label: 'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-base)]',
    inputContainer: 'lsd:h-10',
    input: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-small)]',
    icon: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-small)]',
  },
  xl: {
    container: 'lsd:w-[240px]',
    label: 'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-base)]',
    inputContainer: 'lsd:h-12',
    input: 'lsd:px-[var(--lsd-spacing-large)] lsd:py-[var(--lsd-spacing-small)]',
    icon: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-base)]',
  },
};

/**
 * Debounce delay for async option fetching in milliseconds.
 */
export const AUTOCOMPLETE_DEBOUNCE_DELAY = 300;
