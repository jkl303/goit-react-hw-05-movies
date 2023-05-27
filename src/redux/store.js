import { configureStore } from '@reduxjs/toolkit';
import { dataReducer, queryReducer } from './slices';

export const store = configureStore({
  reducer: { data: dataReducer, query: queryReducer },
});
