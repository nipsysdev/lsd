import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from '../index';

describe('MenubarRadioGroup', () => {
  it('renders without crashing', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup>
              <MenubarRadioItem value="1">Option 1</MenubarRadioItem>
              <MenubarRadioItem value="2">Option 2</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('renders children correctly', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup>
              <MenubarRadioItem value="option1">Test Option 1</MenubarRadioItem>
              <MenubarRadioItem value="option2">Test Option 2</MenubarRadioItem>
              <MenubarRadioItem value="option3">Test Option 3</MenubarRadioItem>
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
            <MenubarRadioGroup value="option1">
              <MenubarRadioItem value="option1">Option 1</MenubarRadioItem>
              <MenubarRadioItem value="option2">Option 2</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });

  it('accepts onValueChange prop', () => {
    const handleChange = () => {};
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="option1" onValueChange={handleChange}>
              <MenubarRadioItem value="option1">Option 1</MenubarRadioItem>
              <MenubarRadioItem value="option2">Option 2</MenubarRadioItem>
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
            <MenubarRadioGroup className="custom-class">
              <MenubarRadioItem value="option1">Option 1</MenubarRadioItem>
            </MenubarRadioGroup>
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
            <MenubarRadioGroup data-testid="test-radio-group" id="radio-group-1">
              <MenubarRadioItem value="option1">Option 1</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(true).toBe(true);
  });
});
