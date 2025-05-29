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
  const [isLoading, setIsLoading] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't protect the auth page itself
    if (pathname === '/auth') {
      return;
    }

    // Check URL for force logout parameter
    const urlParams = new URLSearchParams(window.location.search);
    const forceLogout = urlParams.get('logout');

    if (forceLogout === 'true') {
      // Force logout and clear URL parameter
      sessionStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('authEmail');
      sessionStorage.removeItem('hasSeenPreloader'); // Also clear preloader flag
      setIsAuthenticated(false);
      setShouldRedirect(true);
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }

    // FORCE LOGOUT FOR TESTING - Always clear authentication and preloader
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('authEmail');
    sessionStorage.removeItem('hasSeenPreloader'); // Force preloader to show every time
    setIsAuthenticated(false);

    // Only show preloader on first visit in this session AND on homepage
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    const isHomepage = pathname === '/';

    if (!hasSeenPreloader && isHomepage) {
      setShowPreloader(true);
    } else {
      // If not authenticated and not showing preloader, redirect to auth
      setShouldRedirect(true);
    }
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

  // Show preloader only on homepage first visit
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
