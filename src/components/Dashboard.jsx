// Dashboard.jsx
import React from 'react';

export default function Dashboard() {
  const widgets = [
    { title: "Today's Sales", value: '₹12,430', color: 'bg-green-100', icon: '💵' },
    { title: 'Swiggy Orders', value: '23', color: 'bg-yellow-100', icon: '📦' },
    { title: 'Low Stock Alerts', value: '5', color: 'bg-red-100', icon: '⚠️' },
    { title: 'Pending Reservations', value: '8', color: 'bg-blue-100', icon: '📅' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {widgets.map(w => (
        <div
          key={w.title}
          className={`${w.color} p-4 rounded-lg shadow flex items-center`}
        >
          <span className="text-3xl mr-4">{w.icon}</span>
          <div>
            <p className="text-sm text-gray-600">{w.title}</p>
            <p className="text-xl font-semibold text-gray-800">{w.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
