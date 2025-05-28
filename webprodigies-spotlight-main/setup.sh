#!/bin/bash

echo "🚀 Setting up Unified AI Webinar Platform"
echo "========================================"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

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
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

print_status "Node.js version: $(node --version)"

# Install dependencies
print_status "Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully!"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    print_error ".env.local file not found!"
    print_warning "Please copy .env.example to .env.local and configure your API keys"
    exit 1
fi

# Generate Prisma client
print_status "Generating Prisma client..."
npx prisma generate

if [ $? -eq 0 ]; then
    print_success "Prisma client generated!"
else
    print_error "Failed to generate Prisma client"
    exit 1
fi

# Check if database is configured
print_status "Checking database configuration..."
if grep -q "YOUR_PASSWORD" .env.local; then
    print_warning "Database URL contains placeholder values"
    print_warning "Please update .env.local with your actual Supabase credentials"
else
    print_status "Pushing database schema..."
    npx prisma db push
    
    if [ $? -eq 0 ]; then
        print_success "Database schema pushed successfully!"
    else
        print_error "Failed to push database schema"
        print_warning "Please check your database connection and try again"
    fi
fi

echo ""
print_success "Setup complete! 🎉"
echo ""
echo "📋 Next steps:"
echo "  1. Update .env.local with your API keys (see SETUP_INSTRUCTIONS.md)"
echo "  2. Run: npm run dev"
echo "  3. Open: http://localhost:3003"
echo ""
print_status "For detailed setup instructions, see SETUP_INSTRUCTIONS.md"
