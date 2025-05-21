# Section Components Documentation

This document provides detailed information about each section component in the Unified AI I/O Protocol landing page.

## Table of Contents

1. [HeroSection](#herosection)
2. [WhatIsUnifiedAISection](#whatisunifiedaisection)
3. [AgentOSSection](#agentossection)
4. [ADKSection](#adksection)
5. [A2ASection](#a2asection)
6. [MCPSection](#mcpsection)
7. [ParallelProcessingSection](#parallelprocessingsection)
8. [VibeCodingSection](#vibecodingsection)
9. [OperatorEconomySection](#operatoreconomysection)
10. [MarketplaceSection](#marketplacesection)
11. [InfrastructureSection](#infrastructuresection)
12. [VideoSection](#videosection)
13. [InvestmentOfferingSection](#investmentofferingsection)
14. [LibreChatSection](#librechatsection)
15. [MerchSection](#merchsection)
16. [MapSection](#mapsection)
17. [ComingSoonSection](#comingsoonsection)
18. [FinalCTASection](#finalctasection)

## HeroSection

**Purpose**: Main introduction to the Unified AI I/O Protocol.

**Features**:
- Animated headline with gradient text
- Spline 3D background integration
- Call-to-action buttons
- Scroll indicator

**Animation**: Staggered fade-in and slide-up animations for text elements.

## WhatIsUnifiedAISection

**Purpose**: Explains what the Unified AI I/O Protocol is and its core value proposition.

**Features**:
- Comparison between what it is and isn't
- Key benefits and features
- Visual explanation of the protocol

**Animation**: Fade-in and slide-up animations triggered on scroll.

## AgentOSSection

**Purpose**: Details about the AI-Crypto Native operating system that powers, connects, and governs agents.

**Features**:
- Key capabilities of AgentOS
- Feature list with icons
- Visual representation of the operating system

**Animation**: Staggered animations for list items.

## ADKSection

**Purpose**: Information about the Agent Dev Kit for building and deploying agent logic.

**Features**:
- Overview of the ADK components
- Feature list with bullet points
- "Build logic like an Operator. Deploy it like a god." tagline

**Animation**: Fade-in and slide-up animations triggered on scroll.

## A2ASection

**Purpose**: Explains the Agent-to-Agent communication protocol.

**Features**:
- Secure communication features
- Protocol standards explanation
- Permissioned access details
- Cross-chain compatibility
- Composable workflows

**Animation**: Grid layout with staggered animations for feature cards.

## MCPSection

**Purpose**: Showcases the Multi-Chain Protocol capabilities.

**Features**:
- Supported blockchain networks
- Cross-chain identity system
- Asset bridging explanation
- Chain-agnostic execution
- Unified state management

**Animation**: Chain logos with hover animations and feature cards with staggered animations.

## ParallelProcessingSection

**Purpose**: Demonstrates the scalability and performance of the protocol.

**Features**:
- Performance metrics (concurrent agents, tasks per second, etc.)
- Distributed compute grid explanation
- Dynamic load balancing
- Fault tolerance
- Horizontal scaling

**Animation**: Animated metrics counters and grid visualization.

## VibeCodingSection

**Purpose**: Showcases the visual development environment for agent creation.

**Features**:
- Visual IDE preview
- Intuitive interface explanation
- Real-time collaboration features
- AI-assisted development
- Instant deployment capabilities

**Animation**: Interactive IDE visualization with floating UI elements.

## OperatorEconomySection

**Purpose**: Explains the economic model of the protocol.

**Features**:
- Agent ownership details
- Usage royalties explanation
- Composable logic licensing
- Compute provision rewards
- Tokenomics breakdown
- Operator tiers

**Animation**: Staggered animations for economy pillars and tokenomics data.

## MarketplaceSection

**Purpose**: Showcases the marketplace for agent components.

**Features**:
- Category filters
- Search functionality
- Marketplace items (templates, modules, agents, data)
- Pricing information
- Marketplace features (secure transactions, royalties, verification)

**Animation**: Grid layout with hover animations for marketplace items.

## InfrastructureSection

**Purpose**: Overview of the infrastructure layers that power the protocol.

**Features**:
- Infrastructure layers table
- Layer descriptions
- Visual representation of the stack

**Animation**: Table rows with staggered animations.

## VideoSection

**Purpose**: Provides video content showcasing the protocol in action.

**Features**:
- Main video player with play button
- Video features explanation
- Additional video thumbnails

**Animation**: Play button hover animation and video card hover effects.

## InvestmentOfferingSection

**Purpose**: Showcases the investment opportunities in the protocol.

**Features**:
- Contributor tiers
- Pricing information
- Benefits and unlocks
- Contribution window details

**Animation**: Table rows with staggered animations and tier cards with hover effects.

## LibreChatSection

**Purpose**: Demonstrates the LibreChat integration with tiered pricing plans.

**Features**:
- Chat interface demo
- Suggestion buttons
- Input area with attachments
- Feature buttons
- Pricing tiers (Basic, Pro, Enterprise)

**Animation**: Chat interface interactions and pricing tier hover effects.

## MerchSection

**Purpose**: Showcases the "AI Made Me Rich" merchandise.

**Features**:
- Product grid with images
- Product names and prices
- Add to cart buttons

**Animation**: Product card hover animations.

## MapSection

**Purpose**: Visualizes the "Map of the New Internet" concept.

**Features**:
- Interactive 3D map (placeholder for Spline integration)
- Node indicators for different protocol components
- Explanatory text

**Animation**: Map node hover animations and pulse effects.

## ComingSoonSection

**Purpose**: Promotes upcoming features like the Explore page for generative art.

**Features**:
- Email signup form
- Coming soon message
- Feature preview

**Animation**: Form submission animation and success message.

## FinalCTASection

**Purpose**: Final call-to-action to encourage users to join the protocol.

**Features**:
- Compelling headline
- "Don't miss out" messaging
- Primary CTA button
- Additional information about Agent Keys

**Animation**: Button hover and tap animations.

## Adding New Sections

To add a new section:

1. Create a new file in `src/components/sections/` following the naming convention `[Name]Section.tsx`
2. Copy the basic structure from an existing section
3. Customize the content, styling, and animations
4. Import and add the component to `src/app/page.tsx`
5. Update this documentation with details about the new section
