'use client';

import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@nipsys/lsd';
import { DotsThreeIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'lg';

/**
 * @docSection usage
 */
export const CODE = `import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@nipsys/lsd';
import { DotsThreeIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a card component with header, content, and footer sections.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="square-sm" aria-label="More options">
            <DotsThreeIcon weight="bold" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-primary">
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

export function CardCompleteExample() {
  useSendThemeToIframes();

  return (
    <Card className="w-full max-w-md h-fit">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a card component with header, content, and footer sections.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="square-sm" aria-label="More options">
            <DotsThreeIcon weight="bold" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-primary">
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

export default function Complete() {
  return <CardCompleteExample />;
}
