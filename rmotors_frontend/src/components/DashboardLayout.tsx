// src/components/DashboardLayout.tsx
import React from 'react';

const DashboardLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-neutral p-6 text-primary">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-heading mb-4">{title}</h1>
        <hr className="mb-6 border-cta" />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
