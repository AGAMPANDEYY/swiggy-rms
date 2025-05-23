import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';

export const AIAssistantContext = createContext();

const agentCapabilities = {
  owner: {
    analytics: ['revenue analysis', 'staff performance', 'business insights'],
    management: ['staff management', 'strategic planning', 'resource allocation'],
    operations: ['system configuration', 'policy setting', 'integration management'],
  },
  manager: {
    operations: ['scheduling', 'inventory management', 'staff coordination'],
    monitoring: ['order tracking', 'staff supervision', 'quality control'],
    reporting: ['daily reports', 'performance metrics', 'issue resolution'],
  },
  frontdesk: {
    customer: ['reservations', 'customer service', 'complaint handling'],
    operations: ['table management', 'order processing', 'payment handling'],
    coordination: ['staff coordination', 'kitchen communication', 'delivery timing'],
  },
  kitchen: {
    food: ['recipe guidance', 'quality standards', 'preparation timing'],
    inventory: ['stock management', 'ingredient tracking', 'waste reduction'],
    operations: ['order prioritization', 'staff coordination', 'equipment maintenance'],
  },
  supplier: {
    inventory: ['stock updates', 'delivery scheduling', 'quality control'],
    logistics: ['route optimization', 'delivery tracking', 'return handling'],
    coordination: ['kitchen communication', 'order processing', 'issue resolution'],
  },
  delivery: {
    operations: ['route optimization', 'order tracking', 'delivery timing'],
    customer: ['status updates', 'issue handling', 'feedback collection'],
    coordination: ['restaurant communication', 'customer coordination', 'handover management'],
  },
};

export function AIAssistantProvider({ children }) {
  const [isAssistantActive, setIsAssistantActive] = useState(true);
  const { role } = useAuth();

  const getAgentResponse = async (message, category) => {
    // Simulate AI processing with role-specific responses
    const capabilities = agentCapabilities[role] || {};
    const relevantTopics = capabilities[category] || [];
    
    // In a real implementation, this would call your AI service
    return {
      text: `I can help you with ${relevantTopics.join(', ')}. How can I assist you today?`,
      confidence: 0.95,
      suggestedActions: relevantTopics.map(topic => ({
        label: `Help with ${topic}`,
        action: `assist_${topic.replace(' ', '_')}`,
      })),
    };
  };

  const value = {
    isAssistantActive,
    setIsAssistantActive,
    getAgentResponse,
    currentRole: role,
    capabilities: agentCapabilities[role] || {},
  };

  return (
    <AIAssistantContext.Provider value={value}>
      {children}
    </AIAssistantContext.Provider>
  );
}

export function useAIAssistant() {
  return useContext(AIAssistantContext);
} 