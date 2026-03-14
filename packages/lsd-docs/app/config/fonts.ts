export const Fonts = ['monospace', 'sans-serif', 'serif'] as const;
export type Font = (typeof Fonts)[number];
