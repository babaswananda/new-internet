import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

// 🌍 UNIFIED AI TRILLION-DOLLAR LOCALIZATION PROTOCOL
// Strategic languages for global capital capture and sovereign positioning

export const languages = {
  en: 'English',
  es: 'Español', // LatAm + Spain - explosive crypto growth
  ar: 'العربية', // MENA oil money + sovereign wealth
  'zh-CN': '中文 (简体)', // China + Singapore tech capital
  pt: 'Português', // Brazil - largest LatAm economy
  fr: 'Français', // West Africa + France institutional
  hi: 'हिन्दी', // India - massive retail + institutional
  ru: 'Русский', // Eastern European whales + oligarchs
  ko: '한국어', // Korea - tech-savvy early adopters
  ja: '日本語', // Japan - institutional + retail sophistication
  sw: 'Kiswahili', // East Africa - emerging crypto hub
  de: 'Deutsch', // DACH region - institutional capital
} as const;

// 🏛️ SOVEREIGN-LEVEL MARKET CONFIGURATION
// Each region gets culturally-coded investment psychology + payment rails
export const marketConfig = {
  en: {
    currency: 'USD',
    region: 'Global',
    rtl: false,
    tierName: 'Founding Backer',
    paymentMethods: ['CashApp', 'BTC', 'ETH'],
    culturalTone: 'sovereign',
    investorType: 'institutional'
  },
  es: {
    currency: 'USD',
    region: 'LATAM',
    rtl: false,
    tierName: 'Fundador del Protocolo',
    paymentMethods: ['Bitso', 'PIX', 'BTC'],
    culturalTone: 'community',
    investorType: 'retail-plus'
  },
  ar: {
    currency: 'AED',
    region: 'MENA',
    rtl: true,
    tierName: 'شيخ البروتوكول', // Sheikh Tier
    paymentMethods: ['OTC', 'BTC', 'ETH'],
    culturalTone: 'sovereign',
    investorType: 'whale'
  },
  'zh-CN': {
    currency: 'CNY',
    region: 'APAC',
    rtl: false,
    tierName: '协议创始人', // Protocol Founder
    paymentMethods: ['Binance', 'OKX', 'BTC'],
    culturalTone: 'technology',
    investorType: 'institutional'
  },
  pt: {
    currency: 'BRL',
    region: 'Brazil',
    rtl: false,
    tierName: 'Construtor de Legado',
    paymentMethods: ['PIX', 'Binance', 'BTC'],
    culturalTone: 'opportunity',
    investorType: 'retail-plus'
  },
  fr: {
    currency: 'EUR',
    region: 'Francophone',
    rtl: false,
    tierName: 'Patron du Protocole',
    paymentMethods: ['Coinbase', 'BTC', 'ETH'],
    culturalTone: 'institutional',
    investorType: 'institutional'
  },
  hi: {
    currency: 'INR',
    region: 'India',
    rtl: false,
    tierName: 'प्रोटोकॉल गुरु', // Protocol Guru
    paymentMethods: ['UPI', 'WazirX', 'BTC'],
    culturalTone: 'technology',
    investorType: 'retail-plus'
  },
  ru: {
    currency: 'USD',
    region: 'Eastern Europe',
    rtl: false,
    tierName: 'Основатель Протокола',
    paymentMethods: ['OTC', 'BTC', 'ETH'],
    culturalTone: 'sovereign',
    investorType: 'whale'
  },
  ko: {
    currency: 'KRW',
    region: 'Korea',
    rtl: false,
    tierName: '프로토콜 선생님', // Protocol Sensei
    paymentMethods: ['Upbit', 'Bithumb', 'BTC'],
    culturalTone: 'technology',
    investorType: 'retail-plus'
  },
  ja: {
    currency: 'JPY',
    region: 'Japan',
    rtl: false,
    tierName: 'プロトコル師匠', // Protocol Master
    paymentMethods: ['bitFlyer', 'Coincheck', 'BTC'],
    culturalTone: 'precision',
    investorType: 'institutional'
  },
  sw: {
    currency: 'USD',
    region: 'East Africa',
    rtl: false,
    tierName: 'Mjenzi wa Uongozi', // Legacy Builder
    paymentMethods: ['M-Pesa', 'Binance P2P', 'BTC'],
    culturalTone: 'community',
    investorType: 'retail-plus'
  },
  de: {
    currency: 'EUR',
    region: 'DACH',
    rtl: false,
    tierName: 'Protokoll Gründer',
    paymentMethods: ['Coinbase', 'Kraken', 'BTC'],
    culturalTone: 'institutional',
    investorType: 'institutional'
  }
} as const;

export type Language = keyof typeof languages;

export const defaultNS = 'common';
export const fallbackLng: Language = 'en';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      return import(`../locales/${language}/${namespace}.json`);
    })
  )
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng,
    defaultNS,
    ns: ['common', 'navigation', 'hero', 'features', 'footer', 'investment', 'tokenomics'],

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },

    react: {
      useSuspense: false,
    },

    // Fallback configuration for missing translations
    saveMissing: process.env.NODE_ENV === 'development',
    missingKeyHandler: (lng, ns, key) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`🌍 Missing translation: ${lng}.${ns}.${key}`);
      }
    },
  });

// 🎯 UTILITY FUNCTIONS FOR SOVEREIGN POSITIONING
export const getCurrentMarket = (language: Language) => marketConfig[language];
export const isRTL = (language: Language) => marketConfig[language]?.rtl || false;
export const getCurrency = (language: Language) => marketConfig[language]?.currency || 'USD';
export const getTierName = (language: Language) => marketConfig[language]?.tierName || 'Founding Backer';
export const getPaymentMethods = (language: Language) => marketConfig[language]?.paymentMethods || ['BTC'];
export const getCulturalTone = (language: Language) => marketConfig[language]?.culturalTone || 'sovereign';
export const getInvestorType = (language: Language) => marketConfig[language]?.investorType || 'institutional';

export default i18n;
