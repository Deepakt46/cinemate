/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import useStyles from './styles';
import {getMovieDetails} from '../../services/providers/movieDetails';
import {moviePoster} from '../../services/providers/poster';
import {useNavigation} from '@react-navigation/native';
import MovieDetails from '../../types';

type MovieDetailsProps = {
  route: RouteProp<{params: {id: string}}, 'params'>;
  navigation: ReturnType<typeof useNavigation>;
};

const MovieDetail: React.FC<MovieDetailsProps> = ({route, navigation}) => {
  const styles = useStyles();
  const {id} = route.params;
  const [details, setDetails] = useState<MovieDetails>();
  useEffect(() => {
    const movieDetails = async () => {
      const data = await getMovieDetails(id);
      setDetails(data.data);
    };
    movieDetails();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.posterWrap}
        source={
          moviePoster(details?.poster_path)
            ? {uri: moviePoster(details?.poster_path) as string}
            : require('../../../assets/images/no-poster.jpg')
        }>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButton}>
          <Image
            source={require('../../../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.description}>
          <Text style={styles.titleText}>{details?.title}</Text>
          <Text style={styles.dateText}>
            Release Date: {details?.release_date}
          </Text>
          <Text style={styles.duration}>Duration: {details?.runtime} mins</Text>
          <Text style={styles.overView}>Overview</Text>
          <Text style={styles.review}>{details?.overview}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MovieDetail;
