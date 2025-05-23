import React from 'react'

export function Button({ className = '', children, variant = 'primary', ...props }) {
  const base = 'rounded-lg px-5 py-2 font-semibold font-sans transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-swiggy-orange focus:ring-offset-2';
  const variants = {
    primary: 'bg-swiggy-orange text-white hover:bg-swiggy-orange/90',
    secondary: 'bg-swiggy-gray text-swiggy-black hover:bg-swiggy-orange/10 border border-swiggy-border',
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 