// src/pages/dashboard/StaffDashboard.tsx
import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const StaffDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Staff Dashboard">
      <p>You have access to internal tools and company-wide data.</p>
    </DashboardLayout>
  );
};

export default StaffDashboard;
