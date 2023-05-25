import { createSlice } from '@reduxjs/toolkit';
import { fetch } from './operations';

const slice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetch.pending](state) {
      state.isLoading = true;
    },
    [fetch.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetch.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const reducer = slice.reducer;
