import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SidebarGroupAction } from '../index';

describe('SidebarGroupAction', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarGroupAction>Action</SidebarGroupAction>);
    expect(container.querySelector('[data-slot="sidebar-group-action"]')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarGroupAction className="custom-class">Action</SidebarGroupAction>
    );
    const action = container.querySelector('[data-slot="sidebar-group-action"]');
    expect(action).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarGroupAction>Action</SidebarGroupAction>);
    const action = container.querySelector('[data-slot="sidebar-group-action"]');
    expect(action).toHaveClass('lsd:text-sidebar-foreground');
    expect(action).toHaveClass('ring-sidebar-ring');
    expect(action).toHaveClass('lsd:absolute');
    expect(action).toHaveClass('lsd:flex');
  });

  it('renders children', () => {
    render(<SidebarGroupAction>Action</SidebarGroupAction>);
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders as button by default', () => {
    const { container } = render(<SidebarGroupAction>Action</SidebarGroupAction>);
    const action = container.querySelector('[data-slot="sidebar-group-action"]');
    expect(action?.tagName).toBe('BUTTON');
  });

  it('uses Slot when asChild is true', () => {
    const { container } = render(
      <SidebarGroupAction asChild>
        <span>Action</span>
      </SidebarGroupAction>
    );
    const action = container.querySelector('[data-slot="sidebar-group-action"]');
    expect(action?.tagName).toBe('SPAN');
  });

  it('passes through additional props', () => {
    const { container } = render(
      <SidebarGroupAction data-testid="test-action" id="action-1">
        Action
      </SidebarGroupAction>
    );
    const action = container.querySelector('[data-slot="sidebar-group-action"]');
    expect(action).toHaveAttribute('data-testid', 'test-action');
    expect(action).toHaveAttribute('id', 'action-1');
  });

  it('applies hover states', () => {
    const { container } = render(<SidebarGroupAction>Action</SidebarGroupAction>);
    const action = container.querySelector('[data-slot="sidebar-group-action"]');
    expect(action).toHaveClass('lsd:hover:bg-sidebar-accent');
    expect(action).toHaveClass('lsd:hover:text-sidebar-accent-foreground');
  });

  it('applies collapsible icon classes', () => {
    const { container } = render(
      <div data-collapsible="icon">
        <SidebarGroupAction>Action</SidebarGroupAction>
      </div>
    );
    const action = container.querySelector('[data-slot="sidebar-group-action"]');
    expect(action).toHaveClass('lsd:group-data-[collapsible=icon]:hidden');
  });

  it('applies mobile hit area classes', () => {
    const { container } = render(<SidebarGroupAction>Action</SidebarGroupAction>);
    const action = container.querySelector('[data-slot="sidebar-group-action"]');
    expect(action).toHaveClass('after:lsd:absolute');
    expect(action).toHaveClass('after:lsd:-inset-[var(--lsd-spacing-smaller)]');
    expect(action).toHaveClass('md:after:lsd:hidden');
  });
});
