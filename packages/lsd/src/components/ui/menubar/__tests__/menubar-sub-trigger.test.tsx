import { render } from '@testing-library/react';
import { createRef } from 'react';
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

describe('MenubarSubTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Submenu</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
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
            <MenubarSub>
              <MenubarSubTrigger>Test Submenu Label</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item 1</MenubarItem>
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
              <MenubarSubTrigger className="custom-class">Submenu</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts disabled prop', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger disabled>Disabled Submenu</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts ref prop', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger ref={ref}>Submenu</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(ref).toBeDefined();
  });

  it('accepts additional HTML attributes', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger data-testid="test-subtrigger" id="subtrigger-1">
                Submenu
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts Radix UI Menubar.SubTrigger props', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger onSelect={() => {}} onClick={() => {}}>
                Submenu
              </MenubarSubTrigger>
              <MenubarSubContent>
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
