// apiService.js
import axios from 'axios';

const BASE_URL = 'your_backend_base_url'; // Replace with your actual backend URL

const apiService = {
  get: async (endpoint, params) => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, { params });
      return response.data;
    } catch (error) {
      console.error(`Error during GET request to ${endpoint}:`, error);
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error during POST request to ${endpoint}:`, error);
      throw error;
    }
  },

  // Add other API-related methods here
};

export default apiService;
