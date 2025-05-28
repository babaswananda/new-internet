# 🚀 Unified AI Webinar Platform - Complete Setup Guide

## **🎯 Overview**
This is a fully functional webinar platform with Supabase database, Clerk authentication, Stream.io video, and Stripe payments - all rebranded with Unified AI styling.

## **📋 Prerequisites**
- Node.js 18+ installed
- Git installed
- Accounts needed: Supabase, Clerk, Stream.io, Stripe

## **🔧 Step 1: Database Setup (Supabase)**

### **Create Supabase Project**
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create new project
4. Choose region and set password
5. Wait for project to be ready

### **Get Database URL**
1. Go to Project Settings → Database
2. Copy the connection string
3. Replace `[YOUR-PASSWORD]` with your actual password

Example:
```
postgresql://postgres:your_password@db.abcdefghijklmnop.supabase.co:5432/postgres
```

## **🔐 Step 2: Authentication Setup (Clerk)**

### **Create Clerk Application**
1. Go to [clerk.com](https://clerk.com)
2. Create new application
3. Choose "Email" and "Password" as sign-in methods
4. Get your API keys from Dashboard

### **Configure Clerk**
- **Publishable Key**: `pk_test_...`
- **Secret Key**: `sk_test_...`

## **🎥 Step 3: Video Setup (Stream.io)**

### **Create Stream Account**
1. Go to [getstream.io](https://getstream.io)
2. Create account and new app
3. Get API Key and Secret from Dashboard

## **💳 Step 4: Payment Setup (Stripe)**

### **Create Stripe Account**
1. Go to [stripe.com](https://stripe.com)
2. Create account
3. Get test API keys from Dashboard → Developers → API Keys

## **⚙️ Step 5: Environment Configuration**

### **Update .env.local**
Replace the placeholder values in `.env.local`:

```env
# Supabase Database
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_YOUR_CLERK_PUBLISHABLE_KEY"
CLERK_SECRET_KEY="sk_test_YOUR_CLERK_SECRET_KEY"

# Stream.io Video
NEXT_PUBLIC_STREAM_API_KEY="YOUR_STREAM_API_KEY"
STREAM_SECRET_KEY="YOUR_STREAM_SECRET_KEY"

# Stripe Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_YOUR_STRIPE_PUBLISHABLE_KEY"
STRIPE_SECRET_KEY="sk_test_YOUR_STRIPE_SECRET_KEY"
```

## **🗄️ Step 6: Database Migration**

### **Install Dependencies**
```bash
npm install
```

### **Generate Prisma Client**
```bash
npx prisma generate
```

### **Push Database Schema**
```bash
npx prisma db push
```

### **Seed Database (Optional)**
```bash
npx prisma db seed
```

## **🚀 Step 7: Launch Platform**

### **Start Development Server**
```bash
npm run dev
```

The platform will be available at: **http://localhost:3003**

## **🔐 Step 8: Test Authentication**

### **Create Test Account**
1. Go to http://localhost:3003
2. Click "Get Started" or "Sign Up"
3. Create account with email/password
4. Verify email if required
5. Access dashboard

### **Test Features**
- ✅ **Sign Up/Sign In**: Create and access accounts
- ✅ **Dashboard**: View webinar management interface
- ✅ **Create Webinar**: Set up new events
- ✅ **Browse Webinars**: View available events
- ✅ **Live Streaming**: Host video events (requires Stream.io)
- ✅ **Payments**: Process transactions (requires Stripe)

## **🎨 Unified AI Features**

### **Visual Branding**
- ✅ **Particle Background**: Animated purple/pink particles
- ✅ **Unified AI Colors**: Purple (#8B5CF6) to Pink (#EC4899)
- ✅ **Professional Header**: Navigation with gradient logo
- ✅ **Complete Footer**: Links back to main Unified AI platform
- ✅ **Responsive Design**: Works on all devices

### **Platform Integration**
- ✅ **"Powered by Unified AI"**: Links to main platform
- ✅ **Consistent Branding**: Matches main site design
- ✅ **No WebProdigies References**: Completely rebranded

## **🔧 Troubleshooting**

### **Common Issues**

**Database Connection Error**:
- Check Supabase URL and password
- Ensure project is active
- Verify network connectivity

**Clerk Authentication Error**:
- Check API keys are correct
- Verify domain settings in Clerk dashboard
- Ensure environment variables are loaded

**Build Errors**:
- Run `npm install` to ensure dependencies
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild

## **🎯 Production Deployment**

### **Environment Variables**
- Replace all test keys with production keys
- Update `NEXT_PUBLIC_APP_URL` to production domain
- Configure production database

### **Deployment Platforms**
- **Vercel**: Automatic deployment from Git
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment with database

## **🎉 Success!**

You now have a fully functional, beautifully branded webinar platform with:
- ✅ **Complete Authentication**: User management with Clerk
- ✅ **Database**: PostgreSQL with Supabase
- ✅ **Live Video**: Stream.io integration
- ✅ **Payments**: Stripe processing
- ✅ **Unified AI Branding**: Professional design
- ✅ **Responsive UI**: Works on all devices

**Start creating token-gated webinars for the agentic internet!** 🎥🚀
