import axios from 'axios';

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (title="") => {
  const response = await axios.get(`https://api.themoviedb.org/3/${title ? `search/` : "discover/"}movie?api_key=${"9e74fdab215960406b7f7789fce4fe62"}${title ? `&query=${title}` : ""}`,
    {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTc0ZmRhYjIxNTk2MDQwNmI3Zjc3ODlmY2U0ZmU2MiIsInN1YiI6IjYzMTU1YmMyMGMxMjU1MDA5MjNhY2IzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FzfIGfUArAiWc5AO_0Giim_ZVUaepHSBr5TXirZwMIM",
        Accept: "application/json",
      },
    },
  );
  return (await response.data.results);
});

export const moviesAdapter = createEntityAdapter();

const moviesSlice = createSlice({
  name: 'Api',
  initialState: moviesAdapter.getInitialState({
    loading: false,
    movies: [],
    movie: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      moviesAdapter.setAll(state, action.payload);
      state.loading = false;
      state.movie = state.movie
      state.movies = action.payload
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const {
  selectById: selectMovieById,
  selectIds: selectMovieIds,
  selectEntities: selectMovieEntities,
  selectAll: selectAllMovies,
  selectTotal: selectTotalMovies
} = moviesAdapter.getSelectors((state) => state.movies);

export default moviesSlice.reducer;