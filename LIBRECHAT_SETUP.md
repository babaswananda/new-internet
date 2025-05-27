# 🤖 LibreChat Integration Setup Guide

## **Current Status**

✅ **Frontend Integration Complete**
- LibreChatEmbed component created
- IO Chat Portal ready at `/io/chat`
- Fallback handling for offline state
- Unified AI theming applied

🔧 **LibreChat Server Setup Needed**

## **🚀 Quick LibreChat Setup**

### **Option 1: Docker Setup (Recommended)**

1. **Clone LibreChat**:
```bash
git clone https://github.com/danny-avila/LibreChat.git
cd LibreChat
```

2. **Create Environment File**:
```bash
cp .env.example .env
```

3. **Configure .env**:
```env
# Basic Configuration
HOST=localhost
PORT=3081
MONGO_URI=mongodb://127.0.0.1:27017/LibreChat

# OpenAI (Required)
OPENAI_API_KEY=your_openai_api_key

# Optional: Other AI Providers
ANTHROPIC_API_KEY=your_anthropic_key
GOOGLE_API_KEY=your_google_key

# Security
JWT_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here

# CORS for Unified AI integration
ALLOW_REGISTRATION=true
```

4. **Start with Docker**:
```bash
docker-compose up -d
```

5. **Access LibreChat**:
- URL: http://localhost:3081
- Create admin account
- Configure AI models

### **Option 2: Manual Setup**

1. **Install Dependencies**:
```bash
npm install
```

2. **Setup Database**:
```bash
# Install MongoDB locally or use MongoDB Atlas
# Update MONGO_URI in .env
```

3. **Start LibreChat**:
```bash
npm run dev
```

## **🔗 Integration with Unified AI**

### **Current Integration Features**

✅ **LibreChatEmbed Component**:
- Smart fallback when LibreChat is offline
- Real-time connection status
- Unified AI theming (purple/pink gradients)
- Responsive iframe integration

✅ **IO Chat Portal**:
- Dedicated chat interface at `/io/chat`
- "Intelligent Operator" branding
- Quick action buttons
- System capabilities overview

### **Integration Points**

1. **Main IO Page** (`/io`):
   - "ENTER IO PORTAL" button links to `/io/chat`
   - Protocol overview and capabilities

2. **IO Chat Portal** (`/io/chat`):
   - Full LibreChat integration
   - Unified AI branding
   - Fallback messaging when offline

3. **LibreChatEmbed Component**:
   - Reusable across the platform
   - Configurable height and theming
   - Status indicators and error handling

## **🎨 Unified AI Theming**

### **Applied Customizations**:
- **Header**: "Intelligent Operator" with IO logo
- **Colors**: Purple to pink gradients
- **Status**: Green online indicator
- **Fallback**: Helpful setup instructions
- **Border**: Gradient accent lines

### **Theme Configuration**:
```typescript
<LibreChatEmbed 
  height="70vh"
  showHeader={true}
  theme="unified-ai"
/>
```

## **🔧 Configuration Options**

### **LibreChat .env for Unified AI**:
```env
# Server Configuration
HOST=localhost
PORT=3081
MONGO_URI=mongodb://127.0.0.1:27017/LibreChat

# AI Providers
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_key

# Unified AI Integration
APP_TITLE="Unified AI - Intelligent Operator"
CUSTOM_FOOTER="Powered by Unified AI"

# CORS for iframe integration
ALLOW_REGISTRATION=true
DOMAIN_CLIENT=http://localhost:3002
DOMAIN_SERVER=http://localhost:3081

# Security
JWT_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here
```

## **🚀 Launch Sequence**

### **Complete Platform Launch**:

1. **Start Main Unified AI** (Terminal 1):
```bash
npm run dev  # Port 3002
```

2. **Start LibreChat** (Terminal 2):
```bash
cd LibreChat
docker-compose up -d  # Port 3081
```

3. **Start Webinar Platform** (Terminal 3):
```bash
cd webprodigies-spotlight-main
npm run dev  # Port 3001
```

4. **Start Social Platform** (Terminal 4):
```bash
cd webprodigies-grouple-main
npm run dev  # Port 3004
```

## **🌐 Access URLs**

- **Main Platform**: http://localhost:3002
- **IO Chat Portal**: http://localhost:3002/io/chat
- **LibreChat Direct**: http://localhost:3081
- **Webinar Platform**: http://localhost:3001
- **Social Platform**: http://localhost:3004

## **🔍 Testing Integration**

### **Test Checklist**:
- [ ] LibreChat server running on port 3081
- [ ] IO Chat Portal loads without errors
- [ ] Iframe integration working
- [ ] Fallback message shows when LibreChat offline
- [ ] Unified AI theming applied
- [ ] Status indicators functioning

### **Troubleshooting**:

**LibreChat Not Loading**:
1. Check if port 3081 is available
2. Verify Docker containers are running
3. Check .env configuration
4. Review LibreChat logs

**CORS Issues**:
1. Add DOMAIN_CLIENT to LibreChat .env
2. Configure CORS settings
3. Check browser console for errors

**Iframe Issues**:
1. Verify LibreChat allows iframe embedding
2. Check Content Security Policy
3. Test direct LibreChat access first

## **🎯 Next Steps**

1. **Setup LibreChat Server**: Follow Docker setup above
2. **Configure AI Models**: Add API keys for desired providers
3. **Test Integration**: Verify iframe loading and functionality
4. **Customize Branding**: Apply additional Unified AI theming
5. **Deploy Production**: Configure for production environment

## **🎉 Success!**

Once LibreChat is running, you'll have:
- ✅ Complete IO Chat Portal integration
- ✅ Unified AI branded chat interface
- ✅ Fallback handling for offline states
- ✅ Seamless iframe integration
- ✅ Professional chat experience

The Intelligent Operator is ready to serve the Agentic Internet! 🤖🚀
