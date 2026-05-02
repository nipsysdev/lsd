import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

afterEach(() => {
  cleanup();
});

describe('Theme Switching Tests', () => {
  describe('Button component theme switching', () => {
    it('renders with default theme (monochrome light)', () => {
      render(<Button data-testid="button">Test Button</Button>);
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders in dark mode', () => {
      render(
        <div className="dark">
          <Button data-testid="button">Dark Mode Button</Button>
        </div>
      );
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders with teal theme variant', () => {
      render(
        <div data-theme="teal">
          <Button data-testid="button">Teal Theme Button</Button>
        </div>
      );
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders with nord theme variant', () => {
      render(
        <div data-theme="nord">
          <Button data-testid="button">Nord Theme Button</Button>
        </div>
      );
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders with slate theme variant', () => {
      render(
        <div data-theme="slate">
          <Button data-testid="button">Slate Theme Button</Button>
        </div>
      );
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders with dark mode and nord theme', () => {
      render(
        <div className="dark" data-theme="nord">
          <Button data-testid="button">Dark Nordic Button</Button>
        </div>
      );
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders destructive variant in default theme', () => {
      render(
        <Button variant="destructive" data-testid="button-destructive-default">
          Destructive
        </Button>
      );
      const button = screen.getByTestId('button-destructive-default');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-destructive');
    });

    it('renders destructive variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="destructive" data-testid="button-destructive-teal">
            Destructive
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-destructive-teal');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-destructive');
    });

    it('renders destructive variant in nord theme', () => {
      render(
        <div data-theme="nord">
          <Button variant="destructive" data-testid="button-destructive-nord">
            Destructive
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-destructive-nord');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-destructive');
    });

    it('renders destructive variant in slate theme', () => {
      render(
        <div data-theme="slate">
          <Button variant="destructive" data-testid="button-destructive-slate">
            Destructive
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-destructive-slate');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-destructive');
    });

    it('renders success variant in default dark mode', () => {
      render(
        <div className="dark">
          <Button variant="success" data-testid="button-success-dark">
            Success
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-success-dark');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-success');
    });

    it('renders success variant in teal dark mode', () => {
      render(
        <div className="dark" data-theme="teal">
          <Button variant="success" data-testid="button-success-teal-dark">
            Success
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-success-teal-dark');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-success');
    });

    it('renders success variant in nord dark mode', () => {
      render(
        <div className="dark" data-theme="nord">
          <Button variant="success" data-testid="button-success-nord-dark">
            Success
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-success-nord-dark');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-success');
    });

    it('renders success variant in slate dark mode', () => {
      render(
        <div className="dark" data-theme="slate">
          <Button variant="success" data-testid="button-success-slate-dark">
            Success
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-success-slate-dark');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-success');
    });

    it('renders filled variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="filled" data-testid="button-filled-teal">
            Filled
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-filled-teal')).toBeInTheDocument();
    });

    it('renders outlined variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="outlined" data-testid="button-outlined-teal">
            Outlined
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-outlined-teal')).toBeInTheDocument();
    });

    it('renders filled-rounded variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="filled-rounded" data-testid="button-filled-rounded-teal">
            Filled Rounded
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-filled-rounded-teal')).toBeInTheDocument();
    });

    it('renders outlined-rounded variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="outlined-rounded" data-testid="button-outlined-rounded-teal">
            Outlined Rounded
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-outlined-rounded-teal')).toBeInTheDocument();
    });

    it('renders link variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="link" data-testid="button-link-teal">
            Link
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-link-teal')).toBeInTheDocument();
    });

    it('renders ghost variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="ghost" data-testid="button-ghost-teal">
            Ghost
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-ghost-teal')).toBeInTheDocument();
    });

    it('renders ghost-rounded variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="ghost-rounded" data-testid="button-ghost-rounded-teal">
            Ghost Rounded
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-ghost-rounded-teal')).toBeInTheDocument();
    });

    it('renders destructive variant in nord dark mode', () => {
      render(
        <div className="dark" data-theme="nord">
          <Button variant="destructive" data-testid="button-destructive-nord-dark">
            Destructive
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-destructive-nord-dark');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-destructive');
    });

    it('renders success variant in nord dark mode', () => {
      render(
        <div className="dark" data-theme="nord">
          <Button variant="success" data-testid="button-success-nord-dark-2">
            Success
          </Button>
        </div>
      );
      const button = screen.getByTestId('button-success-nord-dark-2');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('lsd:bg-lsd-success');
    });

    it('renders small size in default theme', () => {
      render(
        <Button size="sm" data-testid="button-sm-default">
          Small
        </Button>
      );
      expect(screen.getByTestId('button-sm-default')).toBeInTheDocument();
    });

    it('renders small size in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button size="sm" data-testid="button-sm-teal">
            Small
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-sm-teal')).toBeInTheDocument();
    });

    it('renders medium size in nord theme', () => {
      render(
        <div data-theme="nord">
          <Button size="md" data-testid="button-md-nord">
            Medium
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-md-nord')).toBeInTheDocument();
    });

    it('renders large size in slate theme', () => {
      render(
        <div data-theme="slate">
          <Button size="lg" data-testid="button-lg-slate">
            Large
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-lg-slate')).toBeInTheDocument();
    });

    it('renders square-sm size in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button size="square-sm" data-testid="button-square-sm-teal">
            Icon
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-square-sm-teal')).toBeInTheDocument();
    });

    it('renders square-md size in nord theme', () => {
      render(
        <div data-theme="nord">
          <Button size="square-md" data-testid="button-square-md-nord">
            Icon
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-square-md-nord')).toBeInTheDocument();
    });

    it('renders square-lg size in slate theme', () => {
      render(
        <div data-theme="slate">
          <Button size="square-lg" data-testid="button-square-lg-slate">
            Icon
          </Button>
        </div>
      );
      expect(screen.getByTestId('button-square-lg-slate')).toBeInTheDocument();
    });
  });

  describe('Card component theme switching', () => {
    it('renders with default theme (monochrome light)', () => {
      render(
        <Card data-testid="card">
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
          </CardHeader>
        </Card>
      );
      const card = screen.getByTestId('card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
      expect(card).toHaveClass('lsd:border-lsd-border');
    });

    it('renders in dark mode', () => {
      render(
        <div className="dark">
          <Card data-testid="card">
            <CardHeader>
              <CardTitle>Dark Mode Card</CardTitle>
            </CardHeader>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
      expect(card).toHaveClass('lsd:border-lsd-border');
    });

    it('renders with teal theme variant', () => {
      render(
        <div data-theme="teal">
          <Card data-testid="card">
            <CardContent>Teal Theme Content</CardContent>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
    });

    it('renders with nord theme variant', () => {
      render(
        <div data-theme="nord">
          <Card data-testid="card">
            <CardContent>Nord Theme Content</CardContent>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
    });

    it('renders with slate theme variant', () => {
      render(
        <div data-theme="slate">
          <Card data-testid="card">
            <CardContent>Slate Theme Content</CardContent>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
    });

    it('renders with dark mode and slate theme', () => {
      render(
        <div className="dark" data-theme="slate">
          <Card data-testid="card">
            <CardHeader>
              <CardTitle>Dark Slate Card</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
    });

    it('renders complete card structure in default theme', () => {
      render(
        <Card data-testid="card-default">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <button type="button">Action</button>
            </CardAction>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>
            <button type="button">Footer</button>
          </CardFooter>
        </Card>
      );
      const card = screen.getByTestId('card-default');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
    });

    it('renders complete card structure in teal theme', () => {
      render(
        <div data-theme="teal">
          <Card data-testid="card-teal">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>
                <button type="button">Action</button>
              </CardAction>
            </CardHeader>
            <CardContent>Card Content</CardContent>
            <CardFooter>
              <button type="button">Footer</button>
            </CardFooter>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card-teal');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
    });

    it('renders complete card structure in nord theme', () => {
      render(
        <div data-theme="nord">
          <Card data-testid="card-nord">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>Card Content</CardContent>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card-nord');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
    });

    it('renders complete card structure in slate theme', () => {
      render(
        <div data-theme="slate">
          <Card data-testid="card-slate">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>Card Content</CardContent>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card-slate');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('lsd:bg-lsd-foreground');
    });

    it('renders card subcomponents in dark mode with nord theme', () => {
      render(
        <div className="dark" data-theme="nord">
          <Card data-testid="card">
            <CardHeader data-testid="header">
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent data-testid="content">Content</CardContent>
            <CardFooter data-testid="footer">Footer</CardFooter>
          </Card>
        </div>
      );
      expect(screen.getByTestId('card')).toBeInTheDocument();
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('content')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('renders card with custom className in teal theme', () => {
      render(
        <div data-theme="teal">
          <Card data-testid="card-teal-custom" className="custom-class">
            <CardContent>Content</CardContent>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card-teal-custom');
      expect(card).toHaveClass('custom-class');
    });

    it('renders card with custom className in nord theme', () => {
      render(
        <div data-theme="nord">
          <Card data-testid="card-nord-custom" className="custom-class">
            <CardContent>Content</CardContent>
          </Card>
        </div>
      );
      const card = screen.getByTestId('card-nord-custom');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('Badge component theme switching', () => {
    it('renders with default theme (monochrome light)', () => {
      render(<Badge data-testid="badge">Badge</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders in dark mode', () => {
      render(
        <div className="dark">
          <Badge data-testid="badge">Dark Mode Badge</Badge>
        </div>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders with teal theme variant', () => {
      render(
        <div data-theme="teal">
          <Badge data-testid="badge">Teal Theme Badge</Badge>
        </div>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders with nord theme variant', () => {
      render(
        <div data-theme="nord">
          <Badge data-testid="badge">Nord Theme Badge</Badge>
        </div>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders with slate theme', () => {
      render(
        <div data-theme="slate">
          <Badge data-testid="badge">Slate Theme Badge</Badge>
        </div>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toBeInTheDocument();
    });

    it('renders with dark mode and teal theme', () => {
      render(
        <div className="dark" data-theme="teal">
          <Badge data-testid="badge">Dark Teal Badge</Badge>
        </div>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders filled variant in default theme', () => {
      render(
        <Badge variant="filled" data-testid="badge-filled-default">
          Filled
        </Badge>
      );
      const badge = screen.getByTestId('badge-filled-default');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders filled variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Badge variant="filled" data-testid="badge-filled-teal">
            Filled
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-filled-teal');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders filled variant in nord theme', () => {
      render(
        <div data-theme="nord">
          <Badge variant="filled" data-testid="badge-filled-nord">
            Filled
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-filled-nord');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders filled variant in slate theme', () => {
      render(
        <div data-theme="slate">
          <Badge variant="filled" data-testid="badge-filled-slate">
            Filled
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-filled-slate');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-lsd-primary');
    });

    it('renders outlined variant in default dark mode', () => {
      render(
        <div className="dark">
          <Badge variant="outlined" data-testid="badge-outlined-dark">
            Outlined
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-outlined-dark');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-transparent');
    });

    it('renders outlined variant in teal dark mode', () => {
      render(
        <div className="dark" data-theme="teal">
          <Badge variant="outlined" data-testid="badge-outlined-teal-dark">
            Outlined
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-outlined-teal-dark');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-transparent');
    });

    it('renders outlined variant in nord dark mode', () => {
      render(
        <div className="dark" data-theme="nord">
          <Badge variant="outlined" data-testid="badge-outlined-nord-dark">
            Outlined
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-outlined-nord-dark');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:bg-transparent');
    });

    it('renders small size in nord theme', () => {
      render(
        <div data-theme="nord">
          <Badge size="sm" data-testid="badge-sm-nord">
            Small
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-sm-nord');
      expect(badge).toBeInTheDocument();
    });

    it('renders medium size in nord theme', () => {
      render(
        <div data-theme="nord">
          <Badge size="md" data-testid="badge-md-nord">
            Medium
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-md-nord');
      expect(badge).toBeInTheDocument();
    });

    it('renders dot variant in default theme', () => {
      render(<Badge dot data-testid="badge-dot-default" />);
      const badge = screen.getByTestId('badge-dot-default');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:rounded-full');
      expect(badge).toHaveClass('lsd:p-0');
    });

    it('renders dot variant in teal theme', () => {
      render(
        <div data-theme="teal">
          <Badge dot data-testid="badge-dot-teal" />
        </div>
      );
      const badge = screen.getByTestId('badge-dot-teal');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:rounded-full');
      expect(badge).toHaveClass('lsd:p-0');
    });

    it('renders dot variant in nord theme', () => {
      render(
        <div data-theme="nord">
          <Badge dot data-testid="badge-dot-nord" />
        </div>
      );
      const badge = screen.getByTestId('badge-dot-nord');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:rounded-full');
      expect(badge).toHaveClass('lsd:p-0');
    });

    it('renders dot variant in slate theme', () => {
      render(
        <div data-theme="slate">
          <Badge dot data-testid="badge-dot-slate" />
        </div>
      );
      const badge = screen.getByTestId('badge-dot-slate');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('lsd:rounded-full');
      expect(badge).toHaveClass('lsd:p-0');
    });

    it('renders badge with icon in teal dark mode', () => {
      render(
        <div className="dark" data-theme="teal">
          <Badge icon={<span data-testid="icon">★</span>} data-testid="badge-icon-teal">
            With Icon
          </Badge>
        </div>
      );
      expect(screen.getByTestId('badge-icon-teal')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders badge with icon in nord dark mode', () => {
      render(
        <div className="dark" data-theme="nord">
          <Badge icon={<span data-testid="icon">★</span>} data-testid="badge-icon-nord">
            With Icon
          </Badge>
        </div>
      );
      expect(screen.getByTestId('badge-icon-nord')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders badge with icon in slate dark mode', () => {
      render(
        <div className="dark" data-theme="slate">
          <Badge icon={<span data-testid="icon">★</span>} data-testid="badge-icon-slate">
            With Icon
          </Badge>
        </div>
      );
      expect(screen.getByTestId('badge-icon-slate')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders filled variant in slate dark mode', () => {
      render(
        <div className="dark" data-theme="slate">
          <Badge variant="filled" data-testid="badge-filled-slate-dark">
            Filled
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-filled-slate-dark');
      expect(badge).toBeInTheDocument();
    });

    it('renders outlined variant in slate dark mode', () => {
      render(
        <div className="dark" data-theme="slate">
          <Badge variant="outlined" data-testid="badge-outlined-slate-dark">
            Outlined
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-outlined-slate-dark');
      expect(badge).toBeInTheDocument();
    });

    it('renders dot variant in slate dark mode', () => {
      render(
        <div className="dark" data-theme="slate">
          <Badge variant="dot" data-testid="badge-dot-slate-dark" />
        </div>
      );
      const badge = screen.getByTestId('badge-dot-slate-dark');
      expect(badge).toBeInTheDocument();
    });

    it('renders clickable badge in default theme', () => {
      render(
        <Badge onClick={() => {}} data-testid="badge-clickable-default">
          Clickable
        </Badge>
      );
      const badge = screen.getByTestId('badge-clickable-default');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveAttribute('role', 'button');
    });

    it('renders clickable badge in teal theme', () => {
      render(
        <div data-theme="teal">
          <Badge onClick={() => {}} data-testid="badge-clickable-teal">
            Clickable
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-clickable-teal');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveAttribute('role', 'button');
    });

    it('renders clickable badge in nord theme', () => {
      render(
        <div data-theme="nord">
          <Badge onClick={() => {}} data-testid="badge-clickable-nord">
            Clickable
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-clickable-nord');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveAttribute('role', 'button');
    });

    it('renders clickable badge in slate theme', () => {
      render(
        <div data-theme="slate">
          <Badge onClick={() => {}} data-testid="badge-clickable-slate">
            Clickable
          </Badge>
        </div>
      );
      const badge = screen.getByTestId('badge-clickable-slate');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveAttribute('role', 'button');
    });
  });

  describe('Cross-component theme consistency', () => {
    it('renders Button, Card, and Badge together in teal theme', () => {
      render(
        <div data-theme="teal">
          <Card data-testid="card">
            <CardHeader>
              <CardTitle>Card with Components</CardTitle>
            </CardHeader>
            <CardContent>
              <Button data-testid="button">Button</Button>
              <Badge data-testid="badge">Badge</Badge>
            </CardContent>
          </Card>
        </div>
      );
      expect(screen.getByTestId('card')).toBeInTheDocument();
      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('badge')).toBeInTheDocument();
    });

    it('renders all components in nord dark mode', () => {
      render(
        <div className="dark" data-theme="nord">
          <Card data-testid="card">
            <CardHeader>
              <CardTitle>Dark Nordic Card</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="success" data-testid="button">
                Success Button
              </Button>
              <Badge variant="outlined" data-testid="badge">
                Outlined Badge
              </Badge>
            </CardContent>
          </Card>
        </div>
      );
      expect(screen.getByTestId('card')).toBeInTheDocument();
      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('badge')).toBeInTheDocument();
    });

    it('renders destructive button in default theme', () => {
      render(
        <Button variant="destructive" data-testid="btn-destructive">
          Destructive
        </Button>
      );
      expect(screen.getByTestId('btn-destructive')).toHaveClass('lsd:bg-lsd-destructive');
    });

    it('renders badge in default theme', () => {
      render(<Badge data-testid="badge-default">Badge</Badge>);
      expect(screen.getByTestId('badge-default')).toBeInTheDocument();
    });

    it('renders destructive button in teal theme', () => {
      render(
        <div data-theme="teal">
          <Button variant="destructive" data-testid="btn-destructive-teal">
            Destructive
          </Button>
          <Badge data-testid="badge-teal">Badge</Badge>
        </div>
      );
      expect(screen.getByTestId('btn-destructive-teal')).toHaveClass('lsd:bg-lsd-destructive');
      expect(screen.getByTestId('badge-teal')).toBeInTheDocument();
    });

    it('renders destructive button in nord theme', () => {
      render(
        <div data-theme="nord">
          <Button variant="destructive" data-testid="btn-destructive-nord">
            Destructive
          </Button>
          <Badge data-testid="badge-nord">Badge</Badge>
        </div>
      );
      expect(screen.getByTestId('btn-destructive-nord')).toHaveClass('lsd:bg-lsd-destructive');
      expect(screen.getByTestId('badge-nord')).toBeInTheDocument();
    });

    it('renders destructive button in slate theme', () => {
      render(
        <div data-theme="slate">
          <Button variant="destructive" data-testid="btn-destructive-slate">
            Destructive
          </Button>
          <Badge data-testid="badge-slate">Badge</Badge>
        </div>
      );
      expect(screen.getByTestId('btn-destructive-slate')).toHaveClass('lsd:bg-lsd-destructive');
      expect(screen.getByTestId('badge-slate')).toBeInTheDocument();
    });

    it('handles theme switching from teal to nord', () => {
      const { rerender } = render(
        <div data-theme="teal">
          <Button data-testid="button">Teal</Button>
          <Badge data-testid="badge">Teal Badge</Badge>
        </div>
      );
      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('badge')).toBeInTheDocument();

      rerender(
        <div data-theme="nord">
          <Button data-testid="button">Nord</Button>
          <Badge data-testid="badge">Nord Badge</Badge>
        </div>
      );
      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('badge')).toBeInTheDocument();
    });

    it('handles theme switching from light to dark mode', () => {
      const { rerender } = render(
        <div data-theme="nord">
          <Button data-testid="button">Light</Button>
          <Card data-testid="card">
            <CardContent>Content</CardContent>
          </Card>
        </div>
      );
      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('card')).toBeInTheDocument();

      rerender(
        <div className="dark" data-theme="nord">
          <Button data-testid="button">Dark</Button>
          <Card data-testid="card">
            <CardContent>Content</CardContent>
          </Card>
        </div>
      );
      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('card')).toBeInTheDocument();
    });
  });
});
