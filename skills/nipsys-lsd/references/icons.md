# LSD Icon System

Complete icon system for @nipsys/lsd using Phosphor icons.

## Concept

**ALWAYS** use Phosphor icons from `@phosphor-icons/react` for all icons in LSD components.

## Icon Import Pattern

```tsx
// Standard import
import { PlusIcon, ShareIcon, CheckIcon } from '@phosphor-icons/react';

// Use in components
<Button><PlusIcon /></Button>
<Card><ShareIcon weight="duotone" /></Card>
```

## Icon Weight Rules

### Default Weight (No weight prop)
Use for:
- CheckIcon
- PlusIcon

```tsx
<Button><PlusIcon /></Button>
<Button><CheckIcon /></Button>
```

### Duotone Weight (`weight="duotone"`)
Use for:
- All other icons (ShareIcon, TrashIcon, DownloadIcon, etc.)
- Icons in tooltips, badges, cards, alerts

```tsx
<Button><ShareIcon weight="duotone" /></Button>
<Card><InfoIcon weight="duotone" /></Card>
```

## Common Icons

### Action Icons
```tsx
import {
  PlusIcon,        // Add, create new
  TrashIcon,       // Delete, remove
  EditIcon,        // Edit, modify
  ShareIcon,       // Share, collaborate
  DownloadIcon,    // Download, export
  UploadIcon,      // Upload, import
  CopyIcon,        // Copy, duplicate
} from '@phosphor-icons/react';
```

### Navigation Icons
```tsx
import {
  ArrowRightIcon,  // Next, continue
  ArrowLeftIcon,   // Back, previous
  ArrowUpIcon,     // Up, collapse
  ArrowDownIcon,   // Down, expand
  CaretDownIcon,   // Dropdown, select
  CaretRightIcon,  // Submenu, nested
} from '@phosphor-icons/react';
```

### Status Icons
```tsx
import {
  CheckIcon,       // Success, completed (default weight)
  CheckCircleIcon, // Success, verified (duotone)
  WarningIcon,     // Warning, alert
  ErrorIcon,       // Error, failure
  InfoIcon,        // Information, help
  QuestionIcon,    // Question, tooltip
} from '@phosphor-icons/react';
```

### UI Element Icons
```tsx
import {
  TextboxIcon,     // Input, text field
  ListIcon,        // List, menu
  GridIcon,        // Grid, cards
  GearIcon,        // Settings, configuration
  BellIcon,        // Notifications
  SearchIcon,      // Search, filter
  FilterIcon,      // Filter options
  SortIcon,        // Sort, order
  CalendarIcon,    // Date, calendar
  ClockIcon,       // Time, duration
  UserIcon,        // User, person
  UsersIcon,       // Users, team
  FolderIcon,      // Folder, directory
  FileIcon,        // File, document
  LinkIcon,        // Link, URL
} from '@phosphor-icons/react';
```

### Feedback Icons
```tsx
import {
  ThumbsUpIcon,    // Like, approve
  ThumbsDownIcon,  // Dislike, reject
  StarIcon,        // Star, favorite
  HeartIcon,       // Love, save
  BookmarkIcon,    // Bookmark, save for later
} from '@phosphor-icons/react';
```

## Icon Usage Patterns

### Icons in Buttons
```tsx
// Icon only button
<Button><PlusIcon /></Button>
<Button><ShareIcon weight="duotone" /></Button>

// Icon + text button
<Button>
  <PlusIcon className="mr-(--lsd-spacing-smaller)" />
  Add Item
</Button>

// Text before icon
<Button>
  Save
  <CheckIcon className="ml-(--lsd-spacing-smaller)" />
</Button>

// Icon buttons with hover effects
<Button className="hover:text-destructive">
  <TrashIcon weight="duotone" />
</Button>
```

### Icons in Cards
```tsx
// Card header with icon
<CardHeader>
  <div className="flex items-center gap-(--lsd-spacing-smaller)">
    <FileIcon weight="duotone" />
    <CardTitle>Document</CardTitle>
  </div>
</CardHeader>

// Card content with icon
<CardContent>
  <div className="flex items-center gap-(--lsd-spacing-smaller)">
    <CalendarIcon weight="duotone" />
    <Typography variant="body2">April 24, 2026</Typography>
  </div>
</CardContent>
```

### Icons in Alerts
```tsx
// Info alert
<Alert>
  <InfoIcon weight="duotone" />
  <AlertDescription>
    <Typography variant="body2">Information message</Typography>
  </AlertDescription>
</Alert>

// Error alert
<Alert variant="destructive">
  <ErrorIcon weight="duotone" />
  <AlertDescription>
    <Typography variant="body2">Error message</Typography>
  </AlertDescription>
</Alert>

// Success alert
<Alert>
  <CheckCircleIcon weight="duotone" />
  <AlertDescription>
    <Typography variant="body2">Success message</Typography>
  </AlertDescription>
</Alert>
```

### Icons in Badges
```tsx
<Badge>
  <NewIcon weight="duotone" className="mr-(--lsd-spacing-smallest)" />
  New
</Badge>
```

### Icons with Tooltips
```tsx
<Tooltip content="Learn more">
  <Button><QuestionIcon weight="duotone" /></Button>
</Tooltip>

<Tooltip content="Settings">
  <Button><GearIcon weight="duotone" /></Button>
</Tooltip>
```

### Icons in Input Groups
```tsx
<InputGroup>
  <InputGroupAddOnIcon>
    <SearchIcon weight="duotone" />
  </InputGroupAddOnIcon>
  <Input placeholder="Search..." />
</InputGroup>
```

### Icons in Avatars
```tsx
<Avatar>
  <AvatarImage src="..." />
  <AvatarFallback>
    <UserIcon weight="duotone" />
  </AvatarFallback>
</Avatar>
```

### Icons in Navigation
```tsx
// Sidebar menu items
<SidebarMenuItem>
  <SidebarMenuButton>
    <DashboardIcon weight="duotone" />
    <span>Dashboard</span>
  </SidebarMenuButton>
</SidebarMenuItem>

// Tabs
<TabsTrigger value="overview">
  <ColumnsIcon weight="duotone" className="mr-(--lsd-spacing-smaller)" />
  Overview
</TabsTrigger>
```

## Icon Sizing

```tsx
// Small icon (16px)
<PlusIcon size={16} />

// Default/medium icon (24px)
<ShareIcon weight="duotone" />

// Large icon (32px)
<InfoIcon weight="duotone" size={32} />

// Extra large icon (48px)
<FolderOpenIcon weight="duotone" size={48} />
```

## Icon Colors

Icons inherit text color by default:

```tsx
// Inherits text-primary
<PlusIcon />
<Button><PlusIcon /></Button>

// Inherits text-destructive
<TrashIcon weight="duotone" className="text-destructive" />

// Custom color
<ShareIcon weight="duotone" className="text-primary" />

// Hover effect
<Button>
  <CheckIcon className="text-primary hover:text-destructive" />
</Button>

// With CSS class
<InfoIcon weight="duotone" className="text-primary opacity-50" />
```

## Icon Rotation

```tsx
// Rotate 90 degrees
<CaretRightIcon weight="duotone" className="rotate-90" />

// Rotate 180 degrees
<ArrowDownIcon weight="duotone" className="rotate-180" />
```

## Icon Reference Cards

### Default Weight (No prop)
```
CheckIcon       - Success, completed
PlusIcon        - Add, create new
```

### Duotone Weight (`weight="duotone"`)
```
ShareIcon       - Share, collaborate
TrashIcon       - Delete, remove
EditIcon        - Edit, modify
DownloadIcon    - Download, export
UploadIcon      - Upload, import
CopyIcon        - Copy, duplicate
CheckCircleIcon - Success, verified
WarningIcon     - Warning, alert
ErrorIcon       - Error, failure
InfoIcon        - Information, help
QuestionIcon    - Question, tooltip
```

## Important Notes

- **ALWAYS** use Phosphor icons from `@phosphor-icons/react`
- Use `weight="duotone"` for all icons except CheckIcon and PlusIcon
- Icons inherit text color, add `text-primary` or `text-destructive` if needed
- Use appropriate spacing with icons and text: `gap-(--lsd-spacing-smaller)`
- Icon-only buttons work well for toolbars and action menus
- Use size prop for non-standard icon sizes
- Consider accessibility - add `aria-label` to icon-only buttons
- Icons should be meaningful and follow common UI patterns
