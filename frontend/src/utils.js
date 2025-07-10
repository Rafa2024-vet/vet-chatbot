// src/utils.js

/**
 * Mapeia nomes de páginas para suas rotas correspondentes.
 * Isso centraliza a lógica de roteamento e evita hardcoding de URLs
 * nos componentes, facilitando futuras alterações.
 */
const pageRoutes = {
  Home: "/",
  Features: "/features",
  About: "/about",
  Contact: "/contact",
  Chat: "/chat",
  Login: "/login",
  Register: "/register",
};

/**
 * Retorna a URL para um determinado nome de página.
 * @param {string} pageName - O nome da página (ex: "Home", "Chat").
 * @returns {string} A URL correspondente.
 */
export const createPageUrl = (pageName) => {
  return pageRoutes[pageName] || "/"; // Retorna a home como padrão se a página não for encontrada
};