# Contributing to The New Internet - Unified AI I/O Protocol

Thank you for your interest in contributing to the Unified AI I/O Protocol! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Project Structure](#project-structure)
5. [Coding Standards](#coding-standards)
6. [Submitting Changes](#submitting-changes)
7. [Review Process](#review-process)
8. [Documentation](#documentation)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to foster an inclusive and respectful community.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/the-new-internet.git
   cd the-new-internet
   ```

3. Add the original repository as a remote:
   ```bash
   git remote add upstream https://github.com/original-owner/the-new-internet.git
   ```

4. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes, following the [coding standards](#coding-standards)

3. Test your changes locally:
   ```bash
   npm run lint
   npm run test
   npm run build
   ```

4. Commit your changes with a descriptive commit message:
   ```bash
   git commit -m "Add feature: your feature description"
   ```

5. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a pull request from your fork to the original repository

## Project Structure

The project is organized into three main components:

1. **Frontend**: A Next.js application with React, Framer Motion, and Spline 3D
2. **Backend**: Odoo 17 CE for backend management
3. **Chat**: LibreChat integration

### Frontend Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # UI components
│   └── styles/          # Global styles
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

For more detailed information about the frontend structure, see [frontend/DOCUMENTATION.md](frontend/DOCUMENTATION.md).

## Coding Standards

### General Guidelines

- Write clean, readable, and maintainable code
- Follow the principle of DRY (Don't Repeat Yourself)
- Keep functions and components small and focused
- Use meaningful variable and function names
- Add comments for complex logic

### TypeScript

- Use TypeScript for all new code
- Define interfaces for props and state
- Use proper type annotations
- Avoid using `any` type

### React

- Use functional components with hooks
- Keep components small and focused
- Use the 'use client' directive for client components
- Follow the React component naming convention (PascalCase)
- Use proper prop types

### CSS/Styling

- Use Tailwind CSS for styling
- Follow the utility-first approach
- Use consistent spacing and sizing
- Ensure responsive design for all screen sizes

### Commits

- Write clear and descriptive commit messages
- Use the imperative mood in commit messages (e.g., "Add feature" not "Added feature")
- Reference issue numbers in commit messages when applicable

## Submitting Changes

1. Ensure your code follows the [coding standards](#coding-standards)
2. Update documentation if necessary
3. Add tests for new features
4. Make sure all tests pass
5. Create a pull request with a clear description of the changes

## Review Process

1. All pull requests will be reviewed by at least one maintainer
2. Feedback will be provided on the pull request
3. Changes may be requested before merging
4. Once approved, the pull request will be merged

## Documentation

- Update documentation for any new features or changes
- Document components in their respective documentation files
- Add JSDoc comments for functions and components
- Update README.md if necessary

### Documentation Files

- [README.md](README.md): Main project documentation
- [frontend/DOCUMENTATION.md](frontend/DOCUMENTATION.md): Frontend architecture and development guidelines
- [frontend/src/components/sections/SECTIONS.md](frontend/src/components/sections/SECTIONS.md): Section components documentation
- [frontend/src/components/ui/UI_COMPONENTS.md](frontend/src/components/ui/UI_COMPONENTS.md): UI components documentation

## Thank You!

Thank you for contributing to the Unified AI I/O Protocol! Your efforts help make this project better for everyone.

If you have any questions or need help, please reach out to the maintainers or open an issue on GitHub.
