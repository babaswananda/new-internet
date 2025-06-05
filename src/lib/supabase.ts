import { createClient } from '@supabase/supabase-js'

// Fallback values for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if we have real credentials
export const hasValidCredentials = () => {
  return supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key'
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helper functions
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const getSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

// Email signup for waitlist/portal access
export const addToWaitlist = async (email: string, source: string = 'portal') => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          source,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    return { data, error }
  } catch (error) {
    return { data: null, error }
  }
}

// Check if email is already in waitlist
export const checkWaitlistStatus = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .eq('email', email)
      .single()

    return { data, error }
  } catch (error) {
    return { data: null, error }
  }
}

// Add whitepaper access request
export const requestWhitepaperAccess = async (email: string, whitepaper: string) => {
  try {
    const { data, error } = await supabase
      .from('whitepaper_requests')
      .insert([
        {
          email,
          whitepaper,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    return { data, error }
  } catch (error) {
    return { data: null, error }
  }
}
