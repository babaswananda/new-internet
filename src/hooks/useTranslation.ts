'use client';

import { useTranslation as useI18nTranslation } from 'react-i18next';
import { Language, getCurrentMarket, getCurrency, getTierName, getPaymentMethods } from '@/lib/i18n';

// 🌍 ENHANCED TRANSLATION HOOK FOR SOVEREIGN POSITIONING
export function useTranslation(namespace?: string) {
  const { t, i18n } = useI18nTranslation(namespace);
  
  const currentLanguage = i18n.language as Language;
  const currentMarket = getCurrentMarket(currentLanguage);
  
  return {
    t,
    i18n,
    language: currentLanguage,
    market: currentMarket,
    currency: getCurrency(currentLanguage),
    tierName: getTierName(currentLanguage),
    paymentMethods: getPaymentMethods(currentLanguage),
    isRTL: currentMarket.rtl,
    region: currentMarket.region,
    culturalTone: currentMarket.culturalTone,
    investorType: currentMarket.investorType,
    
    // Convenience methods for common translations
    nav: (key: string) => t(key, { ns: 'navigation' }),
    hero: (key: string) => t(key, { ns: 'hero' }),
    investment: (key: string) => t(key, { ns: 'investment' }),
    common: (key: string) => t(key, { ns: 'common' }),
    
    // Format currency amounts based on locale
    formatCurrency: (amount: number) => {
      const currency = getCurrency(currentLanguage);
      return new Intl.NumberFormat(currentLanguage, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    },
    
    // Format numbers with locale-specific separators
    formatNumber: (number: number) => {
      return new Intl.NumberFormat(currentLanguage).format(number);
    },
    
    // Get culturally appropriate greeting
    getGreeting: () => {
      const greetings = {
        en: 'Welcome',
        es: 'Bienvenido',
        ar: 'أهلاً وسهلاً',
        'zh-CN': '欢迎',
        pt: 'Bem-vindo',
        fr: 'Bienvenue',
        hi: 'स्वागत',
        ru: 'Добро пожаловать',
        ko: '환영합니다',
        ja: 'ようこそ',
        sw: 'Karibu',
        de: 'Willkommen',
      };
      return greetings[currentLanguage] || greetings.en;
    },
    
    // Get culturally appropriate call-to-action tone
    getCTATone: () => {
      const tones = {
        sovereign: 'Join the Protocol',
        community: 'Become Part of the Movement',
        technology: 'Access Advanced Features',
        institutional: 'Secure Your Position',
        precision: 'Execute Strategic Entry',
        opportunity: 'Capture the Opportunity'
      };
      return tones[currentMarket.culturalTone] || tones.sovereign;
    }
  };
}

// 🎯 SPECIALIZED HOOKS FOR DIFFERENT CONTEXTS

export function useInvestmentTranslation() {
  return useTranslation('investment');
}

export function useNavigationTranslation() {
  return useTranslation('navigation');
}

export function useHeroTranslation() {
  return useTranslation('hero');
}

export default useTranslation;
