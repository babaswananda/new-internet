# 🚀 Unified AI Platform Integration Guide

## **Overview**

This guide explains how to run the complete Unified AI ecosystem with all integrated platforms.

## **🌐 Platform Architecture**

### **Main Unified AI Platform** (Port 3002)
- **URL**: http://localhost:3002
- **Purpose**: Main website and protocol showcase
- **Features**: Handle registry, AI tokens, protocol information
- **Status**: ✅ Running

### **Webinar Platform** (Port 3003)
- **URL**: http://localhost:3003
- **Purpose**: Token-gated webinars and live streaming
- **Features**: Stream.io integration, AI co-hosts, monetization
- **Codebase**: `webprodigies-spotlight-main` (rebranded)
- **Status**: 🔧 Ready to launch

### **Social Platform** (Port 3004)
- **URL**: http://localhost:3004
- **Purpose**: AIMadeMeRich social feed and communities
- **Features**: Success stories, leaderboards, social features
- **Codebase**: `webprodigies-grouple-main` (rebranded)
- **Status**: 🔧 Ready to launch

### **Enhanced Webinar AI** (Port 3005)
- **URL**: http://localhost:3005
- **Purpose**: Advanced AI-powered webinar features
- **Features**: Enhanced AI capabilities, advanced analytics
- **Codebase**: `webinar-ai-main` (rebranded)
- **Status**: 🔧 Ready to launch

## **🚀 Quick Start**

### **1. Start Main Platform** (Already Running)
```bash
# Main Unified AI platform
npm run dev
# Runs on http://localhost:3002
```

### **2. Start Webinar Platform**
```bash
# Terminal 2
cd webprodigies-spotlight-main
npm install
npm run dev
# Runs on http://localhost:3003
```

### **3. Start Social Platform**
```bash
# Terminal 3
cd webprodigies-grouple-main
npm install
npm run dev
# Runs on http://localhost:3004
```

### **4. Start Enhanced Webinar AI**
```bash
# Terminal 4
cd webinar-ai-main
npm install
npm run dev
# Runs on http://localhost:3005
```

## **🔧 Environment Setup**

### **Required Services**
- **PostgreSQL**: Database for each platform
- **Clerk**: Authentication service
- **Stream.io**: Video streaming (webinar platforms)
- **Stripe**: Payment processing
- **VAPI**: AI voice features

### **Environment Variables**

Each platform needs its own `.env` file:

#### **Webinar Platform** (`webprodigies-spotlight-main/.env`)
```env
DATABASE_URL="postgresql://username:password@localhost:5432/unified_ai_webinar"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_key"
CLERK_SECRET_KEY="your_clerk_secret"
NEXT_PUBLIC_STREAM_API_KEY="your_stream_key"
STREAM_SECRET_KEY="your_stream_secret"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_key"
STRIPE_SECRET_KEY="your_stripe_secret"
VAPI_API_KEY="your_vapi_key"
NEXT_PUBLIC_APP_URL="http://localhost:3003"
```

#### **Social Platform** (`webprodigies-grouple-main/.env`)
```env
DATABASE_URL="postgresql://username:password@localhost:5432/unified_ai_social"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_key"
CLERK_SECRET_KEY="your_clerk_secret"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_key"
STRIPE_SECRET_KEY="your_stripe_secret"
NEXT_PUBLIC_APP_URL="http://localhost:3004"
```

## **🎨 Branding Status**

### **✅ Completed Rebranding**
- ✅ All WebProdigies references removed
- ✅ "Powered by Unified AI" branding added
- ✅ Package names updated
- ✅ README files rewritten
- ✅ Source code references updated
- ✅ Unified AI color scheme applied

### **🎯 Key Changes Made**
1. **Package Names**:
   - `webprodigies-spotlight` → `unified-ai-webinar`
   - `webprodigies-grouple` → `unified-ai-social`
   - `webinar-ai` → `unified-ai-webinar-enhanced`

2. **Branding Elements**:
   - All titles updated to "Unified AI [Platform]"
   - Descriptions emphasize protocol integration
   - "Powered by Unified AI" footers added
   - Purple/pink gradient color scheme

3. **Integration Points**:
   - Main platform links to sub-platforms
   - Consistent navigation and branding
   - Token economy integration ready
   - Handle registry connections prepared

## **🔗 Platform Integration**

### **Navigation Flow**
1. **Main Site** → Protocol overview and handle claiming
2. **Webinar Page** → Links to full webinar platform (port 3003)
3. **AIMadeMeRich Page** → Links to social platform (port 3004)
4. **Learn Academy** → Educational content and courses

### **Cross-Platform Features**
- **Shared Authentication**: Clerk integration across all platforms
- **Token Economy**: AI Tokens for premium features
- **Handle System**: Unified identity across platforms
- **Vault Integration**: Creator monetization tools

## **📊 Current Status**

### **✅ Completed**
- [x] Main platform running (port 3002)
- [x] Duplicate pages consolidated
- [x] WebProdigies branding removed
- [x] Unified AI branding applied
- [x] Navigation updated
- [x] Integration links added
- [x] LibreChat integration ready

### **🔧 Ready to Launch**
- [ ] Set up environment variables
- [ ] Start webinar platform (port 3003)
- [ ] Start social platform (port 3004)
- [ ] Start enhanced webinar AI (port 3005)
- [ ] Configure databases
- [ ] Test cross-platform integration

## **🎯 Next Steps**

1. **Environment Setup**: Configure API keys and databases
2. **Platform Launch**: Start all platforms simultaneously
3. **Integration Testing**: Verify cross-platform functionality
4. **Token Integration**: Connect AI Token economy
5. **Production Deployment**: Deploy to live environment

## **🚀 Launch Commands**

```bash
# Start all platforms (run in separate terminals)
npm run dev                                    # Main (3002)
cd webprodigies-spotlight-main && npm run dev # Webinar (3003)
cd webprodigies-grouple-main && npm run dev   # Social (3004)
cd webinar-ai-main && npm run dev             # Enhanced (3005)
```

## **🎉 Success!**

You now have a complete Unified AI ecosystem with:
- **Protocol-grade infrastructure**
- **Token-gated webinar platform**
- **Social success story platform**
- **AI-enhanced features**
- **Unified branding and navigation**

All platforms are **Powered by Unified AI** and ready for the agentic internet! 🔥
