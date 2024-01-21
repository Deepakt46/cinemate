import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-animatable';

import {moviePoster} from '../../../services/providers/poster';
import useStyles from '../style';

const MovieCarouselCard = ({item}: {item: any}) => {
  const navigation = useNavigation<any>();
  const styles = useStyles();

  return (
    <View style={styles.movieCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate('movieDetails', {id: item.id})}>
        <Image
          source={
            moviePoster(item.poster_path)
              ? {uri: moviePoster(item.poster_path) as string}
              : require('../../../../assets/images/no-poster.jpg')
          }
          style={styles.poster}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.rating}>Rating: {item.vote_average.toFixed(1)}</Text>
    </View>
  );
};

export default MovieCarouselCard;
