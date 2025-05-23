// Updated App.jsx with role-based routing and Swiggy-themed design
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import RoleDashboardRouter from './pages/RoleDashboardRouter';
import Orders from './pages/Orders';
import Menu from './pages/Menu';
import Inventory from './pages/Inventory';
import Staff from './pages/Staff';
import Analytics from './pages/Analytics';
import Swiggy from './pages/SwiggyIntegration';
import Login from './pages/Login';
import RoleSelect from './pages/RoleSelect';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AIAssistantProvider } from './contexts/AIAssistantContext';
import FloatingBot from './components/AIAssistant/FloatingBot';

// Theme Context for Swiggy colors
import { ThemeProvider } from './contexts/ThemeContext';
import POS from './pages/POS';
import KDS from './pages/KDS';
import Recipes from './pages/Recipes';
import CRM from './pages/CRM';
import Financials from './pages/Financials';
import Tables from './pages/Tables';

function ProtectedRoute({ children }) {
  const { user, role } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (!role) return <Navigate to="/select-role" />;
  return children;
}

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { role } = useAuth();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div 
          className={`
            transition-all duration-300 ease-in-out
            lg:pl-64 
            ${isChatOpen ? 'lg:pr-[380px]' : ''}
          `}
        >
          <Header onMenuClick={() => setSidebarOpen(true)} onChatToggle={setIsChatOpen} />
          <main className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<RoleDashboardRouter />} />
                <Route path="/pos" element={<POS />} />
                <Route path="/kds" element={<KDS />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/crm" element={<CRM />} />
                <Route path="/financials" element={<Financials />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/swiggy" element={<Swiggy />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AIAssistantProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/select-role" element={<RoleSelect />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AIAssistantProvider>
    </AuthProvider>
  );
}
