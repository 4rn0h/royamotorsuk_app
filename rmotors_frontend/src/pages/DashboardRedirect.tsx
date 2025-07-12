// src/pages/DashboardRedirect.tsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const DashboardRedirect: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) throw new Error('No token');

        const response = await axios.get('http://127.0.0.1:8000/api/users/profile/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRole(response.data.role);
      } catch (err) {
        console.error('Failed to fetch user role:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  if (loading) return <p className="text-center mt-10 text-primary">Redirecting...</p>;

  switch (role) {
    case 'admin':
      return <Navigate to="/dashboard/admin" replace />;
    case 'staff':
      return <Navigate to="/dashboard/staff" replace />;
    case 'customer':
      return <Navigate to="/dashboard/customer" replace />;
    case 'inventory_manager':
      return <Navigate to="/dashboard/inventory" replace />;
    case 'sales_manager':
      return <Navigate to="/dashboard/sales" replace />;
    default:
      return <Navigate to="/profile" replace />;
  }
};

export default DashboardRedirect;
