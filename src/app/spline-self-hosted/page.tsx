'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Script from 'next/script';

/**
 * SplineSelfHosted
 * 
 * A test page that demonstrates how to use a self-hosted Spline scene.
 * This approach is useful if you're experiencing CORS issues with the Spline server.
 */
export default function SplineSelfHosted() {
  const splineContainerRef = useRef<HTMLDivElement>(null);
  
  // Note: This is a placeholder. You would need to download the actual .splinecode file
  // and place it in the public directory.
  const selfHostedUrl = "/EegKcAAn0DX9KgHh.splinecode";
  
  useEffect(() => {
    console.log("SplineSelfHosted mounted");
    console.log("Self-hosted URL:", selfHostedUrl);
    
    // Check if the file exists
    fetch(selfHostedUrl)
      .then(response => {
        if (response.ok) {
          console.log("Self-hosted Spline file exists");
        } else {
          console.error("Self-hosted Spline file not found:", response.status);
        }
      })
      .catch(error => {
        console.error("Error checking self-hosted Spline file:", error);
      });
  }, []);
  
  // Set up the Spline viewer after the script has loaded
  const handleScriptLoad = () => {
    console.log("Spline script loaded");
    
    // Make sure the container exists
    if (!splineContainerRef.current) {
      console.error("Spline container ref is null");
      return;
    }
    
    try {
      // Check if the spline-viewer element is defined
      if (typeof customElements.get('spline-viewer') === 'undefined') {
        console.error("spline-viewer custom element is not defined");
        return;
      }
      
      // Create the spline-viewer element
      const viewer = document.createElement('spline-viewer');
      viewer.setAttribute('url', selfHostedUrl);
      viewer.style.width = '100%';
      viewer.style.height = '100%';
      viewer.style.position = 'absolute';
      viewer.style.top = '0';
      viewer.style.left = '0';
      viewer.style.pointerEvents = 'none';
      
      // Clear the container and append the viewer
      splineContainerRef.current.innerHTML = '';
      splineContainerRef.current.appendChild(viewer);
      
      console.log("Spline viewer created and appended");
    } catch (error) {
      console.error("Error setting up Spline viewer:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Load Spline script */}
      <Script
        src="https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      
      {/* Spline container */}
      <div 
        ref={splineContainerRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold tracking-wider">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                UNIFIED AI I/O
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/agentos" className="text-gray-300 hover:text-white transition-colors">AgentOS</Link>
              <Link href="/adk" className="text-gray-300 hover:text-white transition-colors">ADK</Link>
            </nav>
            
            <button className="px-4 py-2 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              Enter the Protocol
            </button>
          </div>
        </header>
        
        {/* Main content */}
        <main className="pt-24">
          {/* Hero Section */}
          <section id="hero-section" className="min-h-screen flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-full mb-4">
                  <div className="bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">Protocol-Grade Launchpad</span>
                  </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  UNIFIED AI I/O
                  <span className="block text-2xl md:text-3xl mt-4 font-light text-white">
                    The New Map of the New Internet
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8">
                  unified ai... think of us as your dashboard to unify all things AI
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20">
                    Enter the Protocol
                  </button>
                  
                  <button className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Self-hosting instructions */}
          <section className="py-24 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Self-Hosting Instructions</h2>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <p className="mb-4">To use this approach, you need to:</p>
                  
                  <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
                    <li>Go to your Spline project</li>
                    <li>Export the scene (click on the three dots in the top right)</li>
                    <li>Click on "Code Export"</li>
                    <li>Download the .splinecode file</li>
                    <li>Place the file in the public directory of your Next.js project</li>
                    <li>Update the selfHostedUrl variable in this file to point to your file</li>
                  </ol>
                  
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="font-mono text-sm text-gray-300">
                      const selfHostedUrl = "/your-file-name.splinecode";
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
