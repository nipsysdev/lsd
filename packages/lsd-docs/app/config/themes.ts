export const Themes = ['monochrome', 'teal', 'nord'] as const;
export type Theme = (typeof Themes)[number];
