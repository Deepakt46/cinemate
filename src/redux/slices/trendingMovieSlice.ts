import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getTrendingMovies} from '../../services/providers/trending';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
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

interface MovieResponse {
  results: Movie[];
}

export const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async (page: number) => {
    const response = await getTrendingMovies(page);
    return response.results as MovieResponse;
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
