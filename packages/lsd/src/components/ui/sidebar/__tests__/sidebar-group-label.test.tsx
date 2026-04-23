import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SidebarGroupLabel } from '../index';

describe('SidebarGroupLabel', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarGroupLabel>Group Label</SidebarGroupLabel>);
    expect(container.querySelector('[data-slot="sidebar-group-label"]')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarGroupLabel className="custom-class">Group Label</SidebarGroupLabel>
    );
    const label = container.querySelector('[data-slot="sidebar-group-label"]');
    expect(label).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarGroupLabel>Group Label</SidebarGroupLabel>);
    const label = container.querySelector('[data-slot="sidebar-group-label"]');
    expect(label).toHaveClass('lsd:text-sidebar-foreground/70');
    expect(label).toHaveClass('lsd:flex');
    expect(label).toHaveClass('lsd:h-8');
    expect(label).toHaveClass('lsd:shrink-0');
  });

  it('renders children', () => {
    render(<SidebarGroupLabel>Group Label</SidebarGroupLabel>);
    expect(screen.getByText('Group Label')).toBeInTheDocument();
  });

  it('renders as div by default', () => {
    const { container } = render(<SidebarGroupLabel>Group Label</SidebarGroupLabel>);
    const label = container.querySelector('[data-slot="sidebar-group-label"]');
    expect(label?.tagName).toBe('DIV');
  });

  it('uses Slot when asChild is true', () => {
    const { container } = render(
      <SidebarGroupLabel asChild>
        <span>Group Label</span>
      </SidebarGroupLabel>
    );
    const label = container.querySelector('[data-slot="sidebar-group-label"]');
    expect(label?.tagName).toBe('SPAN');
  });

  it('passes through additional props', () => {
    const { container } = render(
      <SidebarGroupLabel data-testid="test-label" id="label-1">
        Group Label
      </SidebarGroupLabel>
    );
    const label = container.querySelector('[data-slot="sidebar-group-label"]');
    expect(label).toHaveAttribute('data-testid', 'test-label');
    expect(label).toHaveAttribute('id', 'label-1');
  });

  it('applies collapsible icon classes', () => {
    const { container } = render(
      <div data-collapsible="icon">
        <SidebarGroupLabel>Group Label</SidebarGroupLabel>
      </div>
    );
    const label = container.querySelector('[data-slot="sidebar-group-label"]');
    expect(label).toHaveClass('lsd:group-data-[collapsible=icon]:-mt-8');
    expect(label).toHaveClass('lsd:group-data-[collapsible=icon]:opacity-0');
  });
});
