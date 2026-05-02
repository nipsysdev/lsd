import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../index';

describe('NavigationMenuLink', () => {
  it('renders without crashing', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink data-testid="test-link">Link Text</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const link = screen.getByText('Link Text');
    expect(link).toBeInTheDocument();
  });

  it('applies data-slot attribute correctly', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink data-testid="link">Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const link = document.querySelector('[data-slot="navigation-menu-link"]');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('data-slot', 'navigation-menu-link');
  });

  it('merges custom className with component classes', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink className="custom-link-class">Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const link = document.querySelector('[data-slot="navigation-menu-link"]');
    expect(link).toHaveClass('custom-link-class');
    expect(link).toHaveClass('lsd:flex');
    expect(link).toHaveClass('lsd:flex-col');
  });

  it('forwards additional props to the underlying component', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink data-testid="custom-link" id="link-1" href="/test-path">
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const link = document.querySelector('[data-slot="navigation-menu-link"]');
    expect(link).toHaveAttribute('data-testid', 'custom-link');
    expect(link).toHaveAttribute('id', 'link-1');
    expect(link).toHaveAttribute('href', '/test-path');
  });

  it('applies correct base classes', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const link = document.querySelector('[data-slot="navigation-menu-link"]');
    expect(link).toHaveClass('lsd:flex');
    expect(link).toHaveClass('lsd:flex-col');
    expect(link).toHaveClass('lsd:h-9');
    expect(link).toHaveClass('lsd:text-sm');
    expect(link).toHaveClass('lsd:gap-(--lsd-spacing-smallest)');
    expect(link).toHaveClass('lsd:border');
    expect(link).toHaveClass('lsd:cursor-pointer');
    expect(link).toHaveClass('lsd:transition-all');
    expect(link).toHaveClass('lsd:outline-none');
  });

  it('applies hover state classes', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const link = document.querySelector('[data-slot="navigation-menu-link"]');
    expect(link).toHaveClass('lsd:hover:underline');
  });

  it('applies focus state classes', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const link = document.querySelector('[data-slot="navigation-menu-link"]');
    expect(link).toHaveClass('lsd:focus:underline');
  });

  it('applies active state classes', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const link = document.querySelector('[data-slot="navigation-menu-link"]');
    expect(link).toBeInTheDocument();
  });

  it('passes ref correctly to the underlying element', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent forceMount>
              <NavigationMenuLink ref={ref} href="/test">
                Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    // The ref should be attached
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('A');
  });
});
