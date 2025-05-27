# Unified AI Social Platform (AIMadeMeRich)

Social platform for sharing AI success stories and building communities in the agentic internet.

## Features

- 📱 Social feed for success stories
- 👥 Community groups and discussions
- 🏆 Leaderboards and achievements
- 💰 Earnings showcases
- 🔐 Clerk authentication
- 💳 Stripe payments

## Powered by Unified AI

This platform is part of the Unified AI ecosystem, providing seamless integration with:
- Handle Registry for identity management
- AI Token economy for premium features
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
DATABASE_URL="postgresql://username:password@localhost:5432/unified_ai_social"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Stripe for payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3004"
```

## License

Powered by Unified AI - The protocol-grade launchpad for the agent economy.
