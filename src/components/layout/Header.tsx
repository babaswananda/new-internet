'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { NavItem } from '@/types';
import { headerSlideDown } from '@/utils/animations';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import LogoutButton from '@/components/auth/LogoutButton';
import { useNavigationTranslation } from '@/hooks/useTranslation';
import { useAuth } from '@/components/providers/SupabaseAuthProvider';

// Dynamically import DropdownNav to improve performance
const DropdownNav = dynamic(() => import('../ui/DropdownNav'), { ssr: false });

interface HeaderProps {
  className?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className = '', onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { nav } = useNavigationTranslation();
  const { user, signOut } = useAuth();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems: NavItem[] = [
    { href: '/ai-factory', label: 'AI Factory™', description: 'Build, automate, and scale with AI', color: 'text-orange-400' },
    { href: '/agentchat', label: 'AgentChat', description: 'AI-powered chat interface', color: 'text-blue-400' },
    { href: '/agentos', label: 'AGENT OS', description: 'Operating system for AI agents', color: 'text-cyan-400' },
    { href: '/ai-agents', label: 'AI Agents', description: 'Deploy & monetize AI agents', color: 'text-purple-400' },
    { href: '/alpharouter', label: 'AlphaRouter', description: 'Intelligent model routing', color: 'text-orange-400' },
    { href: '/io', label: 'IO', description: 'Your Intelligent Operator', color: 'text-pink-400' },
    { href: '/ion', label: 'ION', description: 'Intelligent Ontology Network', color: 'text-yellow-400' },
    { href: '/aidirectory', label: 'AI Directory', description: 'Discover AI agents and tools', color: 'text-green-400' },
    { href: '/vibecoder', label: 'VibeCoder', description: 'AI-powered development', color: 'text-lime-400' },
    { href: '/adk', label: 'ADK', description: 'Agent Development Kit', color: 'text-teal-400' },
    { href: '/handle-registry', label: 'Handle Registry', description: 'Protocol-native identity system', color: 'text-cyan-400' },
    { href: '/preorder', label: 'Hardware', description: 'Pre-order AI devices', color: 'text-red-400' },
    { href: '/merch-store', label: 'Merch Store', description: 'Official Unified AI merchandise', color: 'text-indigo-400' }
  ];

  const protocolItems: NavItem[] = [
    { href: '/textme', label: '.TextMe', description: 'Messaging protocol of the Agentic Internet', color: 'text-green-400' },
    { href: '/videochat', label: '.VideoChat', description: 'Face-to-face agent intelligence', color: 'text-blue-400' },
    { href: '/webinar', label: '.Webinar', description: 'Token-gated events and broadcasts', color: 'text-orange-400' },
    { href: '/aimademerich', label: 'AIMadeMeRich', description: 'Success stories & learning academy', color: 'text-yellow-400' }
  ];

  const companyItems: NavItem[] = [
    { href: '/about', label: 'About', description: 'Our mission and vision', color: 'text-gray-300' },
    { href: '/team', label: 'AI Team', description: 'Meet our AI-native executive team', color: 'text-purple-400' },
    { href: '/partners', label: 'Partners', description: 'Strategic partnerships', color: 'text-gray-300' },
    { href: '/press', label: 'Press', description: 'Media resources and news', color: 'text-gray-300' },
    { href: '/investors', label: 'Investors', description: 'Investment information', color: 'text-gray-300' },
    { href: '/contact', label: 'Contact', description: 'Get in touch with us', color: 'text-gray-300' }
  ];

  return (
    <motion.header
      className={`fixed top-7 left-0 right-0 z-50 ${scrolled ? 'bg-black/90' : 'bg-black/70'} backdrop-blur-sm transition-all duration-300 ${className}`}
      variants={headerSlideDown}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div
            className="text-xl font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              // Secret whitepaper access - triple click
              if (e.detail === 3) {
                e.preventDefault();
                localStorage.setItem('showWhitepaper', 'true');
                window.location.href = '/whitepaper';
              }
            }}
          >
            <span className="text-white">
              UNIFIED AI <span className="text-2xl">🤖</span>
            </span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink href="/">{nav('home')}</NavLink>

          <DropdownNav
            label={nav('products')}
            items={productItems}
            multiColumn={true}
            columns={3}
          />

          <DropdownNav
            label={nav('protocols')}
            items={protocolItems}
          />

          {user ? (
            <motion.button
              onClick={async () => {
                await signOut();
                onLogout?.();
              }}
              className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black px-4 py-2 rounded-lg font-bold tracking-wide uppercase text-sm relative group transition-all hover:shadow-lg hover:shadow-orange-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👋 SIGN OUT
            </motion.button>
          ) : (
            <Link href="/auth">
              <motion.div
                className="text-purple-400 hover:text-pink-400 transition-colors tracking-wide uppercase text-sm relative group font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔒 SIGN IN
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.div>
            </Link>
          )}

          <DropdownNav
            label={nav('about')}
            items={companyItems}
            multiColumn={true}
            columns={2}
          />

          <NavLink href="/blog">📰 RESEARCH</NavLink>

          <NavLink href="/models">🤖 MODELS</NavLink>

          <NavLink href="/documentation">📚 DOCS</NavLink>

          <NavLink href="/support">🛟 SUPPORT</NavLink>

          {/* 🌍 SOVEREIGN LANGUAGE SWITCHER */}
          <LanguageSwitcher variant="header" />
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/ai-tokens">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block px-3 py-2 text-gray-900 font-bold text-xs rounded-md border transition-all relative overflow-hidden group"
              style={{
                background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 15%, #d0d0d0 30%, #c8c8c8 45%, #b8b8b8 60%, #a8a8a8 75%, #989898 90%, #888888 100%)',
                borderColor: '#666666',
                boxShadow: `
                  inset 0 2px 4px rgba(255,255,255,0.9),
                  inset 0 -2px 4px rgba(0,0,0,0.2),
                  0 2px 8px rgba(0,0,0,0.15),
                  0 0 0 1px rgba(255,255,255,0.3)
                `,
                textShadow: '0 1px 1px rgba(255,255,255,0.8)'
              }}
            >
              <span className="relative z-10 flex items-center gap-1">
                <span className="text-xs">⚡</span>
                Get Powered by A.I.
              </span>

              {/* Stainless Steel Chip Pattern */}
              <div className="absolute inset-0 opacity-30">
                {/* Main chip border */}
                <div className="absolute inset-1 border border-gray-500/40 rounded-sm bg-gradient-to-br from-gray-300/20 to-gray-600/20"></div>

                {/* Corner connection points */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-gray-700 rounded-full shadow-inner"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-gray-700 rounded-full shadow-inner"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-700 rounded-full shadow-inner"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-gray-700 rounded-full shadow-inner"></div>

                {/* Circuit traces */}
                <div className="absolute top-2 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
                <div className="absolute bottom-2 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
                <div className="absolute left-2 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gray-600/50 to-transparent"></div>
                <div className="absolute right-2 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gray-600/50 to-transparent"></div>

                {/* Central processing unit indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-gray-400 to-gray-600 rounded-sm shadow-inner"></div>
                <div className="absolute bottom-2 left-2 right-2 h-px bg-gray-500/30"></div>
              </div>
              {/* Glowing edge effect on hover */}
              <div className="absolute -inset-0.5 rounded bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm -z-10"></div>
            </motion.button>
          </Link>
          <Link href="/claim">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block px-2 py-1 border border-white/20 rounded text-xs bg-white/5 hover:bg-white/10 transition-colors"
            >
              {nav('claimHandle').toUpperCase()}
            </motion.button>
          </Link>
        </div>

        <motion.button
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {/* Mobile menu items */}
            <Link href="/" className="text-gray-300 hover:text-white py-2 transition-colors">Home</Link>
            {productItems.map((item) => (
              <Link key={item.href} href={item.href} className={`${item.color} hover:opacity-80 py-2 transition-colors`}>
                {item.label}
              </Link>
            ))}
            {protocolItems.map((item) => (
              <Link key={item.href} href={item.href} className={`${item.color} hover:opacity-80 py-2 transition-colors`}>
                {item.label}
              </Link>
            ))}
            {user ? (
              <button
                onClick={async () => {
                  await signOut();
                  onLogout?.();
                }}
                className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black px-4 py-2 rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-orange-500/30 text-left"
              >
                👋 Sign Out
              </button>
            ) : (
              <Link href="/auth" className="text-purple-400 hover:text-pink-400 py-2 transition-colors font-bold">🔒 Sign In</Link>
            )}
            {companyItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white py-2 transition-colors">
                {item.label}
              </Link>
            ))}
            <Link href="/blog" className="text-orange-400 hover:text-orange-300 py-2 transition-colors">📰 Research</Link>
            <Link href="/models" className="text-cyan-400 hover:text-cyan-300 py-2 transition-colors">🤖 Models</Link>
            <Link href="/documentation" className="text-blue-400 hover:text-blue-300 py-2 transition-colors">📚 Documentation</Link>
            <Link href="/support" className="text-green-400 hover:text-green-300 py-2 transition-colors">🛟 Support</Link>
            <Link href="/ai-tokens" className="w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-3 py-2 text-gray-900 font-bold text-xs rounded-md border transition-all mb-2 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 15%, #d0d0d0 30%, #c8c8c8 45%, #b8b8b8 60%, #a8a8a8 75%, #989898 90%, #888888 100%)',
                  borderColor: '#666666',
                  boxShadow: `
                    inset 0 2px 4px rgba(255,255,255,0.9),
                    inset 0 -2px 4px rgba(0,0,0,0.2),
                    0 2px 8px rgba(0,0,0,0.15),
                    0 0 0 1px rgba(255,255,255,0.3)
                  `,
                  textShadow: '0 1px 1px rgba(255,255,255,0.8)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  <span className="text-xs">⚡</span>
                  Get Powered by A.I.
                </span>

                {/* Stainless Steel Chip Pattern - Mobile */}
                <div className="absolute inset-0 opacity-30">
                  {/* Main chip border */}
                  <div className="absolute inset-1 border border-gray-500/40 rounded-sm bg-gradient-to-br from-gray-300/20 to-gray-600/20"></div>

                  {/* Corner connection points */}
                  <div className="absolute top-1 left-1 w-1 h-1 bg-gray-700 rounded-full shadow-inner"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-gray-700 rounded-full shadow-inner"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-700 rounded-full shadow-inner"></div>
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-gray-700 rounded-full shadow-inner"></div>

                  {/* Circuit traces */}
                  <div className="absolute top-2 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
                  <div className="absolute left-2 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gray-600/50 to-transparent"></div>
                  <div className="absolute right-2 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gray-600/50 to-transparent"></div>

                  {/* Central processing unit indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-gray-400 to-gray-600 rounded-sm shadow-inner"></div>
                </div>
                {/* Glowing edge effect on hover */}
                <div className="absolute -inset-0.5 rounded bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm -z-10"></div>
              </motion.button>
            </Link>
            <Link href="/claim" className="w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-2 py-1 border border-white/20 rounded text-xs bg-white/5 hover:bg-white/10 transition-colors"
              >
                CLAIM YOUR HANDLE
              </motion.button>
            </Link>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <motion.div
        className="text-gray-300 hover:text-white transition-colors tracking-wide uppercase text-sm relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        <motion.div
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
          whileHover={{ width: '100%' }}
        />
      </motion.div>
    </Link>
  );
};

export default Header;
