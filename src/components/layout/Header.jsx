import React, { useState } from 'react'
import { Bars3Icon, BellIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
import { useAIAssistant } from '@/contexts/AIAssistantContext'
import { motion, AnimatePresence } from 'framer-motion'

const swiggyLogoWithText = 'https://pawealth.in/wp-content/uploads/2019/08/Swiggy-startup-growth-story.png'

const roleLabels = {
  owner: 'Owner/Admin',
  manager: 'Manager',
  frontdesk: 'Frontdesk',
  kitchen: 'Kitchen',
  supplier: 'Supplier',
  delivery: 'Delivery Agent',
}

const agentConfigs = {
  owner: {
    name: 'BizBot',
    avatar: '🤖',
    color: 'bg-amber-500',
  },
  manager: {
    name: 'OpsBot',
    avatar: '🦾',
    color: 'bg-blue-500',
  },
  frontdesk: {
    name: 'DeskBot',
    avatar: '🤝',
    color: 'bg-green-500',
  },
  kitchen: {
    name: 'ChefBot',
    avatar: '👨‍🍳',
    color: 'bg-red-500',
  },
  supplier: {
    name: 'SupplyBot',
    avatar: '📦',
    color: 'bg-purple-500',
  },
  delivery: {
    name: 'DeliBot',
    avatar: '🛵',
    color: 'bg-teal-500',
  },
}

export default function Header({ onMenuClick, onChatToggle }) {
  const { user, role } = useAuth()
  const { getAgentResponse } = useAIAssistant()
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')

  const currentAgent = agentConfigs[role] || agentConfigs.owner

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    onChatToggle(!isChatOpen);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = inputMessage.trim()
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }])
    setInputMessage('')

    try {
      const response = await getAgentResponse(userMessage)
      setMessages(prev => [
        ...prev,
        { text: response.text, sender: 'bot' }
      ])
    } catch (error) {
      console.error('Error getting AI response:', error)
      setMessages(prev => [
        ...prev,
        { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' }
      ])
    }
  }

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-swiggy-border shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-3 lg:pl-64">
          <div className="flex items-center space-x-6">
            <button
              className="lg:hidden text-swiggy-orange hover:text-swiggy-black focus:outline-none"
              onClick={onMenuClick}
              aria-label="Open sidebar"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            {role && (
              <button
                onClick={toggleChat}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full ${currentAgent.color} text-white hover:opacity-90 transition-all`}
              >
                <span className="text-xl">{currentAgent.avatar}</span>
                <span className="font-medium hidden sm:inline">{currentAgent.name}</span>
              </button>
            )}
            {role && (
              <span className="bg-swiggy-orange/90 text-white text-xs font-semibold rounded px-3 sm:px-4 py-1 tracking-wide">
                {roleLabels[role] || role}
              </span>
            )}
            <button className="text-swiggy-orange hover:text-swiggy-black focus:outline-none" aria-label="Notifications">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="text-swiggy-orange hover:text-swiggy-black focus:outline-none" aria-label="User profile">
              <UserCircleIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Chat Side Panel */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={toggleChat}
            />
            
            {/* Side Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed top-[72px] right-0 h-[calc(100vh-72px)] w-full md:w-[380px] bg-white shadow-xl z-50 flex flex-col"
            >
              {/* Panel Header */}
              <div className={`${currentAgent.color} p-4 text-white flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{currentAgent.avatar}</span>
                  <div>
                    <h3 className="font-bold">{currentAgent.name}</h3>
                    <p className="text-sm opacity-90">AI Assistant</p>
                  </div>
                </div>
                <button
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20 rounded-full p-1"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Welcome Message */}
                <div className="flex gap-2">
                  <span className="text-2xl">{currentAgent.avatar}</span>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hello! I'm {currentAgent.name}, your AI assistant. How can I help you today?</p>
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
              <form onSubmit={handleSendMessage} className="p-4 border-t border-swiggy-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 rounded-lg border border-swiggy-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-swiggy-orange"
                  />
                  <button
                    type="submit"
                    className="bg-swiggy-orange text-white rounded-lg px-4 py-2 hover:bg-swiggy-orange/90 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 