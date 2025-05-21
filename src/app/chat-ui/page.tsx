'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// This tells Next.js to dynamically render this page
export const dynamic = 'force-dynamic';

// Suggestion buttons for the chat UI
const suggestionButtons = [
  { icon: "💡", text: "Fun fact about Rome", color: "border-yellow-500" },
  { icon: "🔮", text: "HTML landing page", color: "border-purple-500" },
  { icon: "💻", text: "Python for fibonacci series", color: "border-blue-500" },
  { icon: "🎨", text: "Draw a dragon", color: "border-red-500" },
];

// Feature buttons for the chat UI
const featureButtons = [
  { icon: "🖼️", text: "Image" },
  { icon: "💻", text: "Code" },
  { icon: "🎮", text: "Playground" },
  { icon: "📊", text: "Powerpoint-Gen" },
  { icon: "🔍", text: "Deep Research" },
  { icon: "⚙️", text: "More" },
];

export default function ChatUI() {
  const [inputValue, setInputValue] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(null);

  const handleSuggestionClick = (index: number) => {
    setSelectedSuggestion(index);
    setInputValue(suggestionButtons[index].text);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Chat UI</h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#121212] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            {/* Suggestion buttons */}
            <div className="p-4 flex flex-wrap gap-2 justify-center">
              {suggestionButtons.map((button, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 rounded-full bg-[#1e1e1e] border ${button.color} text-white flex items-center gap-2 transition-all ${selectedSuggestion === index ? 'border-opacity-100 scale-105' : 'border-opacity-30'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSuggestionClick(index)}
                >
                  <span>{button.icon}</span>
                  <span>{button.text}</span>
                </motion.button>
              ))}
            </div>

            {/* Input area */}
            <div className="p-6">
              <div className="bg-[#1e1e1e] rounded-xl p-4 flex items-center">
                <div className="flex-grow relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Write something..."
                    className="w-full bg-transparent text-white outline-none"
                  />
                </div>
                <div className="flex gap-2">
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Feature buttons */}
            <div className="px-4 pb-4 flex flex-wrap gap-4 justify-center border-t border-gray-800 pt-4">
              {featureButtons.map((button, index) => (
                <motion.button
                  key={index}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{button.icon}</span>
                  <span>{button.text}</span>
                </motion.button>
              ))}
            </div>

            {/* Prompting tips */}
            <div className="p-4 border-t border-gray-800 flex justify-center">
              <motion.a
                href="#"
                className="text-purple-400 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Prompting Tips and Tricks</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
