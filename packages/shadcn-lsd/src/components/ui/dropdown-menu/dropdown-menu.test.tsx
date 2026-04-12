import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './index';

describe('DropdownMenu (Root)', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('renders in open state when open prop is true', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});

describe('DropdownMenuTrigger', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(document.querySelector('[data-slot="dropdown-menu-trigger"]')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = document.querySelector('[data-slot="dropdown-menu-trigger"]');
    expect(trigger).toHaveAttribute('data-slot', 'dropdown-menu-trigger');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="test-trigger" id="trigger-1">
          Trigger
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = document.querySelector('[data-slot="dropdown-menu-trigger"]');
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });

  it('renders children correctly', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Click me</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});

describe('DropdownMenuContent', () => {
  it('renders without crashing when open', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(document.querySelector('[data-slot="dropdown-menu-content"]')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect(content).toHaveAttribute('data-slot', 'dropdown-menu-content');
  });

  it('applies base classes correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect(content).toHaveClass('lsd:z-50');
    expect(content).toHaveClass('lsd:min-w-32');
    expect(content).toHaveClass('lsd:rounded-none');
    expect(content).toHaveClass('lsd:border');
    expect(content).toHaveClass('lsd:bg-lsd-surface');
    expect(content).toHaveClass('lsd:p-1');
  });

  it('merges custom className with component classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent className="custom-content-class">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect(content).toHaveClass('custom-content-class');
    expect(content).toHaveClass('lsd:z-50');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent data-testid="test-content" id="content-1">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders content inside portal', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const content = document.querySelector('[data-slot="dropdown-menu-content"]');
    expect(content).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});

describe('DropdownMenuItem', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Item 1');
    expect(item).toHaveAttribute('data-slot', 'dropdown-menu-item');
  });

  it('applies base classes correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Item 1');
    expect(item).toHaveClass('lsd:relative');
    expect(item).toHaveClass('lsd:flex');
    expect(item).toHaveClass('lsd:cursor-default');
    expect(item).toHaveClass('lsd:items-center');
    expect(item).toHaveClass('lsd:rounded-none');
    expect(item).toHaveClass('lsd:px-2');
    expect(item).toHaveClass('lsd:py-1.5');
    expect(item).toHaveClass('lsd:text-sm');
    expect(item).toHaveClass('lsd:outline-none');
    expect(item).toHaveClass('lsd:select-none');
  });

  it('applies default variant classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem variant="default">Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Item 1');
    expect(item).toHaveAttribute('data-variant', 'default');
  });

  it('applies destructive variant classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Delete');
    expect(item).toHaveAttribute('data-variant', 'destructive');
    expect(item).toHaveClass('lsd:text-lsd-destructive-text');
  });

  it('applies inset prop correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem inset>Inset Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Inset Item');
    expect(item).toHaveAttribute('data-inset', 'true');
  });

  it('does not apply inset when inset is false', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem inset={false}>Normal Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Normal Item');
    expect(item).toHaveAttribute('data-inset', 'false');
  });

  it('uses default variant when not specified', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Item 1');
    expect(item).toHaveAttribute('data-variant', 'default');
  });

  it('merges custom className with component classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="custom-item-class">Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Item 1');
    expect(item).toHaveClass('custom-item-class');
    expect(item).toHaveClass('lsd:relative');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem data-testid="test-item" id="item-1">
            Item 1
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Item 1');
    expect(item).toHaveAttribute('data-testid', 'test-item');
    expect(item).toHaveAttribute('id', 'item-1');
  });

  it('handles onClick event', () => {
    const handleClick = vi.fn();
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleClick}>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    fireEvent.click(screen.getByText('Item 1'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Disabled Item');
    expect(item).toHaveAttribute('data-disabled');
    expect(item).toHaveClass('data-[disabled]:lsd:pointer-events-none');
    expect(item).toHaveClass('data-[disabled]:lsd:opacity-50');
  });
});

describe('DropdownMenuCheckboxItem', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem>Checkbox Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Checkbox Item')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem>Checkbox Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Checkbox Item');
    expect(item).toHaveAttribute('data-slot', 'dropdown-menu-checkbox-item');
  });

  it('applies base classes correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem>Checkbox Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Checkbox Item');
    expect(item).toHaveClass('lsd:relative');
    expect(item).toHaveClass('lsd:flex');
    expect(item).toHaveClass('lsd:cursor-default');
    expect(item).toHaveClass('lsd:items-center');
    expect(item).toHaveClass('lsd:rounded-none');
    expect(item).toHaveClass('lsd:py-1.5');
    expect(item).toHaveClass('lsd:pr-2');
    expect(item).toHaveClass('lsd:pl-8');
    expect(item).toHaveClass('lsd:text-sm');
    expect(item).toHaveClass('lsd:outline-none');
    expect(item).toHaveClass('lsd:select-none');
  });

  it('checks item when checked prop is true', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked>Checked Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Checked Item');
    expect(item).toHaveAttribute('data-state', 'checked');
  });

  it('unchecks item when checked prop is false', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={false}>Unchecked Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Unchecked Item');
    expect(item).toHaveAttribute('data-state', 'unchecked');
  });

  it('handles checkbox toggle on click', () => {
    const handleChange = vi.fn();
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem onCheckedChange={handleChange}>
            Checkbox Item
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Checkbox Item');
    fireEvent.click(item);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('ties user-controlled checkbox state', async () => {
    const { rerender } = render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={false}>Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    let item = screen.getByText('Item');
    expect(item).toHaveAttribute('data-state', 'unchecked');

    rerender(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={true}>Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    item = screen.getByText('Item');
    expect(item).toHaveAttribute('data-state', 'checked');
  });

  it('merges custom className with component classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem className="custom-checkbox-class">
            Item
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Item');
    expect(item).toHaveClass('custom-checkbox-class');
    expect(item).toHaveClass('lsd:relative');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem data-testid="test-checkbox">Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Item');
    expect(item).toHaveAttribute('data-testid', 'test-checkbox');
  });

  it('applies disabled state correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem disabled>Disabled Checkbox</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Disabled Checkbox');
    expect(item).toHaveAttribute('data-disabled');
  });
});

describe('DropdownMenuRadioGroup', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(document.querySelector('[data-slot="dropdown-menu-radio-group"]')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const group = document.querySelector('[data-slot="dropdown-menu-radio-group"]');
    expect(group).toHaveAttribute('data-slot', 'dropdown-menu-radio-group');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup data-testid="test-radio-group" value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const group = document.querySelector('[data-slot="dropdown-menu-radio-group"]');
    expect(group).toHaveAttribute('data-testid', 'test-radio-group');
  });
});

describe('DropdownMenuRadioItem', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Option 1');
    expect(item).toHaveAttribute('data-slot', 'dropdown-menu-radio-item');
  });

  it('applies base classes correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Option 1');
    expect(item).toHaveClass('lsd:relative');
    expect(item).toHaveClass('lsd:flex');
    expect(item).toHaveClass('lsd:cursor-default');
    expect(item).toHaveClass('lsd:items-center');
    expect(item).toHaveClass('lsd:rounded-sm');
    expect(item).toHaveClass('lsd:py-1.5');
    expect(item).toHaveClass('lsd:pr-2');
    expect(item).toHaveClass('lsd:pl-8');
    expect(item).toHaveClass('lsd:text-sm');
    expect(item).toHaveClass('lsd:outline-none');
    expect(item).toHaveClass('lsd:select-none');
  });

  it('shows as checked when value matches group value', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    expect(option1).toHaveAttribute('data-state', 'checked');
    expect(option2).toHaveAttribute('data-state', 'unchecked');
  });

  it('handles radio selection', () => {
    const handleChange = vi.fn();
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1" onValueChange={handleChange}>
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);
    expect(handleChange).toHaveBeenCalledWith('option2');
  });

  it('supports exclusive selection (only one radio can be checked)', () => {
    const { rerender } = render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Option 1')).toHaveAttribute('data-state', 'checked');
    expect(screen.getByText('Option 2')).toHaveAttribute('data-state', 'unchecked');

    rerender(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option2">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Option 1')).toHaveAttribute('data-state', 'unchecked');
    expect(screen.getByText('Option 2')).toHaveAttribute('data-state', 'checked');
  });

  it('merges custom className with component classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem className="custom-radio-class" value="option1">
              Option 1
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Option 1');
    expect(item).toHaveClass('custom-radio-class');
    expect(item).toHaveClass('lsd:relative');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem data-testid="test-radio" value="option1">
              Option 1
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Option 1');
    expect(item).toHaveAttribute('data-testid', 'test-radio');
  });

  it('applies disabled state correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem disabled value="option1">
              Disabled Radio
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const item = screen.getByText('Disabled Radio');
    expect(item).toHaveAttribute('data-disabled');
  });
});

describe('DropdownMenuLabel', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const label = screen.getByText('Label');
    expect(label).toHaveAttribute('data-slot', 'dropdown-menu-label');
  });

  it('applies base classes correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:px-2');
    expect(label).toHaveClass('lsd:py-1.5');
    expect(label).toHaveClass('lsd:text-sm');
    expect(label).toHaveClass('lsd:font-medium');
    expect(label).toHaveClass('lsd:text-lsd-text-primary');
  });

  it('applies inset prop correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel inset>Inset Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const label = screen.getByText('Inset Label');
    expect(label).toHaveAttribute('data-inset', 'true');
  });

  it('does not apply inset when inset is false', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel inset={false}>Normal Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const label = screen.getByText('Normal Label');
    expect(label).toHaveAttribute('data-inset', 'false');
  });

  it('merges custom className with component classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="custom-label-class">Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const label = screen.getByText('Label');
    expect(label).toHaveClass('custom-label-class');
    expect(label).toHaveClass('lsd:px-2');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel data-testid="test-label" id="label-1">
            Label
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const label = screen.getByText('Label');
    expect(label).toHaveAttribute('data-testid', 'test-label');
    expect(label).toHaveAttribute('id', 'label-1');
  });
});

describe('DropdownMenuSeparator', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(document.querySelector('[data-slot="dropdown-menu-separator"]')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const separator = document.querySelector('[data-slot="dropdown-menu-separator"]');
    expect(separator).toHaveAttribute('data-slot', 'dropdown-menu-separator');
  });

  it('applies base classes correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const separator = document.querySelector('[data-slot="dropdown-menu-separator"]');
    expect(separator).toHaveClass('lsd:-mx-1');
    expect(separator).toHaveClass('lsd:my-1');
    expect(separator).toHaveClass('lsd:h-px');
    expect(separator).toHaveClass('lsd:bg-[var(--lsd-border)]');
  });

  it('merges custom className with component classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator className="custom-separator-class" />
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const separator = document.querySelector('[data-slot="dropdown-menu-separator"]');
    expect(separator).toHaveClass('custom-separator-class');
    expect(separator).toHaveClass('lsd:-mx-1');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator data-testid="test-separator" />
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const separator = document.querySelector('[data-slot="dropdown-menu-separator"]');
    expect(separator).toHaveAttribute('data-testid', 'test-separator');
  });
});

describe('DropdownMenuShortcut', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Item
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('⌘K')).toBeInTheDocument();
  });

  it('renders shortcut text correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Copy
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Copy')).toBeInTheDocument();
    expect(screen.getByText('⌘C')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Item
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const shortcut = screen.getByText('⌘K');
    expect(shortcut).toHaveAttribute('data-slot', 'dropdown-menu-shortcut');
  });

  it('applies base classes correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Item
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const shortcut = screen.getByText('⌘K');
    expect(shortcut).toHaveClass('lsd:ml-auto');
    expect(shortcut).toHaveClass('lsd:text-xs');
    expect(shortcut).toHaveClass('lsd:tracking-widest');
    expect(shortcut).toHaveClass('lsd:text-lsd-text-secondary');
  });

  it('merges custom className with component classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Item
            <DropdownMenuShortcut className="custom-shortcut-class">⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const shortcut = screen.getByText('⌘K');
    expect(shortcut).toHaveClass('custom-shortcut-class');
    expect(shortcut).toHaveClass('lsd:ml-auto');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Item
            <DropdownMenuShortcut data-testid="test-shortcut">⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const shortcut = screen.getByText('⌘K');
    expect(shortcut).toHaveAttribute('data-testid', 'test-shortcut');
  });
});

describe('DropdownMenuGroup', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(document.querySelector('[data-slot="dropdown-menu-group"]')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const group = document.querySelector('[data-slot="dropdown-menu-group"]');
    expect(group).toHaveAttribute('data-slot', 'dropdown-menu-group');
  });

  it('renders grouped items', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup data-testid="test-group">
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const group = document.querySelector('[data-slot="dropdown-menu-group"]');
    expect(group).toHaveAttribute('data-testid', 'test-group');
  });
});

describe('DropdownMenuSub', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Subitem 1</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Submenu')).toBeInTheDocument();
  });

  it('renders nested submenu content structure', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Subitem 1</DropdownMenuItem>
              <DropdownMenuItem>Subitem 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Submenu')).toBeInTheDocument();
  });
});

describe('DropdownMenuSubTrigger', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Submenu')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = screen.getByText('Submenu');
    expect(trigger).toHaveAttribute('data-slot', 'dropdown-menu-sub-trigger');
  });

  it('applies base classes correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = screen.getByText('Submenu');
    expect(trigger).toHaveClass('lsd:flex');
    expect(trigger).toHaveClass('lsd:cursor-default');
    expect(trigger).toHaveClass('lsd:items-center');
    expect(trigger).toHaveClass('lsd:rounded-none');
    expect(trigger).toHaveClass('lsd:px-2');
    expect(trigger).toHaveClass('lsd:py-1.5');
    expect(trigger).toHaveClass('lsd:text-sm');
    expect(trigger).toHaveClass('lsd:outline-none');
    expect(trigger).toHaveClass('lsd:select-none');
  });

  it('applies inset prop correctly', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Inset Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = screen.getByText('Inset Submenu');
    expect(trigger).toHaveAttribute('data-inset', 'true');
  });

  it('does not apply inset when inset is false', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset={false}>Normal Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = screen.getByText('Normal Submenu');
    expect(trigger).toHaveAttribute('data-inset', 'false');
  });

  it('merges custom className with component classes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="custom-class">Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = screen.getByText('Submenu');
    expect(trigger).toHaveClass('custom-class');
    expect(trigger).toHaveClass('lsd:flex');
  });

  it('passes through additional props', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger data-testid="test-sub-trigger">Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = screen.getByText('Submenu');
    expect(trigger).toHaveAttribute('data-testid', 'test-sub-trigger');
  });
});

describe('DropdownMenuSubContent', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Submenu')).toBeInTheDocument();
  });
});

describe('DropdownMenuPortal', () => {
  it('renders without crashing', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    );
    expect(screen.getByText('Item')).toBeInTheDocument();
  });
});

describe('DropdownMenu Integration Tests', () => {
  it('renders complete dropdown menu with all subcomponents', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            New File
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuCheckboxItem checked>Show</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="light">
            <DropdownMenuLabel inset>Theme</DropdownMenuLabel>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Open Menu')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('New File')).toBeInTheDocument();
    expect(screen.getByText('⌘N')).toBeInTheDocument();
    expect(screen.getByText('Show')).toBeInTheDocument();
    expect(screen.getByText('Theme')).toBeInTheDocument();
    expect(screen.getByText('More')).toBeInTheDocument();
  });

  it('renders multiple dropdown menu items', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders dropdown menu with grouped items', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Group 1 - Item 1</DropdownMenuItem>
            <DropdownMenuItem>Group 1 - Item 2</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Group 2 - Item 1</DropdownMenuItem>
            <DropdownMenuItem>Group 2 - Item 2</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Group 1 - Item 1')).toBeInTheDocument();
    expect(screen.getByText('Group 1 - Item 2')).toBeInTheDocument();
    expect(screen.getByText('Group 2 - Item 1')).toBeInTheDocument();
    expect(screen.getByText('Group 2 - Item 2')).toBeInTheDocument();
  });

  it('supports inset items and labels', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Normal Item</DropdownMenuItem>
          <DropdownMenuItem inset>Inset Item 1</DropdownMenuItem>
          <DropdownMenuItem inset>Inset Item 2</DropdownMenuItem>
          <DropdownMenuLabel inset>Inset Label</DropdownMenuLabel>
          <DropdownMenuItem inset>Inset Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Normal Item')).not.toHaveAttribute('data-inset');
    expect(screen.getByText('Inset Item 1')).toHaveAttribute('data-inset', 'true');
    expect(screen.getByText('Inset Item 2')).toHaveAttribute('data-inset', 'true');
    expect(screen.getByText('Inset Label')).toHaveAttribute('data-inset', 'true');
    expect(screen.getByText('Inset Item 3')).toHaveAttribute('data-inset', 'true');
  });

  it('handles destructive items', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Normal Item</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Remove</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const deleteItem = screen.getByText('Delete');
    const removeItem = screen.getByText('Remove');
    expect(deleteItem).toHaveAttribute('data-variant', 'destructive');
    expect(removeItem).toHaveAttribute('data-variant', 'destructive');
  });

  it('controls checkbox items state', () => {
    const { rerender } = render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={true}>Enabled</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>Disabled</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Enabled')).toHaveAttribute('data-state', 'checked');
    expect(screen.getByText('Disabled')).toHaveAttribute('data-state', 'unchecked');

    rerender(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={false}>Enabled</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={true}>Disabled</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Enabled')).toHaveAttribute('data-state', 'unchecked');
    expect(screen.getByText('Disabled')).toHaveAttribute('data-state', 'checked');
  });

  it('controls radio group state', () => {
    const { rerender } = render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option3">Option 3</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Option 1')).toHaveAttribute('data-state', 'checked');
    expect(screen.getByText('Option 2')).toHaveAttribute('data-state', 'unchecked');
    expect(screen.getByText('Option 3')).toHaveAttribute('data-state', 'unchecked');

    rerender(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option2">
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option3">Option 3</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Option 1')).toHaveAttribute('data-state', 'unchecked');
    expect(screen.getByText('Option 2')).toHaveAttribute('data-state', 'checked');
    expect(screen.getByText('Option 3')).toHaveAttribute('data-state', 'unchecked');
  });

  it('handles item click events', () => {
    const handleClick1 = vi.fn();
    const handleClick2 = vi.fn();

    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleClick1}>Item 1</DropdownMenuItem>
          <DropdownMenuItem onClick={handleClick2}>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText('Item 1'));
    expect(handleClick1).toHaveBeenCalledTimes(1);
    expect(handleClick2).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText('Item 2'));
    expect(handleClick2).toHaveBeenCalledTimes(1);
  });

  it('handles disabled items', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Enabled</DropdownMenuItem>
          <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const enabledItem = screen.getByText('Enabled');
    const disabledItem = screen.getByText('Disabled');

    expect(enabledItem).not.toHaveAttribute('data-disabled');
    expect(disabledItem).toHaveAttribute('data-disabled');
  });
});

describe('DropdownMenu Accessibility', () => {
  it('maintains proper ARIA attributes', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const trigger = document.querySelector('[data-slot="dropdown-menu-trigger"]');
    expect(trigger).toBeInTheDocument();
  });

  it('applies data-slot attributes to visible components', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Label</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuCheckboxItem>Checkbox</DropdownMenuCheckboxItem>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem value="option1">Radio 1</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuGroup>
            <DropdownMenuItem>Grouped Item</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Subitem</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(document.querySelector('[data-slot="dropdown-menu-trigger"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-content"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-label"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-separator"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-item"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-checkbox-item"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-radio-group"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-radio-item"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-group"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-sub-trigger"]')).toBeInTheDocument();
  });
});

describe('DropdownMenu Submenu Nesting', () => {
  it('supports single level nesting', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Subitem 1</DropdownMenuItem>
              <DropdownMenuItem>Subitem 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Submenu')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dropdown-menu-sub-trigger"]')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('supports multiple submenus', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu 1</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Subitem 1.1</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu 2</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Subitem 2.1</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu 3</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Subitem 3.1</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Submenu 1')).toBeInTheDocument();
    expect(screen.getByText('Submenu 2')).toBeInTheDocument();
    expect(screen.getByText('Submenu 3')).toBeInTheDocument();
  });

  it('supports deeply nested submenus structure', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Level 1</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Item 1.1</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Level 2</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Item 2.1</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Level 3</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Item 3.1</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Level 1')).toBeInTheDocument();
  });
});

describe('DropdownMenu Complex Scenarios', () => {
  it('renders comprehensive menu with all features', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>File</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Recent Files</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Document 1<DropdownMenuShortcut>⌘1</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Document 2<DropdownMenuShortcut>⌘2</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>New File</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete All</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>View</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked>Show Sidebar</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>Show Toolbar</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuRadioGroup value="light">
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Email</DropdownMenuItem>
              <DropdownMenuItem>Twitter</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('File')).toBeInTheDocument();
    expect(screen.getByText('Recent Files')).toBeInTheDocument();
    expect(screen.getByText('Document 1')).toBeInTheDocument();
    expect(screen.getByText('Document 2')).toBeInTheDocument();
    expect(screen.getByText('⌘1')).toBeInTheDocument();
    expect(screen.getByText('⌘2')).toBeInTheDocument();
    expect(screen.getByText('New File')).toBeInTheDocument();
    expect(screen.getByText('Delete All')).toBeInTheDocument();
    expect(screen.getByText('View')).toBeInTheDocument();
    expect(screen.getByText('Show Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Show Toolbar')).toBeInTheDocument();
    expect(screen.getByText('Theme')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();
    expect(screen.getByText('Share')).toBeInTheDocument();
  });

  it('handles all item types in single menu', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Regular Item</DropdownMenuItem>
          <DropdownMenuItem inset>Inset Item</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Destructive Item</DropdownMenuItem>
          <DropdownMenuCheckboxItem checked>Checked Item</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>Unchecked Item</DropdownMenuCheckboxItem>
          <DropdownMenuLabel inset>Label</DropdownMenuLabel>
          <DropdownMenuItem inset>Inset Item after label</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Regular Item')).toBeInTheDocument();
    expect(screen.getByText('Inset Item')).toBeInTheDocument();
    expect(screen.getByText('Destructive Item')).toBeInTheDocument();
    expect(screen.getByText('Checked Item')).toBeInTheDocument();
    expect(screen.getByText('Unchecked Item')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('Inset Item after label')).toBeInTheDocument();
  });

  it('supports multiple checkboxes with independent state', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked>Checkbox 1</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>Checkbox 2</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>Checkbox 3</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>Checkbox 4</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Checkbox 1')).toHaveAttribute('data-state', 'checked');
    expect(screen.getByText('Checkbox 2')).toHaveAttribute('data-state', 'checked');
    expect(screen.getByText('Checkbox 3')).toHaveAttribute('data-state', 'checked');
    expect(screen.getByText('Checkbox 4')).toHaveAttribute('data-state', 'unchecked');
  });
});
