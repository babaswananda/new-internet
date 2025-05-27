'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const socialPlatforms = [
    { name: 'X', icon: '❌', handle: '@UnifiedAI', url: 'https://x.com/UnifiedAI' },
    { name: 'Discord', icon: '🎮', handle: 'UnifiedAI', url: 'https://discord.gg/UnifiedAI' },
    { name: 'GitHub', icon: '📚', handle: '@UnifiedAI', url: 'https://github.com/UnifiedAI' },
    { name: 'YouTube', icon: '📺', handle: '@UnifiedAI', url: 'https://youtube.com/@UnifiedAI' },
    { name: 'WhatsApp', icon: '💚', handle: 'UnifiedAI', url: 'https://wa.me/UnifiedAI' },
    { name: 'WeChat', icon: '🟢', handle: 'UnifiedAI', url: 'https://wechat.com/UnifiedAI' },
    { name: 'Telegram', icon: '✈️', handle: '@UnifiedAI', url: 'https://t.me/UnifiedAI' },
    { name: 'TikTok', icon: '🎵', handle: '@UnifiedAI', url: 'https://tiktok.com/@UnifiedAI' }
  ];

  const footerSections = [
    {
      title: 'Products',
      links: [
        { href: '/agentchat', label: 'AgentChat', color: 'text-blue-400' },
        { href: '/agentos', label: 'AGENT OS', color: 'text-cyan-400' },
        { href: '/alpharouter', label: 'AlphaRouter', color: 'text-purple-400' },
        { href: '/io', label: 'IO', color: 'text-pink-400' },
        { href: '/ion', label: 'ION', color: 'text-orange-400' },
        { href: '/aidirectory', label: 'AI Directory', color: 'text-green-400' },
        { href: '/vibecoder', label: 'VibeCoder', color: 'text-yellow-400' },
        { href: '/adk', label: 'ADK', color: 'text-teal-400' }
      ]
    },
    {
      title: 'Protocols',
      links: [
        { href: '/textme', label: '.TextMe', color: 'text-green-400' },
        { href: '/videochat', label: '.VideoChat', color: 'text-blue-400' },
        { href: '/webinar', label: '.Webinar', color: 'text-orange-400' },
        { href: '/aimademerich', label: 'AIMadeMeRich', color: 'text-yellow-400' },
        { href: '/learn-aimademerich', label: 'Learn.AIMadeMeRich', color: 'text-green-400' }
      ]
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About', color: 'text-gray-300' },
        { href: '/partners', label: 'Partners', color: 'text-gray-300' },
        { href: '/press', label: 'Press', color: 'text-gray-300' },
        { href: '/investors', label: 'Investors', color: 'text-gray-300' },
        { href: '/contact', label: 'Contact', color: 'text-gray-300' },
        { href: '/token-flow', label: 'Token Flow', color: 'text-blue-400' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '/handle-registry', label: 'Handle Registry', color: 'text-cyan-400' },
        { href: '/preorder', label: 'Hardware', color: 'text-red-400' },
        { href: '/merch-store', label: 'Merch Store', color: 'text-indigo-400' },
        { href: '/ai-tokens', label: '🪙 ITO', color: 'text-purple-400' }
      ]
    }
  ];

  return (
    <motion.footer
      className={`bg-black/90 backdrop-blur-sm border-t border-white/10 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link href="/">
              <motion.div
                className="text-2xl font-bold tracking-wider mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  UNIFIED AI I/O
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              The protocol-grade launchpad for the agent economy. Deploy IO, orchestrate agents, and own your digital sovereignty.
            </p>

            {/* Social Links */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {socialPlatforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={`${platform.name}: ${platform.handle}`}
                >
                  <span className="text-lg mb-1">{platform.icon}</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {platform.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={staggerItem}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`hover:text-white transition-colors flex items-center ${link.color}`}>
                      <span className="mr-2 text-gray-400">→</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400"
          variants={staggerItem}
        >
          <p>&copy; {new Date().getFullYear()} Unified AI I/O. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
