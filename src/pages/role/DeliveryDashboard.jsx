// src/pages/role/DeliveryDashboard.jsx
import React from 'react';
import { Card } from '@/components/ui/card';

export default function DeliveryDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Delivery Dashboard</h1>
      <div className="space-y-6">
        <Card className="p-4">🚚 Active Deliveries</Card>
        <Card className="p-4">🕒 ETA & Route Map</Card>
        <Card className="p-4">🔔 Pickup Ready Alerts</Card>
        <Card className="p-4">📋 Delivery History</Card>
      </div>
    </div>
  );
}