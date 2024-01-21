import {TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import useStyle from './style';
import {moviePoster} from '../../../services/providers/poster';
import MovieDetails from '../../../types';
import TrendingMovieCardSkeleton from '../skeleton/skeletonTrending';
import {useNavigation} from '@react-navigation/native';

const MovieCard = ({item, loading}: {item: MovieDetails; loading: boolean}) => {
  const styles = useStyle();
  const navigation = useNavigation<any>();

  return (
    <>
      {loading ? (
        <TrendingMovieCardSkeleton />
      ) : (
        <TouchableOpacity
          style={styles.mainWrapper}
          onPress={() => navigation.navigate('movieDetails', {id: item.id})}>
          <Image
            style={styles.card}
            source={
              moviePoster(item.poster_path)
                ? {uri: moviePoster(item.poster_path) as string}
                : require('../../../../assets/images/no-poster.jpg')
            }
          />
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default MovieCard;
