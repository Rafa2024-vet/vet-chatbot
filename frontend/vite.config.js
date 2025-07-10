// frontend/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  // Adicionando configuração do servidor para funcionar melhor com Docker
  server: {
    host: '0.0.0.0', // Permite que o servidor seja acessado de fora do contêiner
    port: 5173,
    watch: {
      usePolling: true, // Método mais confiável para detectar mudanças de arquivos no Docker
    },
  },
})