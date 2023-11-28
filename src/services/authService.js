// authService.js
import axios from 'axios';

const BASE_URL = 'your_backend_base_url'; // Replace with your actual backend URL

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  signup: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, { email, password });
      return response.data;
    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
  },

  // Add other authentication-related methods here
};

export default authService;
