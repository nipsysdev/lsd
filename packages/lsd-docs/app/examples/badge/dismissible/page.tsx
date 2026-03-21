'use client';

import { Badge } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { useState } from 'react';
import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  const [badges, setBadges] = useState([
    { id: 1, text: 'Dismissible 1' },
    { id: 2, text: 'Dismissible 2' },
    { id: 3, text: 'Dismissible 3' },
  ]);

  const handleDismiss = (id: number) => {
    setBadges(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      {badges.map(badge => (
        <Badge 
          key={badge.id}
          variant="filled"
          onDismiss={() => handleDismiss(badge.id)}
        >
          {badge.text}
        </Badge>
      ))}
      {badges.length === 0 && (
        <span>All badges dismissed</span>
      )}
    </div>
  );
}`;

export function BadgeDismissibleExample() {
  const [badges, setBadges] = useState([
    { id: 1, text: 'Dismissible 1' },
    { id: 2, text: 'Dismissible 2' },
    { id: 3, text: 'Dismissible 3' },
  ]);

  const handleDismiss = (id: number) => {
    setBadges(prev => prev.filter(b => b.id !== id));
  };

  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      {badges.map(badge => (
        <Badge key={badge.id} variant="filled" onDismiss={() => handleDismiss(badge.id)}>
          {badge.text}
        </Badge>
      ))}
      {badges.length === 0 && <span>All badges dismissed</span>}
    </div>
  );
}

export default function Dismissible() {
  return <BadgeDismissibleExample />;
}
