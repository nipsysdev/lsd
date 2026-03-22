import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Toaster } from './index';

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: vi.fn(() => ({ theme: 'light' })),
}));

// Mock sonner Toaster with factory function
vi.mock('sonner', () => {
  const mockToast = vi.fn();
  const mockToastSuccess = vi.fn();
  const mockToastError = vi.fn();
  const mockToastWarning = vi.fn();
  const mockToastInfo = vi.fn();
  const mockToastPromise = vi.fn();

  return {
    Toaster: vi.fn(({ className, style, ...props }) => (
      <div data-testid="sonner-toaster" className={className} style={style} {...props} />
    )),
    toast: Object.assign(mockToast, {
      success: mockToastSuccess,
      error: mockToastError,
      warning: mockToastWarning,
      info: mockToastInfo,
      promise: mockToastPromise,
    }),
    __esModule: true,
  };
});

// Get the mocked functions
const { toast } = await import('sonner');
const mockToast = vi.mocked(toast);

describe('Toaster', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Toaster />);
    expect(screen.getByTestId('sonner-toaster')).toBeInTheDocument();
  });

  it('applies toaster class', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveClass('lsd:toaster');
    expect(toaster).toHaveClass('lsd:group');
  });

  it('applies custom CSS variables via style prop', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster.style.getPropertyValue('--normal-bg')).toBe('var(--lsd-surface)');
    expect(toaster.style.getPropertyValue('--normal-text')).toBe('var(--lsd-text-primary)');
    expect(toaster.style.getPropertyValue('--normal-border')).toBe('var(--lsd-border)');
  });

  it('passes through additional props', () => {
    render(<Toaster position="top-right" />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveAttribute('position', 'top-right');
  });

  it('applies theme prop to sonner Toaster', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveAttribute('theme', 'light');
  });

  describe('toast function usage', () => {
    it('can call toast with simple message', () => {
      mockToast('Simple message');
      expect(mockToast).toHaveBeenCalledWith('Simple message');
    });

    it('can call toast.success with message', () => {
      mockToast.success('Success message');
      expect(mockToast.success).toHaveBeenCalledWith('Success message');
    });

    it('can call toast.error with message', () => {
      mockToast.error('Error message');
      expect(mockToast.error).toHaveBeenCalledWith('Error message');
    });

    it('can call toast.warning with message', () => {
      mockToast.warning('Warning message');
      expect(mockToast.warning).toHaveBeenCalledWith('Warning message');
    });

    it('can call toast.info with message', () => {
      mockToast.info('Info message');
      expect(mockToast.info).toHaveBeenCalledWith('Info message');
    });

    it('can call toast with options', () => {
      mockToast('Message', {
        position: 'top-right',
        duration: 5000,
        className: 'custom-class',
      });
      expect(mockToast).toHaveBeenCalledWith('Message', {
        position: 'top-right',
        duration: 5000,
        className: 'custom-class',
      });
    });

    it('can call toast.promise with async operation', () => {
      const promise = Promise.resolve('Success');
      mockToast.promise(promise, {
        loading: 'Loading...',
        success: 'Success!',
        error: 'Error occurred',
      });
      expect(mockToast.promise).toHaveBeenCalledWith(promise, {
        loading: 'Loading...',
        success: 'Success!',
        error: 'Error occurred',
      });
    });

    it('can call toast with JSX content', () => {
      const jsxContent = <div>Custom content</div>;
      mockToast(jsxContent, { duration: 3000 });
      expect(mockToast).toHaveBeenCalledWith(jsxContent, { duration: 3000 });
    });

    it('can call toast with action', () => {
      mockToast('Message with action', {
        action: {
          label: 'Undo',
          onClick: vi.fn(),
        },
      });
      expect(mockToast).toHaveBeenCalledWith('Message with action', {
        action: {
          label: 'Undo',
          onClick: expect.any(Function),
        },
      });
    });
  });
});
