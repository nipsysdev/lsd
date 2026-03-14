import { Button } from '@nipsys/shadcn-lsd';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import Link from 'next/link';

interface PageNavigationProps {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
}

export function PageNavigation({ previous, next }: PageNavigationProps) {
  return (
    <div className="grid grid-cols-2 my-(--lsd-spacing-larger) items-center">
      {previous && (
        <div>
          <Button className="w-fit" variant="outlined" asChild>
            <Link href={previous.href}>
              <ArrowLeftIcon className="mr-(--lsd-spacing-smaller)" weight="duotone" />
              {previous.title}
            </Link>
          </Button>
        </div>
      )}
      {next && (
        <div className="col-start-2 text-right">
          <Button className="w-fit" asChild>
            <Link href={next.href}>
              {next.title}
              <ArrowRightIcon className="ml-(--lsd-spacing-smaller)" weight="duotone" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
