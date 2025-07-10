// frontend/src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/auth/ProtectedRoute'; // <-- IMPORTE O PORTEIRO

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* ROTA PROTEGIDA */}
        <Route 
          path="/chat" 
          element={
            <ProtectedRoute> {/* <-- COLOQUE O PORTEIRO AQUI */}
              <Chat />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Layout>
  );
}

export default App;