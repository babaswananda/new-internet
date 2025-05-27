'use client';

import React from 'react';
import { CardSpotlightDemo } from '@/components/ui/card-spotlight-demo';
import Link from 'next/link';

export default function CardSpotlightDemoPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-8">Card Spotlight Demo</h1>
      
      <div className="flex flex-col items-center">
        <CardSpotlightDemo />
      </div>
      
      <div className="mt-12">
        <Link 
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
