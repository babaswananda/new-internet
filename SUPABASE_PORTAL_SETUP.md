# Supabase Portal Setup Guide

## 🚀 Quick Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the project to be ready

### 2. Set Up Database
1. Go to **SQL Editor** in your Supabase dashboard
2. Copy and paste the contents of `supabase-schema.sql`
3. Click **Run** to create the tables and policies

### 3. Get Your Credentials
1. Go to **Settings** → **API**
2. Copy your **Project URL**
3. Copy your **anon/public** key

### 4. Configure Environment Variables
Create or update your `.env.local` file:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Test the Connection
1. Restart your development server: `npm run dev`
2. Go to the portal page: `http://localhost:3000/portal`
3. Try signing up for the waitlist
4. Check your Supabase dashboard → **Table Editor** → **waitlist** to see the entry

## 📊 Database Tables

### `waitlist`
- Stores email signups from the portal
- Tracks the source of signup (portal, countdown, etc.)
- Prevents duplicate emails with UNIQUE constraint

### `whitepaper_requests`
- Stores whitepaper access requests
- Links email to specific whitepaper requested
- Tracks request status (pending, approved, etc.)

## 🔒 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Public insert policies** allow anonymous signups
- **Authenticated read policies** let users see their own data
- **Email validation** on the frontend
- **Error handling** for duplicate entries

## 🎯 Portal Features Now Connected

✅ **Waitlist Signup** - Main countdown email form
✅ **Whitepaper Requests** - Modal email forms for research access
✅ **Loading States** - Shows submission progress
✅ **Error Handling** - Graceful error messages
✅ **Success Feedback** - Confirmation messages
✅ **Duplicate Prevention** - Handles existing emails

## 📈 Next Steps

1. **Email Automation**: Set up email templates in Supabase Edge Functions
2. **Admin Dashboard**: Create admin interface to manage signups
3. **Analytics**: Track signup sources and conversion rates
4. **Whitepaper Delivery**: Automate whitepaper access via email

## 🛠️ Development Mode

If Supabase isn't configured, the portal will:
- Show a fallback success message
- Log attempts to console
- Continue working for UI testing
- Display setup instructions in the auth provider

## 🔧 Troubleshooting

**"Error submitting request"**
- Check your environment variables
- Verify Supabase project is active
- Check browser console for detailed errors

**"Duplicate email" errors**
- This is expected behavior
- Users will see a generic success message
- Check Supabase logs for actual error details

**Database connection issues**
- Verify your project URL and anon key
- Check if RLS policies are properly set
- Ensure tables exist in the database
