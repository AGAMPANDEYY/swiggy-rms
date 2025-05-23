// Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex items-center">
        <button className="relative mr-4">
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
          🔔
        </button>
        <img
          src="https://via.placeholder.com/32"
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
