'use client';

import {
  Button,
  ButtonGroup,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nipsys/shadcn-lsd';
import { DotsThreeIcon } from '@phosphor-icons/react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import {
  Button,
  ButtonGroup,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nipsys/shadcn-lsd';
import { DotsThreeIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a card component with header, content, and footer sections.
        </CardDescription>
        <CardAction>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="square-sm" aria-label="More options">
                <DotsThreeIcon weight="bold" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" size="sm" className="p-0">
              <ButtonGroup orientation="vertical">
                <Button variant="outlined" size="sm" className="justify-start">
                  Edit
                </Button>
                <Button variant="outlined" size="sm" className="justify-start">
                  Duplicate
                </Button>
                <Button variant="outlined" size="sm" className="justify-start text-destructive">
                  Delete
                </Button>
              </ButtonGroup>
            </PopoverContent>
          </Popover>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Cards are used to group related content and actions together. They provide a clean,
          organized way to display information and can include headers, content areas, and footers.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outlined" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
};`;

export function CardBasicExample() {
  useInIframeThemeSync();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a card component with header, content, and footer sections.
        </CardDescription>
        <CardAction>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="square-sm" aria-label="More options">
                <DotsThreeIcon weight="bold" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" size="sm" className="p-0">
              <ButtonGroup orientation="vertical">
                <Button variant="outlined" size="sm" className="justify-start">
                  Edit
                </Button>
                <Button variant="outlined" size="sm" className="justify-start">
                  Duplicate
                </Button>
                <Button variant="outlined" size="sm" className="justify-start text-destructive">
                  Delete
                </Button>
              </ButtonGroup>
            </PopoverContent>
          </Popover>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Cards are used to group related content and actions together. They provide a clean,
          organized way to display information and can include headers, content areas, and footers.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outlined" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Basic() {
  return <CardBasicExample />;
}
