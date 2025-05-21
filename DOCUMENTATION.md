# Unified AI I/O Protocol - Frontend Documentation

This document provides detailed information about the frontend components, architecture, and development guidelines for the Unified AI I/O Protocol landing page.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Structure](#component-structure)
3. [Section Components](#section-components)
4. [UI Components](#ui-components)
5. [Layout Components](#layout-components)
6. [Styling Guidelines](#styling-guidelines)
7. [Animation Guidelines](#animation-guidelines)
8. [Spline 3D Integration](#spline-3d-integration)
9. [Development Workflow](#development-workflow)
10. [Performance Optimization](#performance-optimization)

## Architecture Overview

The frontend is built with Next.js 15.3.2 and React 19, using the App Router architecture. This provides several benefits:

- **Server Components**: Improved performance and SEO
- **Client Components**: Interactive UI elements with React hooks
- **Hybrid Rendering**: Combination of static and dynamic content
- **Route Handlers**: API endpoints within the same codebase

The application follows a component-based architecture with a clear separation of concerns:

- **Layout Components**: Define the overall structure of the page
- **Section Components**: Represent distinct sections of the landing page
- **UI Components**: Reusable UI elements used across different sections

## Component Structure

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx         # Main landing page
│   ├── chat/            # Chat redirect page
│   └── chat-ui/         # Chat UI demo
├── components/
│   ├── layout/          # Layout components
│   │   └── MainLayout.tsx
│   ├── sections/        # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── WhatIsUnifiedAISection.tsx
│   │   ├── AgentOSSection.tsx
│   │   ├── ADKSection.tsx
│   │   ├── A2ASection.tsx
│   │   ├── MCPSection.tsx
│   │   ├── ParallelProcessingSection.tsx
│   │   ├── VibeCodingSection.tsx
│   │   ├── OperatorEconomySection.tsx
│   │   ├── MarketplaceSection.tsx
│   │   ├── InfrastructureSection.tsx
│   │   ├── VideoSection.tsx
│   │   ├── InvestmentOfferingSection.tsx
│   │   ├── LibreChatSection.tsx
│   │   ├── MerchSection.tsx
│   │   ├── MapSection.tsx
│   │   ├── ComingSoonSection.tsx
│   │   └── FinalCTASection.tsx
│   └── ui/              # UI components
│       ├── 21st/        # 21st.dev component library
│       ├── FloatingActionButton.tsx
│       └── SplineBackground.tsx
└── styles/              # Global styles
```

## Section Components

Each section component follows a consistent structure:

1. **Imports**: React, framer-motion, and other dependencies
2. **Component Definition**: React functional component with TypeScript typing
3. **Hooks**: useState, useEffect, useInView, etc.
4. **Animation Variants**: Framer Motion animation configurations
5. **Render Function**: JSX structure with motion components
6. **Export**: Default export of the component

Example structure:

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionName: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black grid-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section content */}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionName;
```

## UI Components

UI components are reusable elements used across different sections. Key UI components include:

### FloatingActionButton

A floating button that appears at the bottom right of the screen, providing quick navigation options.

### SplineBackground

A component that integrates Spline 3D scenes as background elements for sections.

### 21st.dev Component Library

A custom component library that provides styled UI elements following the design system.

## Layout Components

### MainLayout

The main layout component that wraps the entire application, providing:

- Header with navigation
- Footer with links and subscription form
- FloatingActionButton for quick navigation
- Global styling and layout structure

## Styling Guidelines

The project uses Tailwind CSS for styling with a consistent design system:

- **Colors**: Dark theme with gradients and accent colors
- **Typography**: Modern, clean typography with clear hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Animation Guidelines

Animations are implemented using Framer Motion with a focus on:

- **Scroll-triggered animations**: Elements animate as they enter the viewport
- **Micro-interactions**: Subtle animations on hover and click
- **Staggered animations**: Elements animate in sequence
- **Performance**: Optimized animations that don't impact performance

## Spline 3D Integration

Spline 3D is used for creating interactive 3D elements as background layers for sections:

1. Create 3D scenes in Spline (https://spline.design)
2. Export and get the scene URL
3. Use the SplineBackground component to integrate the scene
4. Set the splineSceneUrl variable in the component

## Development Workflow

1. **Create New Section**:
   - Create a new file in `src/components/sections/`
   - Follow the section component structure
   - Add animations using Framer Motion
   - Implement responsive design with Tailwind CSS

2. **Add to Main Page**:
   - Import the new section in `src/app/page.tsx`
   - Add the component to the JSX structure

3. **Testing**:
   - Test on different screen sizes
   - Verify animations work correctly
   - Check for performance issues

## Performance Optimization

- Use Next.js Image component for optimized images
- Lazy load components below the fold
- Optimize animations for performance
- Use proper caching strategies
- Implement code splitting for large components
