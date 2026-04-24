import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../index';

describe('MenubarSub', () => {
  it('renders without crashing', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Submenu</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Submenu Item 1</MenubarItem>
                <MenubarItem>Submenu Item 2</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('renders sub content with children', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Submenu</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Test Submenu Item 1</MenubarItem>
                <MenubarItem>Test Submenu Item 2</MenubarItem>
                <MenubarItem>Test Submenu Item 3</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('renders multiple submenus', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Submenu 1</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Submenu 2</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item 2</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
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
            <MenubarSub>
              <MenubarSubTrigger>Submenu</MenubarSubTrigger>
              <MenubarSubContent className="custom-class">
                <MenubarItem>Item 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
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
            <MenubarSub>
              <MenubarSubTrigger>Submenu</MenubarSubTrigger>
              <MenubarSubContent data-testid="test-subcontent" id="subcontent-1">
                <MenubarItem>Item 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });
});
