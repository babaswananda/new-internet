# Unified AI I/O - The New Map of the New Internet

![Unified AI I/O Protocol](https://via.placeholder.com/1200x400/0a0a0a/ffffff?text=Unified+AI+I/O+Protocol)

<!-- Deployment trigger: Portal page updated -->

This project is a protocol-grade launchpad for the agent economy, featuring a comprehensive suite of tools, protocols, and economic models that power The New Internet.

## Core Protocol Elements

- **AgentOS**: The AI-Crypto Native operating system that powers, connects, and governs agents
- **Agent Dev Kit (ADK)**: Build logic like an Operator, deploy it like a god
- **Agent-to-Agent (A2A) Protocol**: The communication backbone of the agent economy
- **Model Context Protocol (MCP)**: One protocol, every model, unlimited possibilities
- **Parallel Processing**: Unlimited scale, uncompromising performance

## Development Tools

- **Vibe Coding IDE**: The future of agent development is visual
- **LibreChat Integration**: Powerful AI chat capabilities with tiered pricing plans

## Economic Model

- **Operator Economy**: Create, deploy, earn - the new AI economy
- **Marketplace**: Discover, buy, and sell agent components
- **Investment Offering**: Contributor tiers with various benefits and pricing
- **AI Made Me Rich**: Official protocol merch for those who minted upstream

## Project Structure

The project is organized into three main components:

1. **Frontend**: A Next.js 15.3.2 application with React 19, Framer Motion animations, and Spline 3D integration for interactive 3D elements
2. **Backend**: Odoo 17 CE for backend management and API services
3. **Chat**: LibreChat integration with tiered pricing plans starting at $9.99

### Frontend Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── page.tsx     # Main landing page
│   │   ├── chat/        # Chat redirect page
│   │   └── chat-ui/     # Chat UI demo
│   ├── components/
│   │   ├── layout/      # Layout components (MainLayout, etc.)
│   │   ├── sections/    # Page sections (HeroSection, AgentOSSection, etc.)
│   │   └── ui/          # UI components (FloatingActionButton, SplineBackground, etc.)
│   └── styles/          # Global styles
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

## Setup Instructions

### Prerequisites

- Docker and Docker Compose
- Node.js (v18+, recommended: v20+)
- npm (v9+)

### Frontend Setup (Next.js)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the frontend at http://localhost:3000

### Backend Setup (Odoo 17 CE)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Start the Odoo container:
   ```bash
   docker-compose up -d
   ```

3. Access Odoo at http://localhost:8069

4. During the initial setup:
   - Create a database
   - Install the "Unified AI I/O" module

### Chat Setup (LibreChat)

1. Navigate to the chat directory:
   ```bash
   cd chat
   ```

2. Edit the docker-compose.yml file to add your API keys for OpenAI, Anthropic, etc.

3. Start the LibreChat container:
   ```bash
   docker-compose up -d
   ```

4. Access LibreChat at http://localhost:3081 or through the /chat route on the frontend

## Development

### Frontend Development

The frontend is built with Next.js 15.3.2 and React 19, featuring:

- **App Router**: Modern Next.js architecture with server and client components
- **Framer Motion**: Advanced animations and micro-interactions for a premium UI experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **21st.dev Component Library**: Custom component library for building/styling the UI

To add new sections to the landing page:

1. Create a new section component in `frontend/src/components/sections/`
2. Import and add the component to `frontend/src/app/page.tsx`

### Spline 3D Integration

The frontend uses Spline 3D for interactive 3D elements as background layers for components/sections. To create or edit Spline scenes:

1. Sign up at https://spline.design
2. Create your 3D scenes
3. Export and get the scene URL
4. Update the `splineSceneUrl` variable in the respective component

### Odoo Module Development

The Odoo module is located in `backend/addons/unified_ai_io`. To modify:

1. Edit the Python files in the module
2. Restart the Odoo container to apply changes
3. Update the module in the Odoo interface

### LibreChat Customization

LibreChat is customized with a Unified AI theme and tiered pricing plans. To modify:

1. Edit the theme file in `chat/librechat-config/unified-ai-theme.json`
2. Update pricing plans in `chat/librechat-config/pricing-plans.json`
3. Restart the LibreChat container to apply changes

## Deployment

For production deployment:

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Set up proper environment variables for all components
3. Use a reverse proxy (like Nginx) to serve all components under a single domain:
   - Frontend: Port 3000
   - Backend (Odoo): Port 8069
   - Chat (LibreChat): Port 3081
4. Set up SSL certificates for secure connections
5. Configure proper database backups for Odoo and MongoDB

### Deployment Options

The project can be deployed to various platforms:

- **Vercel**: Ideal for the Next.js frontend
- **DigitalOcean**: Good for Docker-based deployments of all components
- **AWS**: For enterprise-scale deployments with high availability

## Features Roadmap

- **Explore Page**: Generative art and vibe coding projects with templates and marketplace functionality
- **Music Section**: Integration with music generation and audio processing capabilities
- **Mobile App**: Native mobile applications for iOS and Android
- **Enhanced A2A Protocol**: Additional security features and performance optimizations
- **Expanded Marketplace**: More templates, components, and agent types

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For support or inquiries, please contact support@unifiedai.io

---

Built with ❤️ by The New Internet Team
