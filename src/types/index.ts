// Common interfaces and types used across the application

export interface NavItem {
  href: string;
  label: string;
  description?: string;
  color?: string;
}

export interface FABItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

export interface HandleType {
  id: string;
  icon: string;
  title: string;
  description: string;
  examples: string[];
  pricing: string;
  color: string;
}

export interface ContactMethod {
  title: string;
  email: string;
  description: string;
  icon: string;
  color: string;
}

export interface SocialPlatform {
  name: string;
  icon: string;
  handle: string;
  url: string;
  color: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  buttonText: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  image?: string;
  readTime?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  inStock: boolean;
}

export interface FormData {
  [key: string]: string | number | boolean;
}

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

// Layout types
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

// Form types
export interface FormFieldConfig {
  required?: boolean;
  validator?: (value: string) => string | undefined;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea' | 'select';
  options?: { value: string; label: string }[];
}

export interface FormConfig {
  [key: string]: FormFieldConfig;
}

// Handle Registry types
export interface HandleBundle {
  id: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  savings?: string;
}

export interface HandleAnalytics {
  type: 'developer' | 'agent' | 'endpoint' | 'session';
  metrics: string[];
  icon: string;
  color: string;
}

// Token types
export interface TokenInfo {
  name: string;
  symbol: string;
  description: string;
  totalSupply?: string;
  price?: number;
  change24h?: number;
}

// Hardware types
export interface HardwareProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  specs: { [key: string]: string };
  availability: string;
}

// Agent types
export interface Agent {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  pricing: string;
  category: string;
  rating?: number;
  reviews?: number;
}

// Utility types
export type ColorVariant = 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'yellow' | 'pink' | 'cyan';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

// Event types
export interface CustomEvent {
  type: string;
  data?: any;
  timestamp: number;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Theme types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      ease: string;
      easeIn: string;
      easeOut: string;
      easeInOut: string;
    };
  };
}
