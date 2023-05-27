import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from './operations';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchItems.pending](state) {
      state.isLoading = true;
    },
    [fetchItems.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchItems.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const querySlice = createSlice({
  name: 'query',
  initialState: {
    endpoint: '/trending/all/day?language=en-US',
    page: 1,
    title: 'Trending today',
  },
  reducers: {
    setEndpoint: {
      reducer(state, action) {
        state.endpoint = action.payload;
      },
      prepare(query) {
        return { payload: query };
      },
    },
    setPage: {
      reducer(state, action) {
        state.val = action.payload;
      },
      prepare(page) {
        return { payload: page };
      },
    },
    setTitle: {
      reducer(state, action) {
        state.title = action.payload;
      },
      prepare(query) {
        return { payload: query };
      },
    },
  },
});

export const { setEndpoint, setPage, setTitle } = querySlice.actions;

export const dataReducer = dataSlice.reducer;
export const queryReducer = querySlice.reducer;
