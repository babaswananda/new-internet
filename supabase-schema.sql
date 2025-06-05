-- Supabase Database Schema for Portal
-- Run this in your Supabase SQL Editor

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  source VARCHAR(100) DEFAULT 'portal',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create whitepaper_requests table
CREATE TABLE IF NOT EXISTS whitepaper_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  whitepaper VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_whitepaper_requests_email ON whitepaper_requests(email);
CREATE INDEX IF NOT EXISTS idx_whitepaper_requests_created_at ON whitepaper_requests(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE whitepaper_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (insert only)
CREATE POLICY "Allow public insert on waitlist" ON waitlist
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert on whitepaper_requests" ON whitepaper_requests
  FOR INSERT WITH CHECK (true);

-- Create policies for authenticated users to read their own data
CREATE POLICY "Users can read their own waitlist entries" ON waitlist
  FOR SELECT USING (auth.jwt() ->> 'email' = email);

CREATE POLICY "Users can read their own whitepaper requests" ON whitepaper_requests
  FOR SELECT USING (auth.jwt() ->> 'email' = email);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_waitlist_updated_at BEFORE UPDATE ON waitlist
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_whitepaper_requests_updated_at BEFORE UPDATE ON whitepaper_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
