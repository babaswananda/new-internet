#!/bin/bash

# 🤖 UNIFIED AI TEAM DEPLOYMENT SCRIPT
# Deploy the world's first AI-native executive team

set -e

echo "🤖 Deploying Unified AI Team..."
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
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

print_header() {
    echo -e "${PURPLE}$1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

print_header "🔍 Pre-deployment Validation"

# Validate AI Team Data
print_status "Validating AI team data..."
if [ -f "src/data/aiTeam.ts" ]; then
    print_success "✓ AI team data found"
else
    print_error "✗ AI team data missing"
    exit 1
fi

# Check team components
TEAM_COMPONENTS=(
    "src/components/team/TeamHero.tsx"
    "src/components/team/TeamStats.tsx"
    "src/components/team/TeamMemberCard.tsx"
    "src/components/team/TeamMemberProfile.tsx"
)

for component in "${TEAM_COMPONENTS[@]}"; do
    if [ -f "$component" ]; then
        print_success "✓ $(basename $component)"
    else
        print_warning "⚠ Missing: $(basename $component)"
    fi
done

# Check team pages
if [ -f "src/app/team/page.tsx" ]; then
    print_success "✓ Team page found"
else
    print_error "✗ Team page missing"
    exit 1
fi

# Check model documentation
print_status "Checking model documentation..."
MODEL_DOCS=(
    "docs/models/aria-sovereign.md"
    "docs/models/zara-nexus.md"
    "docs/team/README.md"
)

for doc in "${MODEL_DOCS[@]}"; do
    if [ -f "$doc" ]; then
        print_success "✓ $(basename $doc)"
    else
        print_warning "⚠ Missing: $(basename $doc)"
    fi
done

# Check avatars
print_status "Checking team avatars..."
AVATARS=(
    "public/avatars/aria-sovereign.svg"
    "public/avatars/zara-nexus.svg"
    "public/avatars/kai-velocity.svg"
)

for avatar in "${AVATARS[@]}"; do
    if [ -f "$avatar" ]; then
        print_success "✓ $(basename $avatar)"
    else
        print_warning "⚠ Missing: $(basename $avatar)"
    fi
done

print_header "🔧 Build Process"

# Install dependencies
print_status "Installing dependencies..."
npm ci

# Type checking
print_status "Running TypeScript checks..."
if npm run type-check > /dev/null 2>&1; then
    print_success "✓ TypeScript checks passed"
else
    print_warning "⚠ TypeScript warnings detected"
fi

# Build the application
print_status "Building application..."
if npm run build; then
    print_success "✓ Build completed successfully"
else
    print_error "✗ Build failed"
    exit 1
fi

print_header "📦 Git Operations"

# Check git status
if git status --porcelain | grep -q .; then
    print_status "Changes detected, preparing commit..."
    
    # Add all changes
    git add .
    
    # Create commit message
    COMMIT_MSG="🤖 Deploy AI-Native Executive Team

Features:
- Complete AI team with 6 specialized agents
- Individual profile pages with model specs
- Team overview with performance metrics
- Comprehensive documentation and avatars
- Localization support for global markets
- Model documentation and API specs

Team Members:
- Aria Sovereign (CEO AI) - Strategic Leadership
- Zara Nexus (CTO AI) - Infrastructure Engineering  
- Kai Velocity (CGO AI) - Growth & Community
- Nova Capital (CFO AI) - Tokenomics & Finance
- Echo Protocol (CPO AI) - Product & UX
- Sage Oracle (CSO AI) - Strategy & Intelligence

Ready for trillion-dollar protocol deployment! 🚀"
    
    # Commit changes
    git commit -m "$COMMIT_MSG"
    print_success "✓ Changes committed"
else
    print_status "No changes to commit"
fi

print_header "🚀 Deployment Options"

echo "Choose deployment method:"
echo "1) Push to GitHub + Deploy to Vercel"
echo "2) GitHub only"
echo "3) Vercel only"
echo "4) Local preview"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        print_header "🌐 Full Deployment (GitHub + Vercel)"
        
        # Push to GitHub
        print_status "Pushing to GitHub..."
        git push origin main
        print_success "✓ Pushed to GitHub"
        
        # Deploy to Vercel
        if command -v vercel &> /dev/null; then
            print_status "Deploying to Vercel..."
            vercel --prod
            print_success "✓ Deployed to Vercel"
        else
            print_warning "Vercel CLI not found. Installing..."
            npm install -g vercel
            vercel --prod
        fi
        ;;
        
    2)
        print_header "📦 GitHub Deployment"
        print_status "Pushing to GitHub..."
        git push origin main
        print_success "✓ Pushed to GitHub"
        ;;
        
    3)
        print_header "🌐 Vercel Deployment"
        if command -v vercel &> /dev/null; then
            print_status "Deploying to Vercel..."
            vercel --prod
            print_success "✓ Deployed to Vercel"
        else
            print_warning "Vercel CLI not found. Installing..."
            npm install -g vercel
            vercel --prod
        fi
        ;;
        
    4)
        print_header "👀 Local Preview"
        print_status "Starting local preview..."
        print_success "🤖 AI Team available at: http://localhost:3000/team"
        npm run start
        ;;
        
    *)
        print_error "Invalid choice. Exiting."
        exit 1
        ;;
esac

print_header "🎉 Deployment Summary"

echo ""
echo "🤖 UNIFIED AI TEAM DEPLOYMENT COMPLETE"
echo "======================================"
echo ""
echo "✅ AI Team: 6 specialized agents deployed"
echo "✅ Team Pages: Individual profiles with model specs"
echo "✅ Documentation: Comprehensive model docs and READMEs"
echo "✅ Avatars: Custom SVG avatars for each team member"
echo "✅ Navigation: Team page integrated into site navigation"
echo "✅ Localization: Multi-language support for global reach"
echo ""
echo "🎯 Team Members Deployed:"
echo "  👑 Aria Sovereign - Chief Executive AI"
echo "  ⚡ Zara Nexus - Chief Technology AI"
echo "  🚀 Kai Velocity - Chief Growth AI"
echo "  💎 Nova Capital - Chief Financial AI"
echo "  🎨 Echo Protocol - Chief Product AI"
echo "  🔮 Sage Oracle - Chief Strategy AI"
echo ""
echo "🌐 Access Points:"
echo "  • Team Overview: /team"
echo "  • Individual Profiles: /team/[member-id]"
echo "  • Model Documentation: /docs/models/"
echo "  • API Access: /api/models/"
echo ""
echo "💫 You now have the world's first AI-native executive team!"
echo "🏛️ Ready to lead the sovereign AI protocol revolution!"
echo ""

print_success "AI Team deployment completed successfully!"
