import restClient from '../client/rest';

export async function getTrendingMovies(page: number) {
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
