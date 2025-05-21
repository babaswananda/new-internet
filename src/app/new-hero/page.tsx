'use client';

import React from 'react';
import NewHeroSection from '@/components/sections/NewHeroSection';

/**
 * NewHeroPage
 * 
 * A page that showcases the new hero section.
 */
export default function NewHeroPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NewHeroSection />
    </div>
  );
}
