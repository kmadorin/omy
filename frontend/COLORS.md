# OhMyYield Color System Guide

This guide explains how to use the color variables defined in our Tailwind CSS configuration.

## Color Palette

We've defined the following color variables for use throughout the application:

| Variable Name | Hex Value | Description |
|---------------|-----------|-------------|
| `navy`        | `#1A1E36` | Dark blue used for text, borders, and UI elements |
| `orange`      | `#FF7A00` | Primary orange used for backgrounds, buttons, and highlights |
| `cream`       | `#F2EFE1` | Off-white used for card backgrounds and secondary areas |
| `blue`        | `#6B9BFF` | Light blue used for buttons, badges, and highlights |
| `yellow`      | `#FFD23F` | Yellow used for highlights, badges, and UI elements |

## How to Use

### Before (using hardcoded hex values):

```jsx
<div className="bg-[#6B9BFF] text-[#1A1E36] border-2 border-[#1A1E36]">
  Content
</div>
```

### After (using color variables):

```jsx
<div className="bg-blue text-navy border-2 border-navy">
  Content
</div>
```

## Opacity Variants

You can also use opacity variants with these colors:

```jsx
<div className="bg-orange/90">90% opacity orange background</div>
<div className="text-navy/70">70% opacity navy text</div>
```

## Benefits of Using Color Variables

1. **Consistency**: Ensures consistent colors throughout the application
2. **Maintainability**: Makes it easier to update colors in one place
3. **Readability**: More semantic and readable class names
4. **Conciseness**: Shorter class names than hardcoded hex values

## Examples

### Buttons

```jsx
// Primary Button
<Button className="bg-orange hover:bg-orange/90 text-navy border-2 border-navy font-bold retro-shadow">
  Primary Button
</Button>

// Secondary Button
<Button className="bg-blue hover:bg-blue/90 text-navy border-2 border-navy font-bold retro-shadow">
  Secondary Button
</Button>

// Tertiary Button
<Button className="bg-cream hover:bg-cream/90 text-navy border-2 border-navy font-bold retro-shadow">
  Tertiary Button
</Button>
```

### Cards

```jsx
<div className="bg-cream rounded-xl border-2 border-navy p-6 retro-shadow">
  <h3 className="font-bold text-navy">Card Title</h3>
  <p className="text-navy/70">Card content with lower opacity text</p>
</div>
```

### Backgrounds

```jsx
<div className="bg-orange min-h-screen">
  <div className="container mx-auto py-8">
    <div className="bg-cream rounded-xl border-2 border-navy p-8 retro-shadow">
      Content
    </div>
  </div>
</div>
```

## Migration

When updating existing components, replace hex color codes with the corresponding color variables:

- `[#1A1E36]` → `navy`
- `[#FF7A00]` → `orange`
- `[#F2EFE1]` → `cream`
- `[#6B9BFF]` → `blue`
- `[#FFD23F]` → `yellow`

For opacity variants, replace `[#1A1E36]/60` with `navy/60`, etc. 