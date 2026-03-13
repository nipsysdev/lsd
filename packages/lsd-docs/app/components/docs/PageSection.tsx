'use client';

import { useEffect, ReactNode } from 'react';
import { Typography } from '@nipsys/shadcn-lsd';
import { useTableOfContents, TocItem } from './useTableOfContents';

interface PageSectionProps {
  id?: string;
  title: string;
  level?: 2 | 3 | 4;
  children: ReactNode;
}

function generateId(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export function PageSection({ id, title, level = 2, children }: PageSectionProps) {
  const { registerSection, unregisterSection } = useTableOfContents();
  const sectionId = id || generateId(title);

  useEffect(() => {
    const tocItem: TocItem = {
      id: sectionId,
      title,
      level,
    };

    registerSection(tocItem);

    return () => {
      unregisterSection(sectionId);
    };
  }, [sectionId, title, level, registerSection, unregisterSection]);

  const HeadingVariant = level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';

  return (
    <div id={sectionId} className="mb-(--lsd-spacing-larger)">
      <Typography variant={HeadingVariant} className="mb-(--lsd-spacing-base)">
        {title}
      </Typography>
      {children}
    </div>
  );
}
