// src/pages/role/FrontDeskDashboard.jsx
import React from 'react';
import { Card } from '@/components/ui/card';

export default function FrontDeskDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Front Desk Dashboard</h1>
      <div className="space-y-6">
        <Card className="p-4">🗺️ Table Map & Seating</Card>
        <Card className="p-4">📞 Waitlist & Call Ahead</Card>
        <Card className="p-4">🆔 Guest Profiles & History</Card>
        <Card className="p-4">🛎️ Quick Order Start</Card>
      </div>
    </div>
  );
}
