import * as React from 'react';
import type { AutocompleteOption } from './types';
import { AUTOCOMPLETE_DEBOUNCE_DELAY } from './types';

/**
 * Options for the useAutocompleteFetch hook.
 */
interface UseAutocompleteFetchOptions {
  /**
   * Async function to fetch options based on search text.
   */
  onOptionsFetch?: (searchText: string) => Promise<AutocompleteOption[]>;
  /**
   * Current search text from the input.
   */
  searchText: string;
  /**
   * Whether the dropdown is currently open.
   */
  open: boolean;
  /**
   * External loading state override.
   */
  externalIsLoading?: boolean;
}

/**
 * Result from the useAutocompleteFetch hook.
 */
interface UseAutocompleteFetchResult {
  /**
   * Options fetched from the async function.
   */
  asyncOptions: AutocompleteOption[];
  /**
   * Loading state of the async fetch operation.
   */
  isLoading: boolean;
}

/**
 * Hook for managing async autocomplete option fetching.
 *
 * Handles debounced fetching of options based on search text, manages loading
 * state, and provides error handling. Only fetches when the dropdown is open
 * to avoid unnecessary API calls. Debounces requests (300ms by default) to
 * prevent excessive API calls during typing.
 */
export function useAutocompleteFetch({
  onOptionsFetch,
  searchText,
  open,
  externalIsLoading,
}: UseAutocompleteFetchOptions): UseAutocompleteFetchResult {
  const [asyncOptions, setAsyncOptions] = React.useState<AutocompleteOption[]>([]);
  const [internalIsLoading, setInternalIsLoading] = React.useState(false);

  const isLoading = externalIsLoading !== undefined ? externalIsLoading : internalIsLoading;

  React.useEffect(() => {
    if (onOptionsFetch && open && externalIsLoading === undefined) {
      setInternalIsLoading(true);
      const fetchOptions = async () => {
        try {
          const fetchedOptions = await onOptionsFetch(searchText);
          setAsyncOptions(fetchedOptions);
        } catch (error) {
          console.error('Error fetching options:', error);
          setAsyncOptions([]);
        } finally {
          setInternalIsLoading(false);
        }
      };

      // Debounce the fetch to avoid excessive API calls
      const timer = setTimeout(() => {
        fetchOptions();
      }, AUTOCOMPLETE_DEBOUNCE_DELAY);

      return () => clearTimeout(timer);
    }
  }, [onOptionsFetch, searchText, open, externalIsLoading]);

  return { asyncOptions, isLoading };
}
