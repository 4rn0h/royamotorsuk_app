// src/pages/dashboard/CustomerDashboard.tsx
import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const CustomerDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Customer Dashboard">
      <p>Welcome to your dashboard. Here you can view your saved cars, enquiries, and orders.</p>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
