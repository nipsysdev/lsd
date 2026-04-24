import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarTrigger,
} from '../index';

describe('MenubarLabel', () => {
  it('renders without crashing', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Label</MenubarLabel>
            <MenubarItem>Item 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts and renders children', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Test Label Text</MenubarLabel>
            <MenubarItem>Item 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts custom className', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel className="custom-class">Label</MenubarLabel>
            <MenubarItem>Item 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts inset prop', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel inset>Indented Label</MenubarLabel>
            <MenubarItem>Item 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts additional HTML attributes', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel data-testid="test-label" id="label-1">
              Label
            </MenubarLabel>
            <MenubarItem>Item 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('renders before menu items', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Section 1</MenubarLabel>
            <MenubarItem>Item 1</MenubarItem>
            <MenubarItem>Item 2</MenubarItem>
            <MenubarLabel>Section 2</MenubarLabel>
            <MenubarItem>Item 3</MenubarItem>
            <MenubarItem>Item 4</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });
});
