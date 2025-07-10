import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Main content pushed down by the fixed header */}
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
