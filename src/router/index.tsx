import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PortfolioPage } from '../features/portfolio';
import { OrderEntryPage } from '../features/orders';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/portfolio" replace />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/orders" element={<OrderEntryPage />} />
      <Route path="*" element={<p>404 - Page Not Found</p>} />
    </Routes>
  );
}
