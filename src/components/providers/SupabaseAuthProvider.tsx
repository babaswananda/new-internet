'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, hasValidCredentials } from '@/lib/supabase';
import SupabaseAuthGate from '@/components/auth/SupabaseAuthGate';
import CinematicPreloader from '@/components/ui/CinematicPreloader';
import { usePathname } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a SupabaseAuthProvider');
  }
  return context;
};

interface SupabaseAuthProviderProps {
  children: React.ReactNode;
}

const SupabaseAuthProvider: React.FC<SupabaseAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if Supabase is properly configured
    if (!hasValidCredentials()) {
      console.warn('Supabase credentials not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
      setLoading(false);
      return;
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        setUser(session?.user ?? null);

        // Show preloader only on homepage first visit
        const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
        const isHomepage = pathname === '/';

        if (!hasSeenPreloader && isHomepage) {
          setShowPreloader(true);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error getting session:', error);
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [pathname]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const contextValue: AuthContextType = {
    user,
    session,
    loading,
    signOut: handleSignOut,
  };

  // Show preloader on homepage first visit
  if (showPreloader) {
    return (
      <AuthContext.Provider value={contextValue}>
        <CinematicPreloader
          onComplete={() => {
            setShowPreloader(false);
            sessionStorage.setItem('hasSeenPreloader', 'true');
          }}
          duration={2500}
        />
      </AuthContext.Provider>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <AuthContext.Provider value={contextValue}>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </AuthContext.Provider>
    );
  }

  // Show setup screen if Supabase is not configured
  if (!hasValidCredentials()) {
    return (
      <AuthContext.Provider value={contextValue}>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="max-w-2xl mx-auto p-8 text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                  🔧 Supabase Setup Required
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-6">
                To enable authentication, please configure your Supabase credentials.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 text-left mb-6">
              <h3 className="text-xl font-bold text-white mb-4">📋 Setup Instructions:</h3>
              <ol className="text-gray-300 space-y-3">
                <li>1. Create a project at <a href="https://supabase.com" target="_blank" className="text-cyan-400 hover:underline">supabase.com</a></li>
                <li>2. Get your Project URL and Anon Key from Settings → API</li>
                <li>3. Update your <code className="bg-black/50 px-2 py-1 rounded">.env.local</code> file:</li>
              </ol>

              <div className="bg-black/50 rounded-lg p-4 mt-4 font-mono text-sm">
                <div className="text-green-400"># .env.local</div>
                <div className="text-gray-300">NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co</div>
                <div className="text-gray-300">NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here</div>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              See <code>SUPABASE_SETUP.md</code> for detailed instructions
            </div>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }

  // Show content without authentication requirement
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default SupabaseAuthProvider;
