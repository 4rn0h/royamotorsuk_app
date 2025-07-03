// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* Wrap ChatWidget with the new container div */}
      <div className="chat-widget-container"> 
        <ChatWidget />
      </div>
    </div>
  );
};

export default Layout;