'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
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
    // Get initial session
    const getInitialSession = async () => {
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

  // Show auth gate if not authenticated
  if (!user) {
    return (
      <AuthContext.Provider value={contextValue}>
        <SupabaseAuthGate />
      </AuthContext.Provider>
    );
  }

  // Show protected content if authenticated
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default SupabaseAuthProvider;
