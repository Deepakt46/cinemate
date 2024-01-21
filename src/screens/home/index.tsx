/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, useWindowDimensions, Text, FlatList} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './style';
import MovieCarouselCard from './components/MovieCarouselCard';
import MovieCard from '../../common/components/movieCard';
import {fetchMovies} from '../../redux/slices/upcomingMovieSlice';
import {fetchTrendingMovies} from '../../redux/slices/trendingMovieSlice';
import MovieCardSkeleton from '../../common/components/skeleton/skeletonHomeScrenn';
import LoadingFooter from '../../common/components/loader/footerLoader';
import TrendingMovieCardSkeleton from '../../common/components/skeleton/skeletonTrending';
import {RootState} from '../../redux/store';

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

const UpcomingMovieComponent = ({
  movies,
  loading,
}: {
  movies: Movie;
  loading: boolean;
}) => {
  const styles = useStyles();
  const {width} = useWindowDimensions();

  return (
    <View style={styles.upcomingMovies}>
      {loading ? (
        <MovieCardSkeleton />
      ) : (
        <>
          <Text style={styles.upcomingMovieTxt}>Upcoming Movies</Text>
          <Carousel
            data={movies}
            renderItem={({item}: {item: Movie}) => (
              <MovieCarouselCard item={item} />
            )}
            sliderWidth={width - 40}
            itemWidth={230}
            inactiveSlideOpacity={0.5}
            enableMomentum={true}
            decelerationRate={0.9}
          />
        </>
      )}
      <Text style={styles.movieCardHeaderText}>Trending Movies</Text>
    </View>
  );
};

const Home = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [loadingUpcomingMovie, setLoadingUpcomingMovie] =
    useState<boolean>(true);
  const [loadingTrendingMovie, setLoadingTrendingMovie] =
    useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const {movies, status} = useSelector((state: RootState) => state.movies);
  const {
    movies: trendingMovies,
    status: trendingStatus,
    // error: trendingError,
    page,
  } = useSelector((state: RootState) => state.trendingMovie);

  useEffect(() => {
    if (status === 'idle') {
      setLoadingUpcomingMovie(true);
      dispatch(fetchMovies());
    } else if (status === 'succeeded') {
      setLoadingUpcomingMovie(false);
    }

    // Assuming you want to fetch trending movies as well
    if (trendingStatus === 'idle') {
      setLoadingTrendingMovie(true);
      dispatch(fetchTrendingMovies(page));
    } else if (trendingStatus === 'succeeded') {
      setLoadingTrendingMovie(false);
    }
  }, [status, trendingStatus, dispatch]);

  const onEndReached = () => {
    if (page <= 2 && trendingStatus !== 'loading') {
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
          data={trendingMovies}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <UpcomingMovieComponent
              movies={movies}
              loading={loadingUpcomingMovie}
            />
          }
          onEndReached={onEndReached} // function to handle the pagination
          renderItem={({item}) => (
            <MovieCard item={item} loading={loadingTrendingMovie} />
          )}
          ListFooterComponent={
            // Show a loading indicator at the end of the list
            <>
              {loading && trendingMovies.length === 0 && (
                <TrendingMovieCardSkeleton />
              )}
              <LoadingFooter loading={loading} />
            </>
          }
        />
      </View>
    </View>
  );
};

export default Home;
