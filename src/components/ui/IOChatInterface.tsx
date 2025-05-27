'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowingCard } from '@/components/ui/glowing-card';

interface Message {
  id: string;
  type: 'user' | 'io' | 'system';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

interface IOChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOChatInterface: React.FC<IOChatInterfaceProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: 'IO v1.0 initialized. Your Intelligent Operator is ready.',
      timestamp: new Date(),
    },
    {
      id: '2',
      type: 'io',
      content: 'Hello! I\'m IO, your Intelligent Operator. I can help you deploy agents, manage your stack, orchestrate workflows, and command your entire digital ecosystem. What would you like to accomplish?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate IO response
    setTimeout(() => {
      const ioResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'io',
        content: getIOResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, ioResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getIOResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('deploy') || lowerInput.includes('launch')) {
      return '🚀 Deployment initiated. I\'ll orchestrate your agent deployment across the network. Which agents would you like to deploy? I can handle AgentChat, AlphaRouter, or custom agents from your stack.';
    }
    
    if (lowerInput.includes('agent') || lowerInput.includes('bot')) {
      return '🤖 Agent management activated. I can help you create, deploy, monitor, and scale your AI agents. Would you like to see your current agent fleet or deploy new ones?';
    }
    
    if (lowerInput.includes('stack') || lowerInput.includes('infrastructure')) {
      return '🏗️ Infrastructure analysis complete. Your current stack includes AgentChat, AlphaRouter, ION, and AI Directory. I can optimize performance, scale resources, or deploy new components.';
    }
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return '👋 Hello! I\'m your IO - Intelligent Operator. I\'m here to help you command your entire AI ecosystem. Try asking me to "deploy agents", "check my stack", or "orchestrate a workflow".';
    }
    
    return '🧠 Processing your request... I can help you with agent deployment, stack management, workflow orchestration, and system monitoring. Could you be more specific about what you\'d like to accomplish?';
  };

  const quickActions = [
    { label: 'Deploy Agents', command: 'Deploy my agent fleet' },
    { label: 'Check Stack', command: 'Show me my current stack status' },
    { label: 'Orchestrate Workflow', command: 'Help me orchestrate a new workflow' },
    { label: 'Monitor System', command: 'Give me a system health report' },
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-4xl h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <GlowingCard className="bg-black/90 backdrop-blur-md border border-purple-500/20 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IO</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Intelligent Operator</h2>
                <p className="text-sm text-gray-400">Your AI Command Center</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : message.type === 'system'
                    ? 'bg-gray-800 text-gray-300'
                    : 'bg-gray-900 text-white border border-purple-500/20'
                } rounded-lg p-4`}>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-6 py-3 border-t border-purple-500/20">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(action.command)}
                  className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-6 border-t border-purple-500/20">
            <div className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Command your AI ecosystem..."
                className="flex-1 bg-gray-900 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Send
              </button>
            </div>
          </div>
        </GlowingCard>
      </motion.div>
    </motion.div>
  );
};
