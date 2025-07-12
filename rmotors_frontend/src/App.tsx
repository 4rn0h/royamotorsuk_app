// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import CarDetailPage from './pages/CarDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SophisticatedEdgePreviewPage from './pages/SophisticatedEdgePreviewPage';
import DashboardRedirect from './pages/DashboardRedirect';

import CustomerDashboard from './pages/dashboard/CustomerDashboard';
import StaffDashboard from './pages/dashboard/StaffDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import InventoryManagerDashboard from './pages/dashboard/InventoryManagerDashboard';
import SalesManagerDashboard from './pages/dashboard/SalesManagerDashboard';

import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/color-schemes/sophisticated-edge" element={<SophisticatedEdgePreviewPage />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardRedirect />
          </PrivateRoute>
        } />

        <Route path="/dashboard/admin" element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        } />

        <Route path="/dashboard/staff" element={
          <PrivateRoute>
            <StaffDashboard />
          </PrivateRoute>
        } />

        <Route path="/dashboard/customer" element={
          <PrivateRoute>
            <CustomerDashboard />
          </PrivateRoute>
        } />

        <Route path="/dashboard/inventory" element={
          <PrivateRoute>
            <InventoryManagerDashboard />
          </PrivateRoute>
        } />

        <Route path="/dashboard/sales" element={
          <PrivateRoute>
            <SalesManagerDashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Layout>
  );
}

export default App;
