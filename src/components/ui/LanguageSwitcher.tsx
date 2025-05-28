'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { languages, Language, getCurrentMarket } from '@/lib/i18n';

// 🌍 FLAG EMOJIS FOR SOVEREIGN VISUAL IDENTITY
const flagEmojis: Record<Language, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  ar: '🇦🇪',
  'zh-CN': '🇨🇳',
  pt: '🇧🇷',
  fr: '🇫🇷',
  hi: '🇮🇳',
  ru: '🇷🇺',
  ko: '🇰🇷',
  ja: '🇯🇵',
  sw: '🇰🇪',
  de: '🇩🇪',
};

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'header' | 'footer' | 'floating';
}

export default function LanguageSwitcher({ 
  className = '', 
  variant = 'header' 
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('en');

  useEffect(() => {
    setCurrentLang(i18n.language as Language);
  }, [i18n.language]);

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setIsOpen(false);
    
    // Store in localStorage for persistence
    localStorage.setItem('unified-ai-language', lang);
    
    // Optional: Track language changes for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'language_change', {
        language: lang,
        region: getCurrentMarket(lang).region,
      });
    }
  };

  const currentMarket = getCurrentMarket(currentLang);
  
  const baseStyles = "relative inline-block text-left";
  const variantStyles = {
    header: "text-white",
    footer: "text-gray-300",
    floating: "bg-black/80 backdrop-blur-sm rounded-lg p-2"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{flagEmojis[currentLang]}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {languages[currentLang]}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-purple-500/20 rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="py-2">
                <div className="px-4 py-2 text-xs text-gray-400 uppercase tracking-wider border-b border-gray-700/50">
                  🌍 Global Protocol Access
                </div>
                
                {Object.entries(languages).map(([code, name]) => {
                  const lang = code as Language;
                  const market = getCurrentMarket(lang);
                  const isActive = currentLang === lang;
                  
                  return (
                    <motion.button
                      key={code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full px-4 py-3 text-left hover:bg-purple-500/20 transition-all duration-200 flex items-center justify-between group ${
                        isActive ? 'bg-purple-500/30 border-l-2 border-purple-400' : ''
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{flagEmojis[lang]}</span>
                        <div>
                          <div className={`font-medium ${isActive ? 'text-purple-300' : 'text-white'}`}>
                            {name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {market.region} • {market.tierName}
                          </div>
                        </div>
                      </div>
                      
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-purple-400 rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
                
                <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-700/50 mt-2">
                  💎 Sovereign Protocol • Global Capital Access
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
