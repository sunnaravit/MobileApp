import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './Api';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  }
});
