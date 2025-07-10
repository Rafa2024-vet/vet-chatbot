// frontend/src/services/apiService.js
import axios from 'axios';

// A URL base do nosso backend em Docker
const API_URL = 'http://localhost:5000/api'; 

/**
 * Registra um novo usuário.
 * @param {object} userData - Dados do usuário { name, email, password }.
 * @returns {Promise<object>} Os dados do usuário e o token.
 */
export async function registerUser(userData) {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  if (response.data.token) {
    // Salva o usuário e o token no localStorage após o registro bem-sucedido
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

/**
 * Autentica um usuário (login).
 * @param {object} loginData - Credenciais do usuário { email, password }.
 * @returns {Promise<object>} Os dados do usuário e o token.
 */
export async function loginUser(loginData) {
  const response = await axios.post(`${API_URL}/auth/login`, loginData);
  if (response.data.token) {
    // Salva o usuário e o token no localStorage após o login bem-sucedido
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

/**
 * Desloga o usuário (simplesmente removendo do localStorage).
 */
export function logoutUser() {
  localStorage.removeItem('user');
}

/**
 * Envia uma mensagem para o chatbot.
 * Rota protegida, requer um token.
 * @param {string} message - A mensagem do usuário.
 * @param {string} petId - O ID do pet relacionado à conversa.
 * @param {string} token - O token JWT do usuário.
 * @returns {Promise<string>} A resposta do bot.
 */
export async function sendMessageToBot(message, petId, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Adiciona o cabeçalho de autorização
    },
  };

  const body = {
    message,
    petId,
  };

  try {
    const response = await axios.post(`${API_URL}/chat`, body, config); 
    return response.data.reply; 
  } catch (error) {
    console.error("Erro no serviço de API:", error); 
    throw error;
  }
}