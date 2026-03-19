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
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>More options</title>
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
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
