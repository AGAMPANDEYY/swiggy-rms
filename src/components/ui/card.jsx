import React from "react";

export function Card({ className = '', children, border = false, ...props }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-card border border-swiggy-border p-6 font-sans ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 