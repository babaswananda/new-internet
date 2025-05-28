'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { NavItem } from '@/types';
import { headerSlideDown } from '@/utils/animations';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useNavigationTranslation } from '@/hooks/useTranslation';

// Dynamically import DropdownNav to improve performance
const DropdownNav = dynamic(() => import('../ui/DropdownNav'), { ssr: false });

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { nav, isRTL } = useNavigationTranslation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems: NavItem[] = [
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
    { href: '/aimademerich', label: 'AIMadeMeRich', description: 'Viral feed showcase for AI success stories', color: 'text-yellow-400' },
    { href: '/learn-aimademerich', label: 'Learn.AIMadeMeRich', description: 'Protocol academy for operators', color: 'text-green-400' }
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
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              UNIFIED AI I/O
            </span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink href="/">{nav('home')}</NavLink>

          <DropdownNav
            label={nav('products')}
            items={productItems}
          />

          <DropdownNav
            label={nav('protocols')}
            items={protocolItems}
          />

          <NavLink href="/token-flow">{nav('tokenFlow')}</NavLink>

          <Link href="/ai-tokens">
            <motion.div
              className="text-purple-400 hover:text-pink-400 transition-colors tracking-wide uppercase text-sm relative group font-bold animate-pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {nav('ito')}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          </Link>

          <Link href="/friends-family">
            <motion.div
              className="text-orange-400 hover:text-orange-300 transition-colors tracking-wide uppercase text-sm relative group font-bold animate-pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🛡️ F&F ROUND
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          </Link>

          <DropdownNav
            label={nav('about')}
            items={companyItems}
          />

          {/* 🌍 SOVEREIGN LANGUAGE SWITCHER */}
          <LanguageSwitcher variant="header" />
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/claim">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-4 py-2 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
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
            <Link href="/token-flow" className="text-gray-300 hover:text-white py-2 transition-colors">Token Flow</Link>
            <Link href="/ai-tokens" className="text-purple-400 hover:text-pink-400 py-2 transition-colors font-bold animate-pulse">🪙 ITO</Link>
            <Link href="/friends-family" className="text-orange-400 hover:text-orange-300 py-2 transition-colors font-bold animate-pulse">🛡️ F&F ROUND</Link>
            {companyItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white py-2 transition-colors">
                {item.label}
              </Link>
            ))}
            <Link href="/claim" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
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
