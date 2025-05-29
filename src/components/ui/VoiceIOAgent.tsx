'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  isVoice?: boolean;
}

interface VoiceIOAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceIOAgent: React.FC<VoiceIOAgentProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'agent',
      content: 'Hello! I\'m IO, your Intelligent Operator. I can help you with questions about Unified AI Protocol, handle registration, tokenomics, partnerships, or anything else. You can type or speak to me!',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Speech Recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          console.log('Speech recognition result:', transcript); // Debug log
          setInputText(transcript);
          // Don't auto-send, let user review first
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };
      }

      // Speech Synthesis
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Listen for messages from the AI voice input iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from 21st.dev
      if (event.origin !== 'https://21st.dev') return;

      // Handle voice input results
      if (event.data && event.data.type === 'voice-input' && event.data.transcript) {
        setInputText(event.data.transcript);
        handleSendMessage(event.data.transcript, true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speakText = (text: string) => {
    console.log('speakText called with:', text);
    console.log('voiceEnabled:', voiceEnabled);
    console.log('synthRef.current:', synthRef.current);

    if (!voiceEnabled) {
      console.log('Voice not enabled');
      return;
    }

    if (!synthRef.current) {
      console.log('Speech synthesis not available');
      return;
    }

    // Cancel any ongoing speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 0.8;

    utterance.onstart = () => {
      console.log('Speech started');
      setIsSpeaking(true);
    };
    utterance.onend = () => {
      console.log('Speech ended');
      setIsSpeaking(false);
    };
    utterance.onerror = (e) => {
      console.error('Speech error:', e);
      setIsSpeaking(false);
    };

    console.log('About to speak utterance');
    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Handle registry questions
    if (lowerMessage.includes('handle') || lowerMessage.includes('registry') || lowerMessage.includes('claim')) {
      return "Great question about handles! The Handle Registry is your universal AI identity. You can claim handles like @yourname.ai for $50-500+ depending on the tier. Visit /claim to get started, or check out /handle-registry for technical details. Each handle gives you identity across all AI services!";
    }

    // Handle tokenomics questions
    if (lowerMessage.includes('token') || lowerMessage.includes('coin') || lowerMessage.includes('price') || lowerMessage.includes('buy')) {
      return "Our three-token economy includes UtilityCoin (UC) for governance, AI Tokens (AIT) for execution gas, and Meme Coins for viral growth. Check out our Friends & Family round at /friends-family for early access, or visit /ai-tokens for full tokenomics details!";
    }

    // Handle technical questions
    if (lowerMessage.includes('technical') || lowerMessage.includes('api') || lowerMessage.includes('integrate') || lowerMessage.includes('developer')) {
      return "For technical information, check out our comprehensive documentation at /blog for research papers, /learn-aimademerich for the Protocol Academy, or /book-demo to schedule a technical deep dive with our team. We have SDKs for JavaScript, Python, Go, and mobile platforms!";
    }

    // Handle partnership questions
    if (lowerMessage.includes('partner') || lowerMessage.includes('business') || lowerMessage.includes('enterprise') || lowerMessage.includes('integrate')) {
      return "Excellent! We offer multiple partnership tiers including technical integrations, strategic alliances, and enterprise solutions. Visit /partners for details or /book-demo to schedule a partnership discussion. We complement existing AI platforms rather than compete!";
    }

    // Handle investment questions
    if (lowerMessage.includes('invest') || lowerMessage.includes('funding') || lowerMessage.includes('round') || lowerMessage.includes('money')) {
      return "We have several investment opportunities! Our Friends & Family round offers early access with bonus tokens, and our AI Tokens ITO provides public access. Visit /friends-family for F&F details or /investors for comprehensive investment information. ROI projections look very promising!";
    }

    // Handle demo/meeting requests
    if (lowerMessage.includes('demo') || lowerMessage.includes('meeting') || lowerMessage.includes('call') || lowerMessage.includes('schedule')) {
      return "I'd love to help you schedule a demo! We offer Protocol Overview (30min), Technical Deep Dive (45min), Tokenomics Workshop (60min), and Enterprise Integration sessions. Visit /book-demo to choose your preferred demo type and schedule a time that works for you!";
    }

    // Handle general questions
    if (lowerMessage.includes('what is') || lowerMessage.includes('explain') || lowerMessage.includes('about')) {
      return "Unified AI Protocol is the missing infrastructure layer that unifies AI services with decentralized identity. Think of it as the 'internet protocol for AI' - enabling seamless, secure interactions across any AI service with one universal identity. Check out /about for our full story!";
    }

    // Handle FAQ requests
    if (lowerMessage.includes('faq') || lowerMessage.includes('questions') || lowerMessage.includes('help')) {
      return "I can help with that! We have a comprehensive FAQ at /faq covering General, Technical, Tokenomics, Partnerships, and Investment questions. You can also browse our research library at /blog or learn through our Protocol Academy at /learn-aimademerich!";
    }

    // Default response
    return "Thanks for your question! I'm here to help with anything about Unified AI Protocol. You can ask me about handles, tokens, partnerships, technical details, or investment opportunities. For comprehensive information, check out /faq, /blog, or /book-demo to speak with our team directly!";
  };

  const handleSendMessage = (text?: string, isVoiceInput?: boolean) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    console.log('Sending message:', messageText); // Debug log

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      timestamp: new Date(),
      isVoice: isVoiceInput
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Get AI response immediately
    setTimeout(() => {
      const aiResponse = getAIResponse(messageText);
      console.log('AI Response:', aiResponse); // Debug log

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);

      // Speak the response if voice is enabled
      if (voiceEnabled) {
        console.log('Speaking response'); // Debug log
        speakText(aiResponse);
      }
    }, 500); // Reduced delay
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="fixed bottom-24 right-6 w-96 h-[600px] bg-black/90 backdrop-blur-lg border border-purple-500/30 rounded-lg shadow-2xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">IO</span>
            </div>
            <div>
              <h3 className="text-white font-bold">Intelligent Operator</h3>
              <p className="text-gray-400 text-xs">
                {isListening ? '🎤 Listening...' : isSpeaking ? '🔊 Speaking...' : 'Online'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={`p-2 rounded-lg transition-all ${
                voiceEnabled ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
              }`}
              title={voiceEnabled ? 'Voice enabled' : 'Voice disabled'}
            >
              {voiceEnabled ? '🔊' : '🔇'}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-all text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-100'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs opacity-60">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  {message.isVoice && <span className="text-xs">🎤</span>}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-100 p-3 rounded-lg">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* AI Voice Input Integration */}
        <div className="p-4 border-t border-purple-500/20">
          <div className="mb-4">
            <iframe
              src="https://21st.dev/kokonutd/ai-voice-input/default"
              className="w-full h-32 rounded-lg border border-purple-500/30 bg-black/50"
              title="AI Voice Input"
              allow="microphone"
              style={{
                background: 'transparent',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '8px'
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about Unified AI..."
              className="flex-1 px-3 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-sm"
            />
            <button
              onClick={isListening ? stopListening : startListening}
              className={`p-2 rounded-lg transition-all ${
                isListening
                  ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
              title={isListening ? 'Stop listening' : 'Start voice input'}
            >
              {isListening ? '🔴' : '🎤'}
            </button>
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim()}
              className="p-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-all"
            >
              📤
            </button>
            {isSpeaking && (
              <button
                onClick={stopSpeaking}
                className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all"
                title="Stop speaking"
              >
                🔇
              </button>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Use the AI voice input above or type your question below
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VoiceIOAgent;
