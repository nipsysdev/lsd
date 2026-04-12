'use client';

import { Typography } from '@nipsys/shadcn-lsd';
import { type ReactNode, useEffect } from 'react';
import { registerSection, unregisterSection } from '@/stores/toc-store';

interface PageSectionProps {
  title: string;
  isChild?: boolean;
  children: ReactNode;
}

export function PageSection({ title, isChild = false, children }: PageSectionProps) {
  useEffect(() => {
    registerSection({
      title,
      isChild,
    });

    return () => {
      unregisterSection(title);
    };
  }, [title, isChild]);

  const headingVariant = isChild ? 'h4' : 'h2';
  const spacingClasses = isChild
    ? 'mt-(--lsd-spacing-largest) pt-(--lsd-spacing-small)'
    : 'my-(--lsd-spacing-largest) py-(--lsd-spacing-small)';

  return (
    <div id={title} className={`${spacingClasses}`}>
      <Typography variant={headingVariant} className="mb-(--lsd-spacing-base)">
        {title}
      </Typography>
      {children}
    </div>
  );
}
