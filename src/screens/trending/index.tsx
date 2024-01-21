import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';
import MovieCard from '../../common/components/movieCard';
import {RootState} from '../../redux/store';
import LoadingFooter from '../../common/components/loader/footerLoader';
import { fetchTrendingMovies } from '../../redux/slices/trendingMovieSlice';

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

const Home = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const {movies, status, page} = useSelector(
    (state: RootState) => state.trendingMovie,
  );
  const onEndReached = () => {
    if (page <= 5 && status !== 'loading') {
      setLoading(true);
      dispatch(fetchTrendingMovies(page));
    } else {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={movies}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => (
            <MovieCard item={item} loading={status === 'loading'} />
          )}
          onEndReached={onEndReached}
          ListFooterComponent={
            // Show a loading indicator at the end of the list

            <LoadingFooter loading={loading} />
          }
        />
      </View>
    </View>
  );
};

export default Home;
