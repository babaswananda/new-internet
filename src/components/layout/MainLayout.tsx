'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import components to improve performance
const FloatingActionButton = dynamic(() => import('../ui/FloatingActionButton'), { ssr: false });
const FOMOTicker = dynamic(() => import('../ui/FOMOTicker'), { ssr: false });
const ScrollToTopButton = dynamic(() => import('../ui/ScrollToTopButton'), { ssr: false });
const DropdownNav = dynamic(() => import('../ui/DropdownNav'), { ssr: false });
const AIMadeMeRichIcon = dynamic(() => import('../ui/AIMadeMeRichIcon'), { ssr: false });

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // FAB action items - Comprehensive navigation
  const fabItems = [
    // Core Platform
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Home',
      href: '/',
      color: 'bg-gradient-to-r from-blue-500 to-purple-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: 'AgentChat',
      href: '/agentchat',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      label: 'AGENT OS',
      href: '/agentos',
      color: 'bg-gradient-to-r from-cyan-500 to-teal-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      label: 'AlphaRouter',
      href: '/alpharouter',
      color: 'bg-gradient-to-r from-pink-500 to-red-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      label: 'IO',
      href: '/io',
      color: 'bg-gradient-to-r from-pink-400 to-purple-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      label: 'ION',
      href: '/ion',
      color: 'bg-gradient-to-r from-red-500 to-orange-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      label: 'AI Directory',
      href: '/aidirectory',
      color: 'bg-gradient-to-r from-orange-500 to-yellow-500'
    },
    // Development Tools
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      label: 'VibeCoder',
      href: '/vibecoder',
      color: 'bg-gradient-to-r from-yellow-500 to-green-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      label: 'ADK',
      href: '/adk',
      color: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    // Hardware
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Hardware',
      href: '/preorder',
      color: 'bg-gradient-to-r from-teal-500 to-cyan-500'
    },
    // Identity & Claims
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      label: 'Claim Handle',
      href: '/claim',
      color: 'bg-gradient-to-r from-cyan-500 to-blue-500'
    },
    // Business
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: 'Partners',
      href: '/partners',
      color: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Investors',
      href: '/investors',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    // Support & Info
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'About',
      href: '/about',
      color: 'bg-gradient-to-r from-pink-500 to-red-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Contact',
      href: '/contact',
      color: 'bg-gradient-to-r from-red-500 to-orange-500'
    },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative text-white flex flex-col">
      {/* Base black background with lowest z-index */}
      <div className="absolute inset-0 bg-black -z-30"></div>
      {/* FOMO Ticker for investors */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <Suspense fallback={<div className="h-7 bg-black" />}>
          <FOMOTicker />
        </Suspense>
      </div>

      <motion.header
        className={`fixed top-7 left-0 right-0 z-50 ${scrolled ? 'bg-black/90' : 'bg-black/70'} backdrop-blur-sm transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
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

          <nav className="hidden md:flex space-x-6">
            <NavLink href="/">Home</NavLink>

            <DropdownNav
              label="Products"
              items={[
                { href: '/agentchat', label: 'AgentChat', description: 'AI-powered chat interface', color: 'text-blue-400' },
                { href: '/agentos', label: 'AGENT OS', description: 'Operating system for AI agents', color: 'text-cyan-400' },
                { href: '/alpharouter', label: 'AlphaRouter', description: 'Intelligent model routing', color: 'text-purple-400' },
                { href: '/io', label: 'IO', description: 'Your Intelligent Operator', color: 'text-pink-400' },
                { href: '/ion', label: 'ION', description: 'Intelligent Ontology Network', color: 'text-orange-400' },
                { href: '/aidirectory', label: 'AI Directory', description: 'Discover AI agents and tools', color: 'text-green-400' },
                { href: '/vibecoder', label: 'VibeCoder', description: 'AI-powered development', color: 'text-yellow-400' }
              ]}
            />

            <DropdownNav
              label="Protocols"
              items={[
                { href: '/textme', label: '.TextMe', description: 'Messaging protocol of the Agentic Internet', color: 'text-green-400' },
                { href: '/videochat', label: '.VideoChat', description: 'Face-to-face agent intelligence', color: 'text-blue-400' },
                { href: '/webinar', label: '.Webinar', description: 'Token-gated events and broadcasts', color: 'text-orange-400' },
                { href: '/learn-aimademerich', label: 'Learn.AIMadeMeRich', description: 'Protocol academy for operators', color: 'text-yellow-400' }
              ]}
            />

            <Link href="/ai-tokens">
              <motion.div
                className="text-purple-400 hover:text-pink-400 transition-colors tracking-wide uppercase text-sm relative group font-bold animate-pulse"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🪙 ITO
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.div>
            </Link>

            <DropdownNav
              label="Company"
              items={[
                { href: '/about', label: 'About', description: 'Our mission and vision', color: 'text-gray-300' },
                { href: '/partners', label: 'Partners', description: 'Strategic partnerships', color: 'text-gray-300' },
                { href: '/press', label: 'Press', description: 'Media resources and news', color: 'text-gray-300' },
                { href: '/investors', label: 'Investors', description: 'Investment information', color: 'text-gray-300' },
                { href: '/contact', label: 'Contact', description: 'Get in touch with us', color: 'text-gray-300' }
              ]}
            />
          </nav>

          <Link href="/claim">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-4 py-2 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              CLAIM YOUR HANDLE
            </motion.button>
          </Link>

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

        {/* Mobile menu - Only render when needed */}
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
                <Link href="/" className="text-gray-300 hover:text-white py-2 transition-colors">Home</Link>
                <Link href="/agentchat" className="text-gray-300 hover:text-white py-2 transition-colors">AgentChat</Link>
                <Link href="/agentos" className="text-gray-300 hover:text-white py-2 transition-colors">AGENT OS</Link>
                <Link href="/alpharouter" className="text-gray-300 hover:text-white py-2 transition-colors">AlphaRouter</Link>
                <Link href="/io" className="text-gray-300 hover:text-white py-2 transition-colors">IO</Link>
                <Link href="/ion" className="text-gray-300 hover:text-white py-2 transition-colors">ION</Link>
                <Link href="/aidirectory" className="text-gray-300 hover:text-white py-2 transition-colors">AI Directory</Link>
                <Link href="/textme" className="text-green-400 hover:text-green-300 py-2 transition-colors">.TextMe</Link>
                <Link href="/videochat" className="text-blue-400 hover:text-blue-300 py-2 transition-colors">.VideoChat</Link>
                <Link href="/webinar" className="text-orange-400 hover:text-orange-300 py-2 transition-colors">.Webinar</Link>
                <Link href="/learn-aimademerich" className="text-yellow-400 hover:text-yellow-300 py-2 transition-colors">Learn.AIMadeMeRich</Link>
                <Link href="/ai-tokens" className="text-purple-400 hover:text-pink-400 py-2 transition-colors font-bold animate-pulse">🪙 ITO</Link>
                <Link href="/vibecoder" className="text-gray-300 hover:text-white py-2 transition-colors">VibeCoder</Link>
                <Link href="/about" className="text-gray-300 hover:text-white py-2 transition-colors">About</Link>
                <Link href="/partners" className="text-gray-300 hover:text-white py-2 transition-colors">Partners</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white py-2 transition-colors">Contact</Link>
                <Link href="/press" className="text-gray-300 hover:text-white py-2 transition-colors">Press</Link>
                <Link href="/investors" className="text-gray-300 hover:text-white py-2 transition-colors">Investors</Link>
                <Link href="/claim" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-colors w-full"
                  >
                    CLAIM YOUR HANDLE
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <motion.footer
        className="bg-black border-t border-white/10 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">UNIFIED AI I/O</h3>
              <p className="text-gray-400">The New Map of the New Internet</p>
              <p className="text-gray-400 mt-2">Protocol-grade launchpad for the agent economy</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Core Products</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/agentchat" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-blue-400">→</span>
                    <span>AgentChat</span>
                  </Link>
                </li>
                <li>
                  <Link href="/agentos" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-cyan-400">→</span>
                    <span>AGENT OS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/alpharouter" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-purple-400">→</span>
                    <span>AlphaRouter</span>
                  </Link>
                </li>
                <li>
                  <Link href="/io" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-pink-400">→</span>
                    <span>IO</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ion" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-orange-400">→</span>
                    <span>ION</span>
                  </Link>
                </li>
                <li>
                  <Link href="/aidirectory" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-green-400">→</span>
                    <span>AI Directory</span>
                  </Link>
                </li>
                <li>
                  <Link href="/vibecoder" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-yellow-400">→</span>
                    <span>VibeCoder</span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Agentic Protocols</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/textme" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-green-400">→</span>
                    <span>.TextMe</span>
                  </Link>
                </li>
                <li>
                  <Link href="/videochat" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-blue-400">→</span>
                    <span>.VideoChat</span>
                  </Link>
                </li>
                <li>
                  <Link href="/webinar" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-orange-400">→</span>
                    <span>.Webinar</span>
                  </Link>
                </li>
                <li>
                  <Link href="/learn-aimademerich" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-yellow-400">→</span>
                    <span>Learn.AIMadeMeRich</span>
                  </Link>
                </li>
                <li>
                  <Link href="/preorder" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-orange-400">→</span>
                    <span>Pre-Order Hardware</span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-green-400">→</span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-green-400">→</span>
                    <span>Partners</span>
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-green-400">→</span>
                    <span>Press</span>
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-green-400">→</span>
                    <span>Investors</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-green-400">→</span>
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/claim" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-purple-400">→</span>
                    <span>Claim Handle</span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Subscribe to updates</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm w-full"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg text-sm"
                  >
                    Join
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
          >
            <p>&copy; {new Date().getFullYear()} Unified AI I/O. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Floating Action Button - IO Chat */}
      <Suspense fallback={null}>
        <FloatingActionButton
          items={fabItems}
          position="bottom-right"
          mainIcon={
            <div className="flex items-center justify-center">
              <span className="text-white font-bold text-lg">IO</span>
            </div>
          }
          mainColor="from-purple-500 to-pink-500"
        />
      </Suspense>

      {/* Scroll to Top Button */}
      <Suspense fallback={null}>
        <ScrollToTopButton />
      </Suspense>

      {/* AI Made Me Rich Icon */}
      <Suspense fallback={null}>
        <AIMadeMeRichIcon />
      </Suspense>
    </div>
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

export default MainLayout;
