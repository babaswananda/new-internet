'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { buttonHover } from '@/utils/animations';

interface SubmitButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  isLoading = false,
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'submit',
  onClick,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black shadow-lg shadow-orange-500/20 font-bold';
      case 'secondary':
        return 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg shadow-gray-500/20';
      case 'outline':
        return 'bg-white/5 border border-white/20 text-white hover:bg-white/10';
      default:
        return 'bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black shadow-lg shadow-orange-500/20 font-bold';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        font-bold rounded-lg transition-all duration-200
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...(!isDisabled ? buttonHover : {})}
    >
      <div className="flex items-center justify-center space-x-2">
        {isLoading && (
          <motion.div
            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        <span>{children}</span>
      </div>
    </motion.button>
  );
};

export default SubmitButton;
