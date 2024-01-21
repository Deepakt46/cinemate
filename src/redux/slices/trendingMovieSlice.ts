import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getTrendingMovies} from '../../services/providers/trending';

interface Movie {
  id: number;
  title: string;
  // Add more properties based on your needs
}

interface MoviesState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  page: number;
}

const initialState: MoviesState = {
  movies: [],
  status: 'idle',
  error: null,
  page: 1,
};

export const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async (page: number) => {
    const response = await getTrendingMovies(page);
    return response.results as Movie[];
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTrendingMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = [...state.movies, ...action.payload];
        state.page = state.page + 1;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default moviesSlice.reducer;
