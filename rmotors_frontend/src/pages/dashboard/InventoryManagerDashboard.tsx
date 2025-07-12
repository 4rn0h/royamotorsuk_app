// src/pages/dashboard/InventoryManagerDashboard.tsx
import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const InventoryManagerDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Inventory Manager Dashboard">
      <p>Manage vehicle inventory: add, edit, and remove listings.</p>
    </DashboardLayout>
  );
};

export default InventoryManagerDashboard;
