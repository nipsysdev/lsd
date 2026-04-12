export const Themes = ['monochrome', 'teal', 'nord', 'terracotta', 'catppuccin'] as const;
export type Theme = (typeof Themes)[number];
