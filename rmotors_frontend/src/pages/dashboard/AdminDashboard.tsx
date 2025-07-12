import React from 'react';
import DashboardLayout from "../../layouts/DashboardLayout";

const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-xl font-heading">Admin Controls</h2>
      <p className="text-primary">Welcome, Admin! You can manage users, vehicles, and inventory.</p>
    </DashboardLayout>
  );
};

export default AdminDashboard;
