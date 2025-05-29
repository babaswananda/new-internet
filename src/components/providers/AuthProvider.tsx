'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import CinematicPreloader from '@/components/ui/CinematicPreloader';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const initializeAuth = async () => {
      // Don't protect the auth page itself
      if (pathname === '/auth') {
        setIsLoading(false);
        return;
      }

      // FORCE CLEAR ALL AUTH DATA FOR TESTING
      sessionStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('authEmail');
      sessionStorage.removeItem('hasSeenPreloader');

      // Set initial state
      setIsAuthenticated(false);

      // Check if this is homepage and should show preloader
      const isHomepage = pathname === '/';

      if (isHomepage) {
        // Show preloader on homepage
        setShowPreloader(true);
        setIsLoading(false);
      } else {
        // Redirect to auth for all other pages
        setIsLoading(false);
        setShouldRedirect(true);
      }
    };

    initializeAuth();
  }, [pathname]);

  const login = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('authEmail');
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  // Show loading state
  if (isLoading) {
    return (
      <AuthContext.Provider value={contextValue}>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </AuthContext.Provider>
    );
  }

  // Show preloader on homepage
  if (showPreloader) {
    return (
      <AuthContext.Provider value={contextValue}>
        <CinematicPreloader
          onComplete={() => {
            setShowPreloader(false);
            sessionStorage.setItem('hasSeenPreloader', 'true');
            // After preloader, redirect to auth
            setShouldRedirect(true);
          }}
          duration={2500}
        />
      </AuthContext.Provider>
    );
  }

  // Redirect to auth page if not authenticated
  if (shouldRedirect && pathname !== '/auth') {
    if (typeof window !== 'undefined') {
      window.location.href = '/auth';
    }
    return (
      <AuthContext.Provider value={contextValue}>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white">Redirecting to authentication...</div>
        </div>
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

export default AuthProvider;
