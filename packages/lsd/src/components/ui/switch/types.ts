/**
 * Available size options for the Switch component.
 *
 * Determines the visual size of the switch.
 */
export type SwitchSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Switch component.
 *
 * Extends the base switch component with size variants.
 */
export interface SwitchProps {
  /**
   * The size of the switch.
   *
   * Controls the visual size of the switch component.
   */
  size?: SwitchSize;
}
