import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useAIAssistant } from '../../contexts/AIAssistantContext';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const agentConfigs = {
  owner: {
    name: 'BizBot',
    avatar: '🤖',
    color: 'bg-amber-500',
    greeting: 'Hello! I can help you with business analytics, staff management, and strategic decisions.',
  },
  manager: {
    name: 'OpsBot',
    avatar: '🦾',
    color: 'bg-blue-500',
    greeting: 'Hi! Need help with operations, scheduling, or inventory management?',
  },
  frontdesk: {
    name: 'DeskBot',
    avatar: '🤝',
    color: 'bg-green-500',
    greeting: 'Hello! I can assist with reservations, table management, and customer queries.',
  },
  kitchen: {
    name: 'ChefBot',
    avatar: '👨‍🍳',
    color: 'bg-red-500',
    greeting: 'Hi chef! Need help with recipes, inventory, or order management?',
  },
  supplier: {
    name: 'SupplyBot',
    avatar: '📦',
    color: 'bg-purple-500',
    greeting: 'Hello! I can help with purchase orders, delivery schedules, and inventory updates.',
  },
  delivery: {
    name: 'DeliBot',
    avatar: '🛵',
    color: 'bg-teal-500',
    greeting: 'Hi! Need assistance with routes, order status, or delivery updates?',
  },
};

export default function FloatingBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const { role } = useAuth();
  const { getAgentResponse } = useAIAssistant();
  
  const currentAgent = agentConfigs[role] || agentConfigs.owner;

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputMessage('');

    try {
      const response = await getAgentResponse(userMessage);
      setMessages(prev => [
        ...prev,
        { text: response.text, sender: 'bot' }
      ]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [
        ...prev,
        { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' }
      ]);
    }
  };

  if (!role) return null;

  return (
    <>
      {/* Floating Bot Button */}
      <motion.button
        className={`fixed top-1/3 right-6 w-16 h-16 rounded-full ${currentAgent.color} shadow-lg flex items-center justify-center text-white z-50 cursor-pointer`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <span className="text-2xl">{currentAgent.avatar}</span>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[calc(33.33%+4rem)] right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-200"
          >
            {/* Header */}
            <div className={`${currentAgent.color} p-4 text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{currentAgent.avatar}</span>
                <div>
                  <h3 className="font-bold">{currentAgent.name}</h3>
                  <p className="text-sm opacity-90">AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
              {/* Welcome Message */}
              <div className="flex gap-2">
                <span className="text-2xl">{currentAgent.avatar}</span>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">{currentAgent.greeting}</p>
                </div>
              </div>

              {/* Message History */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <span className="text-2xl">
                    {message.sender === 'user' ? '👤' : currentAgent.avatar}
                  </span>
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.sender === 'user'
                        ? 'bg-swiggy-orange text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-swiggy-orange"
                />
                <button
                  type="submit"
                  className={`${currentAgent.color} text-white rounded-full px-4 py-2 font-medium hover:opacity-90`}
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 