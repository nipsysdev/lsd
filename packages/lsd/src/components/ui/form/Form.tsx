'use client';

import { FormProvider } from 'react-hook-form';

/**
 * Form - Form provider using React Hook Form for form state management.
 *
 * A Context Provider that wraps form components to share React Hook Form values and methods. Use FormField, FormItem, FormLabel, and FormMessage to build accessible form controls.
 *
 * @docSectionPageDescription
 * Form provider component using React Hook Form for form state management.
 *
 * @docSectionAbout
 * A Context Provider that wraps form components to share React Hook Form values and methods. Use FormField, FormItem, FormLabel, and FormMessage to build accessible form controls.
 *
 * @docSectionComposition
 * • Form - Root provider that wraps all form components
 * • FormField - Connects form fields to the form state
 *   • FormItem - Container for individual form fields
 *     • FormLabel - Label for the form field
 *     • FormControl - Wrapper for the actual input component
 *     • FormDescription - Additional helper text for the field
 *     • FormMessage - Validation error message display
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through form fields
 * • Enter - Submit form when on submit button
 * • Space - Toggle checkboxes and radio buttons
 *
 * @docSectionAccessibilityAria
 * • aria-invalid - Indicates invalid form fields
 * • aria-describedby - Links field to description or error messages
 * • aria-labelledby or aria-label - Provides accessible labels
 *
 * @docSectionAccessibilityFocus
 * Follows standard HTML form focus behavior. Focus moves through fields in document order when using Tab. Invalid fields receive focus when form validation fails.
 *
 * @exportAs root
 */
const Form = FormProvider;

export { Form };
