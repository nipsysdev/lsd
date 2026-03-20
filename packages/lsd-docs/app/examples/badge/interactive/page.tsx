'use client';

import { Badge } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { useState } from 'react';
import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Badge onClick={() => alert('Clicked!')}>
        Clickable Badge
      </Badge>
      <Badge 
        variant="success" 
        onClick={() => setClickCount(c => c + 1)}
      >
        Clicked {clickCount} times
      </Badge>
      <Badge 
        variant="info" 
        onClick={() => console.log('Info badge clicked')}
      >
        More Info
      </Badge>
    </div>
  );
}`;

export function BadgeInteractiveExample() {
  const [clickCount, setClickCount] = useState(0);
  useInIframeThemeSync();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Badge onClick={() => alert('Clicked!')}>Clickable Badge</Badge>
      <Badge variant="success" onClick={() => setClickCount(c => c + 1)}>
        Clicked {clickCount} times
      </Badge>
      <Badge variant="info" onClick={() => console.log('Info badge clicked')}>
        More Info
      </Badge>
    </div>
  );
}

export default function Interactive() {
  return <BadgeInteractiveExample />;
}
