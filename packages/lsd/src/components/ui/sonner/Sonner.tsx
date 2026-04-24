import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

/**
 * Toaster - Toast notification container for displaying messages to users.
 *
 * Renders a container that displays toast notifications positioned on screen edges.
 * Supports automatic dismissal, animations, and different toast types.
 *
 * @docSectionPageDescription
 * Toast notification container for displaying messages to users.
 *
 * @docSectionAbout
 * A container component that displays toast notifications for user feedback and system messages. Based on the sonner library, it provides pre-styled notifications that appear temporarily on screen edges. The component automatically manages toast display, positioning, and dismissal with smooth animations.
 *
 * @docSectionAccessibilityKeyboard
 * • Escape - Dismiss all visible toasts
 *
 * @docSectionAccessibilityAria
 * • Uses aria-live regions to announce toast messages to screen readers
 * • Uses appropriate ARIA roles (alert or status) based on toast type
 *
 * @docSectionAccessibilityFocus
 * Toasts do not receive keyboard focus as they are transient UI elements. Screen readers automatically announce new toasts when they appear. Users can dismiss all toasts with Escape regardless of current focus.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="lsd:toaster lsd:group"
      richColors
      style={
        {
          '--normal-bg': 'var(--lsd-surface)',
          '--normal-text': 'var(--lsd-text-primary)',
          '--normal-border': 'var(--lsd-border)',
          '--success-bg': 'var(--lsd-surface)',
          '--success-border': 'var(--lsd-success)',
          '--success-text': 'var(--lsd-success-text)',
          '--error-bg': 'var(--lsd-surface)',
          '--error-border': 'var(--lsd-destructive)',
          '--error-text': 'var(--lsd-destructive-text)',
          '--warning-bg': 'var(--lsd-surface)',
          '--warning-border': 'var(--lsd-warning)',
          '--warning-text': 'var(--lsd-warning-text)',
          '--info-bg': 'var(--lsd-surface)',
          '--info-border': 'var(--lsd-info)',
          '--info-text': 'var(--lsd-info-text)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
