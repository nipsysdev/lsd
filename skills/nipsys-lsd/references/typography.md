# LSD Typography System

Complete typography system for @nipsys/lsd with variants, sizing, and responsive behavior.

## Concept

Use the Typography component for all text elements in LSD components. The Typography component provides consistent variants for headings, subtitles, body text, and labels.

## Typography Variants

### Headings
```tsx
<Typography variant="h1">    // Page titles (largest)
<Typography variant="h2">    // Section titles
<Typography variant="h3">    // Subsection titles
<Typography variant="h4">    // Card titles
<Typography variant="h5">    // Small headings
```

### Subtitles
```tsx
<Typography variant="subtitle1">  // Primary subtitle
<Typography variant="subtitle2">  // Secondary subtitle
```

### Body Text
```tsx
<Typography variant="body1">  // Main content text (default)
<Typography variant="body2">  // Smaller text, metadata, captions
```

### Labels
```tsx
<Typography variant="label1">  // Form labels, inline labels
<Typography variant="label2">  // Small labels, helper text
```

## Usage Patterns

### Page Structure
```tsx
// Page title
<PageHeader title="Dashboard" description="Overview" />
// Internally uses h1 and subtitle1

// Section heading
<PageSection title="Recent Activity">
  <Typography variant="body1">Content here...</Typography>
</PageSection>
// Internally uses h2
```

### Card Content
```tsx
<Card>
  <CardHeader>
    <CardTitle>  // Uses h4 internally
      <Typography variant="h4">Card Title</Typography>
    </CardTitle>
    <CardDescription>  // Uses body2 internally
      <Typography variant="body2">Card description</Typography>
    </CardDescription>
  </CardHeader>
  <CardContent>
    <Typography variant="body1">Main content</Typography>
  </CardContent>
</Card>
```

### Form Labels
```tsx
<Field name="email">
  <Typography variant="label1">Email Address</Typography>
  <Input type="email" />
</Field>
```

### Alert Messages
```tsx
<Alert>
  <InfoIcon />
  <AlertDescription>
    <Typography variant="body2">
      Your changes have been saved successfully
    </Typography>
  </AlertDescription>
</Alert>
```

### Metadata and Captions
```tsx
<div className="flex items-center gap-(--lsd-spacing-smaller)">
  <Avatar />
  <div>
    <Typography variant="body1">John Doe</Typography>
    <Typography variant="body2">john@example.com</Typography>
  </div>
</div>
```

## Typography Hierarchy

### Document Structure
```
h1       → Page titles (PageHeader)
h2       → Section titles (PageSection)
h3       → Subsection titles
h4       → Card titles (CardTitle)
h5       → Small headings, group titles
subtitle1 → Subtitles, descriptions
body1    → Main content (default)
body2    → Secondary text, metadata
label1   → Form labels, inline labels
label2   → Small labels, helper text
```

### Visual Hierarchy Example
```tsx
<div className="flex flex-col gap-(--lsd-spacing-base)">
  <Typography variant="h3">Recent Activity</Typography>
  <Typography variant="body1">
    Here's what's been happening in your workspace.
  </Typography>

  <div className="space-y-(--lsd-spacing-base)">
    <div>
      <Typography variant="h5">Document A</Typography>
      <Typography variant="body2">Updated 2 hours ago</Typography>
    </div>

    <div>
      <Typography variant="h5">Document B</Typography>
      <Typography variant="body2">Updated yesterday</Typography>
    </div>
  </div>
</div>
```

## Common Patterns

### Button with Text
```tsx
<Button>
  <PlusIcon className="mr-(--lsd-spacing-smaller)" />
  <Typography variant="body1">Add Item</Typography>
</Button>
```

### Tooltip Content
```tsx
<Tooltip content={<Typography variant="body2">Learn more</Typography>}>
  <Button><InfoIcon /></Button>
</Tooltip>
```

### Table Cell Content
```tsx
<TableCell>
  <Typography variant="body1">John Doe</Typography>
</TableCell>
<TableCell>
  <Typography variant="body2">john@example.com</Typography>
</TableCell>
```

### Dialog Content
```tsx
<Dialog>
  <DialogContent>
    <DialogTitle>
      <Typography variant="h4">Confirm Action</Typography>
    </DialogTitle>
    <DialogDescription>
      <Typography variant="body2">
        Are you sure you want to proceed?
      </Typography>
    </DialogDescription>
  </DialogContent>
</Dialog>
```

### Empty State
```tsx
<div className="flex flex-col items-center gap-(--lsd-spacing-base)">
  <FolderOpenIcon className="text-primary" size={48} />
  <Typography variant="h4">No items found</Typography>
  <Typography variant="body2">
    Try adjusting your search or filters
  </Typography>
</div>
```

## Typography with Modifiers

### Inline Text
```tsx
<Typography variant="body1">
  This is <strong>bold</strong> and <em>italic</em> text.
</Typography>
```

### Truncation
```tsx
<Typography variant="body1" className="truncate">
  This text will be truncated if it's too long...
</Typography>
```

### Line Numbers
```tsx
<Typography variant="body2" className="line-clamp-2">
  This text will be limited to 2 lines with ellipsis.
</Typography>
```

## Typography Reference Cards

### Heading Variants
```
h1       → Page titles (PageHeader)
h2       → Section titles (PageSection)
h3       → Subsection titles
h4       → Card titles
h5       → Small headings
```

### Body Variants
```
subtitle1 → Primary subtitle
subtitle2 → Secondary subtitle
body1     → Main content (default)
body2     → Smaller text, metadata
```

### Label Variants
```
label1    → Form labels, inline labels
label2    → Small labels, helper text
```

## Important Notes

- **ALWAYS** use the Typography component for text (don't use raw `h1`, `p`, `span` tags directly)
- PageHeader and PageSection components internally use h1/h2
- CardTitle and CardDescription internally use h4/body2
- body1 is the default for main content text
- body2 is for metadata, captions, and secondary information
- label1 and label2 are for form labels and helper text
- Typography variants automatically scale with the LSD design system
- Headings include semantic HTML elements (`h1`-`h5`)
- All text uses `text-primary` color by default (see colors.md)
