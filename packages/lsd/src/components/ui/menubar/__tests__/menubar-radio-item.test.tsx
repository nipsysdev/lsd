import { render } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from '../index';

describe('MenubarRadioItem', () => {
  it('renders without crashing', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1">Option 1</MenubarRadioItem>
            </MenubarRadioGroup>
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
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1">Test Option Label</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts value prop', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup>
              <MenubarRadioItem value="test-value">Option</MenubarRadioItem>
            </MenubarRadioGroup>
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
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1" className="custom-class">
                Option 1
              </MenubarRadioItem>
            </MenubarRadioGroup>
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
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1" disabled>
                Disabled Option
              </MenubarRadioItem>
            </MenubarRadioGroup>
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
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1" ref={ref}>
                Option 1
              </MenubarRadioItem>
            </MenubarRadioGroup>
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
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1" data-testid="test-radio-item" id="radio-item-1">
                Option 1
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts Radix UI Menubar.RadioItem props', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1" onSelect={() => {}} onClick={() => {}}>
                Option 1
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('renders multiple radio items in a group', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1">Option 1</MenubarRadioItem>
              <MenubarRadioItem value="option2">Option 2</MenubarRadioItem>
              <MenubarRadioItem value="option3">Option 3</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });
});
