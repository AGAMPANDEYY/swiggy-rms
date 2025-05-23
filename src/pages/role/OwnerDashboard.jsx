// src/pages/role/OwnerDashboard.jsx
import React from 'react';
import { Card } from '@/components/ui/card';

export default function OwnerDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Owner Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-4">📊 Revenue & Sales Trends</Card>
        <Card className="p-4">💰 Profit & Expense Breakdown</Card>
        <Card className="p-4">📦 Inventory Alerts</Card>
        <Card className="p-4">👥 Staff Performance</Card>
        <Card className="p-4">⭐ Customer Feedback</Card>
        <Card className="p-4">📝 Purchase Orders</Card>
      </div>
    </div>
  );
}
