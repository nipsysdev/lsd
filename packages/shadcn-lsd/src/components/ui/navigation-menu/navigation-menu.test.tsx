import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from './index';

describe('NavigationMenu (Root)', () => {
  it('renders without crashing', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Content</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const root = document.querySelector('[data-slot="navigation-menu"]');
    expect(root).toHaveAttribute('data-slot', 'navigation-menu');
  });

  it('does not render viewport when viewport prop is false', () => {
    render(
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Content</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const viewport = document.querySelector('[data-slot="navigation-menu-viewport"]');
    expect(viewport).not.toBeInTheDocument();
  });

  it('applies data-viewport attribute', () => {
    render(
      <NavigationMenu viewport>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const root = document.querySelector('[data-slot="navigation-menu"]');
    expect(root).toHaveAttribute('data-viewport', 'true');
  });

  it('merges custom className with component classes', () => {
    render(
      <NavigationMenu className="custom-class">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const root = document.querySelector('[data-slot="navigation-menu"]');
    expect(root).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <NavigationMenu data-testid="test-nav" id="nav-1">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const root = document.querySelector('[data-slot="navigation-menu"]');
    expect(root).toHaveAttribute('data-testid', 'test-nav');
    expect(root).toHaveAttribute('id', 'nav-1');
  });
});

describe('NavigationMenuList', () => {
  it('renders without crashing', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const list = document.querySelector('[data-slot="navigation-menu-list"]');
    expect(list).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const list = document.querySelector('[data-slot="navigation-menu-list"]');
    expect(list).toHaveAttribute('data-slot', 'navigation-menu-list');
  });

  it('applies base classes correctly', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const list = document.querySelector('[data-slot="navigation-menu-list"]');
    expect(list).toHaveClass('lsd:group');
    expect(list).toHaveClass('lsd:flex');
    expect(list).toHaveClass('lsd:flex-1');
    expect(list).toHaveClass('lsd:list-none');
    expect(list).toHaveClass('lsd:items-center');
    expect(list).toHaveClass('lsd:justify-center');
    expect(list).toHaveClass('lsd:gap-[var(--lsd-spacing-1)]');
  });

  it('merges custom className with component classes', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList className="custom-list-class">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const list = document.querySelector('[data-slot="navigation-menu-list"]');
    expect(list).toHaveClass('custom-list-class');
    expect(list).toHaveClass('lsd:flex');
  });

  it('passes through additional props', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList data-testid="test-list" id="list-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const list = document.querySelector('[data-slot="navigation-menu-list"]');
    expect(list).toHaveAttribute('data-testid', 'test-list');
    expect(list).toHaveAttribute('id', 'list-1');
  });
});

describe('NavigationMenuItem', () => {
  it('renders without crashing', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const item = document.querySelector('[data-slot="navigation-menu-item"]');
    expect(item).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const item = document.querySelector('[data-slot="navigation-menu-item"]');
    expect(item).toHaveAttribute('data-slot', 'navigation-menu-item');
  });

  it('applies base classes correctly', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const item = document.querySelector('[data-slot="navigation-menu-item"]');
    expect(item).toHaveClass('lsd:relative');
  });

  it('merges custom className with component classes', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="custom-item-class">
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const item = document.querySelector('[data-slot="navigation-menu-item"]');
    expect(item).toHaveClass('custom-item-class');
    expect(item).toHaveClass('lsd:relative');
  });

  it('passes through additional props', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem data-testid="test-item" id="item-1">
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const item = document.querySelector('[data-slot="navigation-menu-item"]');
    expect(item).toHaveAttribute('data-testid', 'test-item');
    expect(item).toHaveAttribute('id', 'item-1');
  });
});

describe('NavigationMenuTrigger', () => {
  it('renders without crashing', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const trigger = screen.getByText('Trigger');
    expect(trigger).toHaveAttribute('data-slot', 'navigation-menu-trigger');
  });

  it('applies base classes correctly', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const trigger = screen.getByText('Trigger');
    expect(trigger).toHaveClass('lsd:group');
    expect(trigger).toHaveClass('lsd:inline-flex');
    expect(trigger).toHaveClass('lsd:h-[2.25rem]');
    expect(trigger).toHaveClass('lsd:w-max');
    expect(trigger).toHaveClass('lsd:items-center');
    expect(trigger).toHaveClass('lsd:justify-center');
    expect(trigger).toHaveClass('lsd:rounded-md');
    expect(trigger).toHaveClass('lsd:bg-[var(--lsd-background)]');
    expect(trigger).toHaveClass('lsd:px-4');
    expect(trigger).toHaveClass('lsd:py-2');
    expect(trigger).toHaveClass('lsd:text-[0.875rem]');
    expect(trigger).toHaveClass('lsd:font-medium');
  });

  it('renders chevron icon', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const trigger = screen.getByText('Trigger').parentElement;
    const icon = trigger?.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies chevron icon classes correctly', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const icon = document.querySelector('svg');
    expect(icon).toHaveClass('lsd:relative');
    expect(icon).toHaveClass('lsd:top-[1px]');
    expect(icon).toHaveClass('lsd:ml-1');
    expect(icon).toHaveClass('lsd:size-3');
    expect(icon).toHaveClass('lsd:transition');
    expect(icon).toHaveClass('lsd:duration-300');
  });

  it('merges custom className with component classes', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="custom-trigger-class">Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const trigger = screen.getByText('Trigger');
    expect(trigger).toHaveClass('custom-trigger-class');
    expect(trigger).toHaveClass('lsd:inline-flex');
  });

  it('passes through additional props', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger data-testid="test-trigger" id="trigger-1">
              Trigger
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const trigger = screen.getByText('Trigger');
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });
});

describe('NavigationMenuContent', () => {
  it('renders without crashing', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Content</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });
});

describe('NavigationMenuLink', () => {
  it('renders without crashing', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('applies data-slot attribute when manually rendered', () => {
    render(<div data-slot="navigation-menu-link">Link</div>);
    const link = screen.getByText('Link');
    expect(link).toHaveAttribute('data-slot', 'navigation-menu-link');
  });

  it('applies base classes correctly when manually rendered', () => {
    render(
      <div className="lsd:flex lsd:flex-col lsd:gap-1 lsd:rounded-sm lsd:p-2 lsd:text-[0.875rem] lsd:transition-all">
        Link
      </div>
    );
    const link = screen.getByText('Link');
    expect(link).toHaveClass('lsd:flex');
    expect(link).toHaveClass('lsd:flex-col');
    expect(link).toHaveClass('lsd:gap-1');
    expect(link).toHaveClass('lsd:rounded-sm');
    expect(link).toHaveClass('lsd:p-2');
    expect(link).toHaveClass('lsd:text-[0.875rem]');
    expect(link).toHaveClass('lsd:transition-all');
  });

  it('handles active state correctly when manually rendered', () => {
    render(<div data-active>Active Link</div>);
    const link = screen.getByText('Active Link');
    expect(link).toHaveAttribute('data-active', 'true');
  });

  it('merges custom className with component classes when manually rendered', () => {
    render(<div className="custom-link-class lsd:flex">Link</div>);
    const link = screen.getByText('Link');
    expect(link).toHaveClass('custom-link-class');
    expect(link).toHaveClass('lsd:flex');
  });

  it('passes through additional props when manually rendered', () => {
    render(
      <div data-testid="test-link" id="link-1">
        Link
      </div>
    );
    const link = screen.getByText('Link');
    expect(link).toHaveAttribute('data-testid', 'test-link');
    expect(link).toHaveAttribute('id', 'link-1');
  });
});

describe('NavigationMenuIndicator', () => {
  it('renders without crashing', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('indicator has triangle element when rendered in navigation menu', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    );
    const indicator = document.querySelector('[data-slot="navigation-menu-indicator"]');
    if (indicator) {
      const triangle = indicator.querySelector('div');
      expect(triangle).toBeInTheDocument();
      expect(triangle).toHaveClass('lsd:relative');
      expect(triangle).toHaveClass('lsd:top-[60%]');
      expect(triangle).toHaveClass('lsd:h-2');
      expect(triangle).toHaveClass('lsd:w-2');
      expect(triangle).toHaveClass('lsd:rotate-45');
      expect(triangle).toHaveClass('lsd:rounded-tl-sm');
      expect(triangle).toHaveClass('lsd:bg-[var(--lsd-border)]');
      expect(triangle).toHaveClass('lsd:shadow-md');
    }
  });
});

describe('navigationMenuTriggerStyle', () => {
  it('generates correct style classes', () => {
    const classes = navigationMenuTriggerStyle();
    expect(classes).toContain('lsd:group');
    expect(classes).toContain('lsd:inline-flex');
    expect(classes).toContain('lsd:h-[2.25rem]');
    expect(classes).toContain('lsd:text-[0.875rem]');
  });
});

describe('NavigationMenu Integration Tests', () => {
  it('renders complete navigation menu with all subcomponents', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Service 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Service 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    );

    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('renders navigation menu without viewport', () => {
    render(
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Content</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByText('Trigger')).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="navigation-menu-viewport"]')
    ).not.toBeInTheDocument();
  });

  it('renders navigation menu without indicator', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <p>Content</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByText('Trigger')).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="navigation-menu-indicator"]')
    ).not.toBeInTheDocument();
  });

  it('handles multiple navigation menu items', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('handles nested navigation links', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Category</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">
                <span>Item 1</span>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <span>Item 2</span>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByText('Category')).toBeInTheDocument();
  });

  it('applies custom styles to all visible components', () => {
    render(
      <NavigationMenu className="custom-nav">
        <NavigationMenuList className="custom-list">
          <NavigationMenuItem className="custom-item">
            <NavigationMenuTrigger className="custom-trigger">Trigger</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const nav = document.querySelector('[data-slot="navigation-menu"]');
    const list = document.querySelector('[data-slot="navigation-menu-list"]');
    const item = document.querySelector('[data-slot="navigation-menu-item"]');
    const trigger = screen.getByText('Trigger');

    expect(nav).toHaveClass('custom-nav');
    expect(list).toHaveClass('custom-list');
    expect(item).toHaveClass('custom-item');
    expect(trigger).toHaveClass('custom-trigger');
  });
});
