import React from 'react'

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`block w-full rounded-lg border border-swiggy-border px-4 py-2 text-swiggy-black placeholder-gray-400 font-sans bg-white focus:border-swiggy-orange focus:ring-swiggy-orange focus:outline-none transition-colors ${className}`}
      {...props}
    />
  )
} 