'use client';

import { Badge } from '@nipsys/lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';

export const SIZE = 'sm';

/** @docSection feature */
export const CODE = `import { useState } from 'react';
import { Badge } from '@nipsys/lsd';

function Example() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
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
`;

export function BadgeInteractiveExample() {
  const [clickCount, setClickCount] = useState(0);
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
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
