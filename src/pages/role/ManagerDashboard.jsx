// src/pages/role/ManagerDashboard.jsx
import React from 'react';
import { Card } from '@/components/ui/card';

export default function ManagerDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Manager Dashboard</h1>
      <div className="space-y-6">
        <Card className="p-4">📋 Shift & Schedule Planner</Card>
        <Card className="p-4">🍽️ Daily Order Summary</Card>
        <Card className="p-4">🚨 Low Stock Notifications</Card>
        <Card className="p-4">📈 Staff Efficiency Metrics</Card>
      </div>
    </div>
  );
}