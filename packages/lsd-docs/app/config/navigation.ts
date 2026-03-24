import {
  ChatIcon,
  CompassIcon,
  LayoutIcon,
  PaintBrushIcon,
  PaletteIcon,
  RocketIcon,
  StackIcon,
  TableIcon,
  TextAaIcon,
  TextboxIcon,
  TextIndentIcon,
} from '@phosphor-icons/react';
import type { NavGroup } from '@/types/navigation';

export const navItems: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        url: '/getting-started/installation',
        icon: RocketIcon,
      },
      {
        title: 'Theming',
        url: '/getting-started/theming',
        icon: PaintBrushIcon,
      },
    ],
  },
  {
    title: 'Design Tokens',
    items: [
      { title: 'Colours', url: '/design-tokens/colours', icon: PaletteIcon },
      {
        title: 'Typography',
        url: '/design-tokens/typography',
        icon: TextAaIcon,
      },
      { title: 'Spacing', url: '/design-tokens/spacing', icon: TextIndentIcon },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Forms',
        icon: TextboxIcon,
        subItems: [
          { title: 'Autocomplete', url: '/components/autocomplete' },
          { title: 'Button', url: '/components/button' },
          { title: 'Button Group', url: '/components/button-group' },
          { title: 'Calendar', url: '/components/calendar' },
          { title: 'Checkbox', url: '/components/checkbox' },
          { title: 'Input', url: '/components/input' },
          { title: 'Label', url: '/components/label' },
          { title: 'Field', url: '/components/field' },
          { title: 'Form', url: '/components/form' },
          { title: 'Radio Group', url: '/components/radio-group' },
          { title: 'Slider', url: '/components/slider' },
          { title: 'Select', url: '/components/select' },
          { title: 'Switch', url: '/components/switch' },
        ],
      },
      {
        title: 'Navigation',
        icon: CompassIcon,
        subItems: [
          { title: 'Command', url: '/components/command' },
          { title: 'Dropdown Menu', url: '/components/dropdown-menu' },
          { title: 'Navigation Menu', url: '/components/navigation-menu' },
          { title: 'Menubar', url: '/components/menubar' },
          { title: 'Sidebar', url: '/components/sidebar' },
          { title: 'Tabs', url: '/components/tabs' },
        ],
      },
      {
        title: 'Feedback',
        icon: ChatIcon,
        subItems: [
          { title: 'Alert', url: '/components/alert' },
          { title: 'Alert Dialog', url: '/components/alert-dialog' },
          { title: 'Dialog', url: '/components/dialog' },
          { title: 'Progress', url: '/components/progress' },
          { title: 'Sonner', url: '/components/sonner' },
        ],
      },
      {
        title: 'Layout',
        icon: LayoutIcon,
        subItems: [
          { title: 'Card', url: '/components/card' },
          { title: 'Scroll Area', url: '/components/scroll-area' },
          { title: 'Separator', url: '/components/separator' },
        ],
      },
      {
        title: 'Data Display',
        icon: TableIcon,
        subItems: [
          { title: 'Accordion', url: '/components/accordion' },
          { title: 'Badge', url: '/components/badge' },
          { title: 'Skeleton', url: '/components/skeleton' },
          { title: 'Table', url: '/components/table' },
          { title: 'Toggle', url: '/components/toggle' },
          { title: 'Toggle Group', url: '/components/toggle-group' },
        ],
      },
      {
        title: 'Overlays',
        icon: StackIcon,
        subItems: [
          { title: 'Alert Dialog', url: '/components/alert-dialog' },
          { title: 'Dialog', url: '/components/dialog' },
          { title: 'Popover', url: '/components/popover' },
          { title: 'Sheet', url: '/components/sheet' },
          { title: 'Tooltip', url: '/components/tooltip' },
        ],
      },
    ],
  },
];
