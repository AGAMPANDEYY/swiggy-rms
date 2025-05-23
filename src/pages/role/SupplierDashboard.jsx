// src/pages/role/SupplierDashboard.jsx
import React from 'react';
import { Card } from '@/components/ui/card';

export default function SupplierDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-orange-600">Supplier Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Pending Orders</h3>
            <span className="text-2xl">📝</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
          <p className="text-sm text-gray-500 mt-1">Awaiting confirmation</p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Delivery Schedule</h3>
            <span className="text-2xl">📦</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
          <p className="text-sm text-gray-500 mt-1">Scheduled for today</p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Performance</h3>
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">98%</p>
          <p className="text-sm text-gray-500 mt-1">On-time delivery rate</p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Auto-Reorder</h3>
            <span className="text-2xl">🔄</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
          <p className="text-sm text-gray-500 mt-1">Active items</p>
        </Card>
      </div>
    </div>
  );
}
