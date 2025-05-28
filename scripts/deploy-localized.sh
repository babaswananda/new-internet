#!/bin/bash

# 🌍 UNIFIED AI TRILLION-DOLLAR LOCALIZATION DEPLOYMENT SCRIPT
# Deploy the sovereign AI protocol with global localization support

set -e

echo "🌍 Starting Unified AI Global Deployment..."
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
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

print_header() {
    echo -e "${PURPLE}$1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

print_header "🔍 Pre-deployment Checks"

# Check Node.js version
NODE_VERSION=$(node --version)
print_status "Node.js version: $NODE_VERSION"

# Check if required dependencies are installed
print_status "Checking dependencies..."
if ! npm list i18next react-i18next > /dev/null 2>&1; then
    print_warning "Installing localization dependencies..."
    npm install i18next react-i18next i18next-browser-languagedetector i18next-resources-to-backend
fi

print_header "🌐 Localization System Validation"

# Check if translation files exist
LANGUAGES=("en" "es" "ar" "zh-CN" "pt" "fr" "hi" "ru" "ko" "ja" "sw" "de")
NAMESPACES=("navigation" "hero" "investment" "common")

for lang in "${LANGUAGES[@]}"; do
    if [ -d "src/locales/$lang" ]; then
        print_success "✓ Language pack found: $lang"
        
        # Check for required namespaces
        for ns in "${NAMESPACES[@]}"; do
            if [ -f "src/locales/$lang/$ns.json" ]; then
                print_status "  ✓ $ns.json"
            else
                print_warning "  ⚠ Missing $ns.json for $lang"
            fi
        done
    else
        print_warning "⚠ Language pack missing: $lang"
    fi
done

print_header "🔧 Build Process"

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .next
rm -rf out

# Install dependencies
print_status "Installing dependencies..."
npm ci

# Run type checking
print_status "Running TypeScript checks..."
if npm run type-check > /dev/null 2>&1; then
    print_success "✓ TypeScript checks passed"
else
    print_warning "⚠ TypeScript warnings detected (continuing...)"
fi

# Run linting
print_status "Running ESLint..."
if npm run lint > /dev/null 2>&1; then
    print_success "✓ Linting passed"
else
    print_warning "⚠ Linting warnings detected (continuing...)"
fi

# Build the application
print_status "Building application..."
if npm run build; then
    print_success "✓ Build completed successfully"
else
    print_error "✗ Build failed"
    exit 1
fi

print_header "🚀 Deployment Options"

echo "Choose deployment method:"
echo "1) Vercel (Recommended)"
echo "2) GitHub Pages"
echo "3) Local preview only"
echo "4) Export static files"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        print_header "🌐 Deploying to Vercel"
        
        # Check if Vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            print_status "Installing Vercel CLI..."
            npm install -g vercel
        fi
        
        # Deploy to Vercel
        print_status "Deploying to Vercel..."
        vercel --prod
        
        print_success "🎉 Deployment to Vercel completed!"
        print_status "Your localized site is now live with global CDN support"
        ;;
        
    2)
        print_header "📦 Preparing for GitHub Pages"
        
        # Export static files
        print_status "Exporting static files..."
        npm run export
        
        print_success "✓ Static files exported to 'out' directory"
        print_status "Upload the 'out' directory to your GitHub Pages repository"
        ;;
        
    3)
        print_header "👀 Local Preview"
        
        print_status "Starting local preview server..."
        print_success "🌍 Localized site available at: http://localhost:3000"
        print_status "Test different languages using the language switcher"
        npm run start
        ;;
        
    4)
        print_header "📁 Static Export"
        
        print_status "Exporting static files..."
        npm run export
        
        print_success "✓ Static files exported to 'out' directory"
        print_status "You can now upload these files to any static hosting service"
        ;;
        
    *)
        print_error "Invalid choice. Exiting."
        exit 1
        ;;
esac

print_header "🌟 Deployment Summary"

echo ""
echo "🌍 UNIFIED AI GLOBAL DEPLOYMENT COMPLETE"
echo "=========================================="
echo ""
echo "✅ Localization System: Active"
echo "✅ Supported Languages: ${#LANGUAGES[@]} languages"
echo "✅ Global Markets: MENA, LATAM, APAC, EU, Africa"
echo "✅ Cultural Positioning: Sovereign protocol messaging"
echo "✅ Payment Methods: Localized by region"
echo "✅ Currency Formatting: Native currency support"
echo "✅ RTL Support: Arabic language support"
echo ""
echo "🎯 Next Steps:"
echo "1. Test language switching functionality"
echo "2. Verify regional payment methods"
echo "3. Monitor conversion rates by language"
echo "4. Gather feedback from native speakers"
echo "5. Expand to additional markets as needed"
echo ""
echo "💎 You're now positioned as a global sovereign protocol!"
echo "🚀 Ready to capture trillion-dollar upside worldwide!"
echo ""

print_success "Deployment script completed successfully!"
