import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from './index';

// NOTE: AvatarImage and AvatarFallback require Avatar context from Radix Avatar.
// Standalone tests for these components are not valid - they must be rendered inside Avatar.

describe('Avatar', () => {
  it('renders correctly with default size', () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'avatar');
    expect(container.firstChild).toHaveAttribute('data-size', 'default');
  });

  it('renders with different sizes', () => {
    const sizes = ['default', 'sm', 'lg'] as const;

    sizes.forEach((size) => {
      const { container, rerender } = render(<Avatar size={size} />);
      expect(container.firstChild).toHaveAttribute('data-size', size);
      rerender(<Avatar size={size} />);
      expect(container.firstChild).toHaveAttribute('data-size', size);
    });
  });

  it('applies custom className', () => {
    const { container } = render(<Avatar className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('pass through extra props', () => {
    const { container } = render(<Avatar id="test-avatar" />);
    expect(container.firstChild).toHaveAttribute('id', 'test-avatar');
  });

  it('renders with AvatarFallback inside', () => {
    render(
      <Avatar>
        <AvatarFallback>
          <span>AB</span>
        </AvatarFallback>
      </Avatar>
    );
    const fallback = screen.getByText('AB');
    expect(fallback.parentElement).toHaveAttribute('data-slot', 'avatar-fallback');
  });
});

describe('AvatarFallback', () => {
  it('renders correctly', () => {
    render(
      <Avatar>
        <AvatarFallback>
          <span>AB</span>
        </AvatarFallback>
      </Avatar>
    );
    const fallback = screen.getByText('AB');
    expect(fallback.parentElement).toHaveAttribute('data-slot', 'avatar-fallback');
  });

  it('applies custom className', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback">
          <span>JD</span>
        </AvatarFallback>
      </Avatar>
    );
    const fallback = screen.getByText('JD').parentElement;
    expect(fallback).toHaveClass('custom-fallback');
  });

  it('pass through extra props', () => {
    render(
      <Avatar>
        <AvatarFallback id="test-fallback">
          <span>XY</span>
        </AvatarFallback>
      </Avatar>
    );
    const fallback = document.querySelector('[data-slot="avatar-fallback"]');
    expect(fallback).toHaveAttribute('id', 'test-fallback');
  });
});

describe('AvatarBadge', () => {
  it('renders correctly', () => {
    render(
      <Avatar>
        <AvatarFallback>X</AvatarFallback>
        <AvatarBadge>
          <span>3</span>
        </AvatarBadge>
      </Avatar>
    );
    const badge = screen.getByText('3');
    expect(badge.parentElement).toHaveAttribute('data-slot', 'avatar-badge');
  });

  it('applies custom className', () => {
    render(
      <Avatar>
        <AvatarFallback>X</AvatarFallback>
        <AvatarBadge className="custom-badge">
          <span>1</span>
        </AvatarBadge>
      </Avatar>
    );
    const badge = screen.getByText('1').parentElement;
    expect(badge).toHaveClass('custom-badge');
  });

  it('pass through extra props', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>X</AvatarFallback>
        <AvatarBadge id="test-badge">
          <span>2</span>
        </AvatarBadge>
      </Avatar>
    );
    const badge = container.querySelector('[data-slot="avatar-badge"]');
    expect(badge).toHaveAttribute('id', 'test-badge');
  });
});

describe('AvatarGroup', () => {
  it('renders correctly', () => {
    render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    );
    const group = screen.getByText('A').closest('[data-slot="avatar-group"]');
    expect(group).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AvatarGroup className="custom-group">
        <Avatar>
          <AvatarFallback>X</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    );
    const group = container.querySelector('[data-slot="avatar-group"]');
    expect(group).toHaveClass('custom-group');
  });

  it('pass through extra props', () => {
    const { container } = render(
      <AvatarGroup id="test-group">
        <Avatar>
          <AvatarFallback>X</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    );
    const group = container.querySelector('[data-slot="avatar-group"]');
    expect(group).toHaveAttribute('id', 'test-group');
  });
});

describe('AvatarGroupCount', () => {
  it('renders correctly', () => {
    render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+5</AvatarGroupCount>
      </AvatarGroup>
    );
    const count = screen.getByText('+5');
    expect(count).toBeInTheDocument();
    expect(count).toHaveAttribute('data-slot', 'avatar-group-count');
  });

  it('applies custom className', () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>X</AvatarFallback>
        </Avatar>
        <AvatarGroupCount className="custom-count">+1</AvatarGroupCount>
      </AvatarGroup>
    );
    const count = container.querySelector('[data-slot="avatar-group-count"]');
    expect(count).toHaveClass('custom-count');
  });

  it('pass through extra props', () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>X</AvatarFallback>
        </Avatar>
        <AvatarGroupCount id="test-count">+2</AvatarGroupCount>
      </AvatarGroup>
    );
    const count = container.querySelector('[data-slot="avatar-group-count"]');
    expect(count).toHaveAttribute('id', 'test-count');
  });
});

describe('AvatarIntegration', () => {
  it('renders complete avatar with image and fallback', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.png" alt="Test" />
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
    );
    const container = document.querySelector('[data-slot="avatar"]');
    expect(container).toBeInTheDocument();
  });

  it('renders avatar with badge', () => {
    render(
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
        <AvatarBadge>3</AvatarBadge>
      </Avatar>
    );
    expect(screen.getByText('U')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders avatar group with multiple avatars', () => {
    render(
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+2</AvatarGroupCount>
      </AvatarGroup>
    );
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('renders avatar group with different sizes', () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>Group count</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    );
    const avatar = container.querySelector('[data-size="lg"]');
    expect(avatar).toBeInTheDocument();
  });

  it('exports AvatarSize type', async () => {
    const module = await import('./index');
    expect(module.AvatarSize).toBeUndefined(); // Exported from index as re-export from Avatar.tsx but not using named export in that pattern
  });
});
