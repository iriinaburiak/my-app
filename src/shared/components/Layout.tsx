// src/shared/components/Layout.tsx
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container mx-auto p-4">{children}</div>;
};

export default Layout;
