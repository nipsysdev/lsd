import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarProvider, useSidebar } from '../SidebarContext';

// Mock useIsMobile hook
vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: vi.fn(() => false),
}));

describe('SidebarContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useIsMobile).mockReturnValue(false);
  });

  describe('useSidebar', () => {
    it('throws error when used outside SidebarProvider', () => {
      expect(() => {
        const TestComponent = () => {
          useSidebar();
          return <div>Test</div>;
        };
        render(<TestComponent />);
      }).toThrow('useSidebar must be used within a SidebarProvider.');
    });

    it('returns context value when used within SidebarProvider', () => {
      const TestComponent = () => {
        const context = useSidebar();
        return (
          <div>
            <span data-testid="state">{context.state}</span>
            <span data-testid="open">{String(context.open)}</span>
          </div>
        );
      };

      render(
        <SidebarProvider>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('state')).toHaveTextContent('expanded');
      expect(screen.getByTestId('open')).toHaveTextContent('true');
    });
  });

  describe('SidebarProvider - setOpen', () => {
    it('calls onOpenChange when provided in controlled mode', () => {
      const onOpenChange = vi.fn();

      const TestComponent = () => {
        const { setOpen } = useSidebar();
        return (
          <button type="button" onClick={() => setOpen(false)}>
            Toggle
          </button>
        );
      };

      render(
        <SidebarProvider open={true} onOpenChange={onOpenChange}>
          <TestComponent />
        </SidebarProvider>
      );

      screen.getByText('Toggle').click();
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it('updates internal state when onOpenChange is not provided', async () => {
      const TestComponent = () => {
        const { open, setOpen } = useSidebar();
        return (
          <div>
            <span data-testid="open">{String(open)}</span>
            <button type="button" onClick={() => setOpen(false)}>
              Toggle
            </button>
          </div>
        );
      };

      render(
        <SidebarProvider>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('open')).toHaveTextContent('true');
      screen.getByText('Toggle').click();
      await waitFor(() => {
        expect(screen.getByTestId('open')).toHaveTextContent('false');
      });
    });

    it('supports function value for setOpen', async () => {
      const TestComponent = () => {
        const { open, setOpen } = useSidebar();
        return (
          <div>
            <span data-testid="open">{String(open)}</span>
            <button type="button" onClick={() => setOpen((prev: boolean) => !prev)}>
              Toggle
            </button>
          </div>
        );
      };

      render(
        <SidebarProvider defaultOpen={true}>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('open')).toHaveTextContent('true');
      screen.getByText('Toggle').click();
      await waitFor(() => {
        expect(screen.getByTestId('open')).toHaveTextContent('false');
      });
    });

    it('supports boolean value for setOpen', async () => {
      const TestComponent = () => {
        const { open, setOpen } = useSidebar();
        return (
          <div>
            <span data-testid="open">{String(open)}</span>
            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
            <button type="button" onClick={() => setOpen(true)}>
              Open
            </button>
          </div>
        );
      };

      render(
        <SidebarProvider defaultOpen={true}>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('open')).toHaveTextContent('true');
      screen.getByText('Close').click();
      await waitFor(() => {
        expect(screen.getByTestId('open')).toHaveTextContent('false');
      });
      screen.getByText('Open').click();
      await waitFor(() => {
        expect(screen.getByTestId('open')).toHaveTextContent('true');
      });
    });

    it('calls onOpenChange with function argument result', () => {
      const onOpenChange = vi.fn();

      const TestComponent = () => {
        const { setOpen } = useSidebar();
        return (
          <button type="button" onClick={() => setOpen((prev: boolean) => !prev)}>
            Toggle
          </button>
        );
      };

      render(
        <SidebarProvider open={true} onOpenChange={onOpenChange}>
          <TestComponent />
        </SidebarProvider>
      );

      screen.getByText('Toggle').click();
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });

  describe('SidebarProvider - defaultOpen', () => {
    it('starts with open=true by default', () => {
      const TestComponent = () => {
        const { open } = useSidebar();
        return <span data-testid="open">{String(open)}</span>;
      };

      render(
        <SidebarProvider>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('open')).toHaveTextContent('true');
    });

    it('starts with open=false when defaultOpen is false', () => {
      const TestComponent = () => {
        const { open } = useSidebar();
        return <span data-testid="open">{String(open)}</span>;
      };

      render(
        <SidebarProvider defaultOpen={false}>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('open')).toHaveTextContent('false');
    });
  });

  describe('SidebarProvider - state', () => {
    it('provides state as "expanded" when open is true', () => {
      const TestComponent = () => {
        const { state } = useSidebar();
        return <span data-testid="state">{state}</span>;
      };

      render(
        <SidebarProvider defaultOpen={true}>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('state')).toHaveTextContent('expanded');
    });

    it('provides state as "collapsed" when open is false', () => {
      const TestComponent = () => {
        const { state } = useSidebar();
        return <span data-testid="state">{state}</span>;
      };

      render(
        <SidebarProvider defaultOpen={false}>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('state')).toHaveTextContent('collapsed');
    });
  });

  describe('SidebarProvider - toggleSidebar', () => {
    it('toggles sidebar state on desktop (not mobile)', async () => {
      const TestComponent = () => {
        const { open, toggleSidebar } = useSidebar();
        return (
          <div>
            <span data-testid="open">{String(open)}</span>
            <button type="button" onClick={toggleSidebar}>
              Toggle
            </button>
          </div>
        );
      };

      render(
        <SidebarProvider defaultOpen={true}>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('open')).toHaveTextContent('true');
      screen.getByText('Toggle').click();
      await waitFor(() => {
        expect(screen.getByTestId('open')).toHaveTextContent('false');
      });
      screen.getByText('Toggle').click();
      await waitFor(() => {
        expect(screen.getByTestId('open')).toHaveTextContent('true');
      });
    });

    it('toggles openMobile state on mobile', async () => {
      vi.mocked(useIsMobile).mockReturnValue(true);

      const TestComponent = () => {
        const { openMobile, toggleSidebar } = useSidebar();
        return (
          <div>
            <span data-testid="openMobile">{String(openMobile)}</span>
            <button type="button" onClick={toggleSidebar}>
              Toggle
            </button>
          </div>
        );
      };

      render(
        <SidebarProvider>
          <TestComponent />
        </SidebarProvider>
      );

      expect(screen.getByTestId('openMobile')).toHaveTextContent('false');
      screen.getByText('Toggle').click();
      await waitFor(() => {
        expect(screen.getByTestId('openMobile')).toHaveTextContent('true');
      });
      screen.getByText('Toggle').click();
      await waitFor(() => {
        expect(screen.getByTestId('openMobile')).toHaveTextContent('false');
      });
    });
  });

  describe('SidebarProvider - keyboard shortcut', () => {
    it('toggles sidebar on Ctrl+B key press on desktop', async () => {
      const TestComponent = () => {
        const { open } = useSidebar();
        return <span data-testid="open">{String(open)}</span>;
      };

      render(
        <SidebarProvider defaultOpen={true}>
          <TestComponent />
        </SidebarProvider>
      );

      const event = new KeyboardEvent('keydown', {
        key: 'b',
        ctrlKey: true,
      }) as KeyboardEvent;
      window.dispatchEvent(event);

      await waitFor(() => {
        expect(screen.getByTestId('open')).toHaveTextContent('false');
      });
    });

    it('toggles sidebar on Meta+B key press on desktop', async () => {
      const TestComponent = () => {
        const { open } = useSidebar();
        return <span data-testid="open">{String(open)}</span>;
      };

      render(
        <SidebarProvider defaultOpen={false}>
          <TestComponent />
        </SidebarProvider>
      );

      const event = new KeyboardEvent('keydown', {
        key: 'b',
        metaKey: true,
      }) as KeyboardEvent;
      window.dispatchEvent(event);

      await waitFor(() => {
        expect(screen.getByTestId('open')).toHaveTextContent('true');
      });
    });

    it('does not toggle sidebar on wrong key', () => {
      const TestComponent = () => {
        const { open } = useSidebar();
        return <span data-testid="open">{String(open)}</span>;
      };

      render(
        <SidebarProvider defaultOpen={true}>
          <TestComponent />
        </SidebarProvider>
      );

      const event = new KeyboardEvent('keydown', {
        key: 'a',
        ctrlKey: true,
      }) as KeyboardEvent;
      window.dispatchEvent(event);

      expect(screen.getByTestId('open')).toHaveTextContent('true');
    });

    it('does not toggle sidebar without modifier key', () => {
      const TestComponent = () => {
        const { open } = useSidebar();
        return <span data-testid="open">{String(open)}</span>;
      };

      render(
        <SidebarProvider defaultOpen={true}>
          <TestComponent />
        </SidebarProvider>
      );

      const event = new KeyboardEvent('keydown', {
        key: 'b',
      }) as KeyboardEvent;
      window.dispatchEvent(event);

      expect(screen.getByTestId('open')).toHaveTextContent('true');
    });

    it('prevents default behavior on Ctrl+B key press', () => {
      const TestComponent = () => {
        const { open } = useSidebar();
        return <span data-testid="open">{String(open)}</span>;
      };

      render(
        <SidebarProvider defaultOpen={true}>
          <TestComponent />
        </SidebarProvider>
      );

      const event = new KeyboardEvent('keydown', {
        key: 'b',
        ctrlKey: true,
      }) as KeyboardEvent;
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
      window.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });
});
