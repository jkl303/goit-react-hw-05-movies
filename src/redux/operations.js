import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = '95e0a9f6333c954132e51c9aa189b3ea';

export const fetchItems = createAsyncThunk(
  'data/fetch',
  async (endpoint, thunkAPI) => {
    try {
      const response = await axios.get(endpoint, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
