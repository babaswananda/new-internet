# UI Components Documentation

This document provides detailed information about the UI components used in the Unified AI I/O Protocol landing page.

## Table of Contents

1. [21st.dev Component Library](#21stdev-component-library)
2. [FloatingActionButton](#floatingactionbutton)
3. [SplineBackground](#splinebackground)
4. [Animation Utilities](#animation-utilities)

## 21st.dev Component Library

The 21st.dev component library provides a set of styled UI components that follow the design system of the Unified AI I/O Protocol.

### Components

#### Section

A container component for sections with consistent padding and styling.

```tsx
import { Section } from '@/components/ui/21st';

<Section>
  {/* Section content */}
</Section>
```

**Props**:
- `className`: Additional CSS classes
- `children`: React nodes
- `animate`: Whether to animate the section on scroll (default: true)

#### Text

Typography components with consistent styling.

```tsx
import { Text } from '@/components/ui/21st';

<Text.Heading>Heading Text</Text.Heading>
<Text.Subheading>Subheading Text</Text.Subheading>
<Text.Paragraph>Paragraph text</Text.Paragraph>
```

**Variants**:
- `Text.Heading`: Large heading text
- `Text.Subheading`: Subheading text
- `Text.Paragraph`: Regular paragraph text
- `Text.Caption`: Small caption text

#### Card

Card components for displaying content in a contained box.

```tsx
import { Card } from '@/components/ui/21st';

<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Content>
    Card content goes here
  </Card.Content>
</Card>
```

**Components**:
- `Card`: Main container
- `Card.Header`: Card header section
- `Card.Title`: Card title
- `Card.Content`: Card content area

#### Grid

Grid layout components for responsive layouts.

```tsx
import { Grid, GridItem } from '@/components/ui/21st';

<Grid columns={2}>
  <GridItem>First item</GridItem>
  <GridItem>Second item</GridItem>
</Grid>
```

**Props**:
- `columns`: Number of columns (default: 1)
- `gap`: Gap between items (default: 4)
- `className`: Additional CSS classes
- `children`: React nodes

## FloatingActionButton

A floating button that appears at the bottom right of the screen, providing quick navigation options.

### Usage

```tsx
import FloatingActionButton from '@/components/ui/FloatingActionButton';

<FloatingActionButton />
```

### Features

- Appears after scrolling down
- Expands to show multiple options on hover/click
- Smooth animations for opening and closing
- Customizable actions

### Props

- `actions`: Array of action objects with icon and onClick handler
- `position`: Position on the screen (default: 'bottom-right')
- `offset`: Distance from the edge of the screen (default: 4)
- `showAfterScroll`: Whether to show only after scrolling (default: true)
- `scrollThreshold`: Scroll distance before showing (default: 300)

### Implementation Details

The FloatingActionButton uses Framer Motion for animations and React hooks for scroll detection. It's implemented as a client component with the 'use client' directive.

## SplineBackground

A component that integrates Spline 3D scenes as background elements for sections.

### Usage

```tsx
import SplineBackground from '@/components/ui/SplineBackground';

<div className="relative">
  <SplineBackground sceneUrl="https://prod.spline.design/your-scene-id" />
  <div className="relative z-10">
    {/* Content that appears above the Spline scene */}
  </div>
</div>
```

### Props

- `sceneUrl`: URL of the Spline scene
- `className`: Additional CSS classes
- `opacity`: Opacity of the scene (default: 1)
- `interactive`: Whether the scene is interactive (default: true)
- `loadingComponent`: Custom loading component

### Implementation Details

The SplineBackground component uses the Spline viewer library to render 3D scenes. It handles loading states and provides a fallback when the scene is loading.

## Animation Utilities

### Motion Variants

Reusable Framer Motion animation variants for consistent animations across components.

```tsx
// Common animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  },
};
```

### useScrollAnimation Hook

A custom hook for triggering animations on scroll.

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const { ref, inView } = useScrollAnimation({
  threshold: 0.1,
  triggerOnce: false,
});

<motion.div
  ref={ref}
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
  {/* Animated content */}
</motion.div>
```

## Creating New UI Components

When creating new UI components:

1. Create a new file in `src/components/ui/`
2. Use the 'use client' directive if the component uses React hooks or browser APIs
3. Follow the existing component structure and styling patterns
4. Use Framer Motion for animations
5. Use Tailwind CSS for styling
6. Add TypeScript types for props
7. Export the component as the default export
8. Update this documentation with details about the new component
