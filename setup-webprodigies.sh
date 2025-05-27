#!/bin/bash

echo "🚀 Setting up WebProdigies Platforms for Unified AI"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

echo ""
echo "🎥 Setting up Spotlight (Social.Webinar Platform)"
echo "================================================"

# Setup Spotlight
if [ -d "webprodigies-spotlight-main" ]; then
    print_status "Found Spotlight codebase, setting up..."
    cd webprodigies-spotlight-main
    
    # Install dependencies
    print_status "Installing Spotlight dependencies..."
    npm install
    
    # Check if .env exists
    if [ ! -f ".env" ]; then
        print_warning "Creating .env file for Spotlight..."
        cat > .env << EOL
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/spotlight_db"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

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
EOL
        print_warning "Please update the .env file with your actual API keys"
    fi
    
    cd ..
    print_success "Spotlight setup complete!"
else
    print_error "Spotlight codebase not found!"
fi

echo ""
echo "👥 Setting up Grouple (AIMadeMeRich Social Platform)"
echo "=================================================="

# Setup Grouple
if [ -d "webprodigies-grouple-main" ]; then
    print_status "Found Grouple codebase, setting up..."
    cd webprodigies-grouple-main
    
    # Install dependencies
    print_status "Installing Grouple dependencies..."
    npm install
    
    # Check if .env exists
    if [ ! -f ".env" ]; then
        print_warning "Creating .env file for Grouple..."
        cat > .env << EOL
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/grouple_db"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Stripe for payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3004"
EOL
        print_warning "Please update the .env file with your actual API keys"
    fi
    
    cd ..
    print_success "Grouple setup complete!"
else
    print_error "Grouple codebase not found!"
fi

echo ""
echo "🤖 Setting up Webinar AI"
echo "========================"

# Setup Webinar AI
if [ -d "webinar-ai-main" ]; then
    print_status "Found Webinar AI codebase, setting up..."
    cd webinar-ai-main
    
    # Install dependencies
    print_status "Installing Webinar AI dependencies..."
    npm install
    
    # Check if .env exists
    if [ ! -f ".env" ]; then
        print_warning "Creating .env file for Webinar AI..."
        cat > .env << EOL
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/webinar_ai_db"

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
NEXT_PUBLIC_APP_URL="http://localhost:3005"
EOL
        print_warning "Please update the .env file with your actual API keys"
    fi
    
    cd ..
    print_success "Webinar AI setup complete!"
else
    print_error "Webinar AI codebase not found!"
fi

echo ""
echo "📋 Setup Summary"
echo "================"
print_success "All WebProdigies platforms have been set up!"
echo ""
echo "🌐 Platform URLs (after starting):"
echo "  • Main Unified AI:     http://localhost:3002"
echo "  • Spotlight (Webinar): http://localhost:3003"
echo "  • Grouple (Social):    http://localhost:3004"
echo "  • Webinar AI:          http://localhost:3005"
echo ""
echo "🚀 To start the platforms:"
echo "  1. Start main app:      npm run dev (already running)"
echo "  2. Start Spotlight:     cd webprodigies-spotlight-main && npm run dev"
echo "  3. Start Grouple:       cd webprodigies-grouple-main && npm run dev"
echo "  4. Start Webinar AI:    cd webinar-ai-main && npm run dev"
echo ""
print_warning "Remember to:"
print_warning "  • Set up PostgreSQL databases for each platform"
print_warning "  • Update .env files with your actual API keys"
print_warning "  • Run database migrations: npx prisma migrate dev"
print_warning "  • Generate Prisma clients: npx prisma generate"
echo ""
print_success "Setup complete! 🎉"
