import axios from 'axios';

const API_KEY = '95e0a9f6333c954132e51c9aa189b3ea';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetch = async endpoint => {
  try {
    const response = await axios.get(endpoint, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
