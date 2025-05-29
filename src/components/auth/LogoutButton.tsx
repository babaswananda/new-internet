'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoutButtonProps {
  onLogout: () => void;
  className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout, className = '' }) => {
  const handleLogout = () => {
    // Clear authentication from sessionStorage
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('authEmail');
    
    // Call the logout callback
    onLogout();
  };

  return (
    <motion.button
      onClick={handleLogout}
      className={`text-red-400 hover:text-red-300 transition-colors tracking-wide uppercase text-sm relative group font-bold ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      🔓 LOGOUT
      <motion.div
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"
        whileHover={{ width: '100%' }}
      />
    </motion.button>
  );
};

export default LogoutButton;
