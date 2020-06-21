import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProductsProvider } from './products';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;
