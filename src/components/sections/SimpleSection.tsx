'use client';

import React from 'react';

const SimpleSection = () => {
  return React.createElement('div', { className: 'py-24 bg-black text-white' },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('h2', { className: 'text-4xl font-bold mb-8 text-center' }, 'Chat UI'),
      React.createElement('div', { className: 'max-w-4xl mx-auto' },
        React.createElement('div', { className: 'bg-[#121212] rounded-xl overflow-hidden shadow-2xl border border-gray-800' },
          // Suggestion buttons
          React.createElement('div', { className: 'p-4 flex flex-wrap gap-2 justify-center' },
            React.createElement('button', { className: 'px-4 py-2 rounded-full bg-[#1e1e1e] border border-yellow-500 text-white flex items-center gap-2' },
              React.createElement('span', null, '💡'),
              React.createElement('span', null, 'Fun fact about Rome')
            ),
            React.createElement('button', { className: 'px-4 py-2 rounded-full bg-[#1e1e1e] border border-purple-500 text-white flex items-center gap-2' },
              React.createElement('span', null, '🔮'),
              React.createElement('span', null, 'HTML landing page')
            ),
            React.createElement('button', { className: 'px-4 py-2 rounded-full bg-[#1e1e1e] border border-blue-500 text-white flex items-center gap-2' },
              React.createElement('span', null, '💻'),
              React.createElement('span', null, 'Python for fibonacci series')
            ),
            React.createElement('button', { className: 'px-4 py-2 rounded-full bg-[#1e1e1e] border border-red-500 text-white flex items-center gap-2' },
              React.createElement('span', null, '🎨'),
              React.createElement('span', null, 'Draw a dragon')
            )
          ),
          
          // Input area
          React.createElement('div', { className: 'p-6' },
            React.createElement('div', { className: 'bg-[#1e1e1e] rounded-xl p-4 flex items-center' },
              React.createElement('div', { className: 'flex-grow relative' },
                React.createElement('input', { 
                  type: 'text',
                  placeholder: 'Write something...',
                  className: 'w-full bg-transparent text-white outline-none'
                })
              ),
              React.createElement('div', { className: 'flex gap-2' },
                React.createElement('button', { className: 'w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400' },
                  React.createElement('span', null, '📎')
                ),
                React.createElement('button', { className: 'w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400' },
                  React.createElement('span', null, '🌐')
                ),
                React.createElement('button', { className: 'w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white' },
                  React.createElement('span', null, '➤')
                )
              )
            )
          ),
          
          // Feature buttons
          React.createElement('div', { className: 'px-4 pb-4 flex flex-wrap gap-4 justify-center border-t border-gray-800 pt-4' },
            React.createElement('button', { className: 'flex items-center gap-2 text-gray-300 hover:text-white transition-colors' },
              React.createElement('span', null, '🖼️'),
              React.createElement('span', null, 'Image')
            ),
            React.createElement('button', { className: 'flex items-center gap-2 text-gray-300 hover:text-white transition-colors' },
              React.createElement('span', null, '💻'),
              React.createElement('span', null, 'Code')
            ),
            React.createElement('button', { className: 'flex items-center gap-2 text-gray-300 hover:text-white transition-colors' },
              React.createElement('span', null, '🎮'),
              React.createElement('span', null, 'Playground')
            ),
            React.createElement('button', { className: 'flex items-center gap-2 text-gray-300 hover:text-white transition-colors' },
              React.createElement('span', null, '📊'),
              React.createElement('span', null, 'Powerpoint-Gen')
            ),
            React.createElement('button', { className: 'flex items-center gap-2 text-gray-300 hover:text-white transition-colors' },
              React.createElement('span', null, '🔍'),
              React.createElement('span', null, 'Deep Research')
            ),
            React.createElement('button', { className: 'flex items-center gap-2 text-gray-300 hover:text-white transition-colors' },
              React.createElement('span', null, '⚙️'),
              React.createElement('span', null, 'More')
            )
          ),
          
          // Prompting tips
          React.createElement('div', { className: 'p-4 border-t border-gray-800 flex justify-center' },
            React.createElement('a', { href: '#', className: 'text-purple-400 flex items-center gap-2' },
              React.createElement('span', null, '⚡'),
              React.createElement('span', null, 'Prompting Tips and Tricks')
            )
          )
        )
      )
    )
  );
};

export default SimpleSection;
