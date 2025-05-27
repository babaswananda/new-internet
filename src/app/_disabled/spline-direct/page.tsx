'use client';

import React from 'react';
import Link from 'next/link';

/**
 * SplineDirectPage
 * 
 * A test page that directly embeds the Spline scene using an iframe.
 * This is the most reliable way to display Spline content.
 */
export default function SplineDirectPage() {
  const splineUrl = "https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode";
  const embedUrl = splineUrl.replace('scene.splinecode', 'embed');

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Full-screen iframe for Spline */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src={embedUrl}
          frameBorder="0"
          width="100%" 
          height="100%" 
          title="Spline 3D Scene"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="autoplay; fullscreen; vr"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-6">Direct Spline 3D Background Test</h1>
          <p className="text-xl mb-4">
            This page tests the Spline 3D background integration using a direct iframe embed.
          </p>
          <p className="text-lg mb-8">
            You should see a 3D background behind this text. If not, check the browser console for errors.
          </p>
          
          <div className="flex space-x-4">
            <Link 
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
