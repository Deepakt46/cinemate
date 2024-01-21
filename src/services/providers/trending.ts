import restClient from '../client/rest';

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

export async function getTrendingMovies(page: number): Promise<Movie[]> {
  try {
    const response = await restClient.get('3/trending/movie/day', {
      params: {
        page: page,
      },
    });
    return response.data;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
}
