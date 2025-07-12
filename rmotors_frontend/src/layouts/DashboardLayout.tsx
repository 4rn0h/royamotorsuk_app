// src/layouts/DashboardLayout.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/" className="block hover:text-accent">Home</Link>
          <Link to="/cars" className="block hover:text-accent">Browse Cars</Link>
          <Link to="/dashboard" className="block hover:text-accent">Dashboard Home</Link>
        </nav>

        <div className="mt-12 border-t border-white/20 pt-6">
          <p className="text-sm mb-2">Logged in as</p>
          <p className="font-semibold">{user?.username}</p>
          <button onClick={logout} className="mt-4 bg-accent text-primary px-4 py-2 rounded hover:bg-accent/90">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-neutral overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
