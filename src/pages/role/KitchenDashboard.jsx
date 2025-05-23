// src/pages/role/KitchenDashboard.jsx
import React from 'react';
import { Card } from '@/components/ui/card';

export default function KitchenDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Kitchen Dashboard</h1>
      <div className="space-y-4">
        <Card className="p-4">📥 Incoming Orders Queue</Card>
        <Card className="p-4">⏱️ Prep Time Analytics</Card>
        <Card className="p-4">📖 Recipe & Ingredient Lookup</Card>
        <Card className="p-4">✔️ Completed Orders</Card>
      </div>
    </div>
  );
}
