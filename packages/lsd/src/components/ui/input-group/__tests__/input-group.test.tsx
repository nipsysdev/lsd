import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '../index';

describe('InputGroup', () => {
  it('renders without crashing', () => {
    render(<InputGroup />);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<InputGroup className="custom-class" />);
    const group = screen.getByRole('group');
    expect(group).toHaveClass('custom-class');
  });

  it('renders children correctly', () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="Test input" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
    expect(screen.getByText('@')).toBeInTheDocument();
  });
});

describe('InputGroupAddon', () => {
  it('renders with default align', () => {
    render(
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
    const addon = document.querySelector('[data-slot="input-group-addon"]');
    expect(addon).toHaveAttribute('data-align', 'inline-start');
  });

  it('renders with custom align', () => {
    render(
      <InputGroup>
        <InputGroupAddon align="inline-end">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
    const addon = document.querySelector('[data-slot="input-group-addon"]');
    expect(addon).toHaveAttribute('data-align', 'inline-end');
  });
});

describe('InputGroupButton', () => {
  it('renders button with default props', () => {
    render(
      <InputGroup>
        <InputGroupButton>Submit</InputGroupButton>
      </InputGroup>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Submit');
    expect(button).toHaveClass('lsd:h-10'); // Default md size
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(
      <InputGroup>
        <InputGroupButton onClick={handleClick}>Click me</InputGroupButton>
      </InputGroup>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom size', () => {
    render(
      <InputGroup>
        <InputGroupButton size="sm">Large Button</InputGroupButton>
      </InputGroup>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:h-8'); // sm size
  });
});

describe('InputGroupText', () => {
  it('renders text content', () => {
    render(
      <InputGroup>
        <InputGroupText>Label text</InputGroupText>
      </InputGroup>
    );
    expect(screen.getByText('Label text')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(
      <InputGroup>
        <InputGroupText className="custom-text">Label</InputGroupText>
      </InputGroup>
    );
    const text = screen.getByText('Label');
    expect(text).toHaveClass('custom-text');
  });
});

describe('InputGroupInput', () => {
  it('renders input with default props', () => {
    render(
      <InputGroup>
        <InputGroupInput placeholder="Enter text" />
      </InputGroup>
    );
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-slot', 'input-group-control');
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(
      <InputGroup>
        <InputGroupInput onChange={handleChange} />
      </InputGroup>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    render(
      <InputGroup>
        <InputGroupInput className="custom-input" />
      </InputGroup>
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-slot', 'input-group-control');
  });
});

describe('InputGroup Integration', () => {
  it('renders complete input group with all components', () => {
    render(
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="icon">✓</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    );

    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
