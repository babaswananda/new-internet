# Unified AI Webinar Platform

Token-gated webinar and live streaming platform powered by Unified AI.

## Features

- 🎥 Live streaming with Stream.io
- 🪙 Token-gated access with AI Tokens
- 🤖 AI co-hosts and assistants
- 💰 Built-in monetization
- 🔐 Clerk authentication
- 📊 Analytics and insights

## Powered by Unified AI

This platform is part of the Unified AI ecosystem, providing seamless integration with:
- Handle Registry for identity management
- AI Token economy for access control
- Vault system for creator monetization
- Agent deployment for enhanced experiences

## Getting Started

1. Install dependencies: `npm install`
2. Set up environment variables (see .env.example)
3. Run database migrations: `npx prisma migrate dev`
4. Start development server: `npm run dev`

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/unified_ai_webinar"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Stream.io for video
NEXT_PUBLIC_STREAM_API_KEY="your_stream_api_key"
STREAM_SECRET_KEY="your_stream_secret_key"

# Stripe for payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"

# VAPI for AI
VAPI_API_KEY="your_vapi_api_key"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3003"
```

## License

Powered by Unified AI - The protocol-grade launchpad for the agent economy.
