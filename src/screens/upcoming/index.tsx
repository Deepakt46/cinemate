import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import useStyles from './styles';
import MovieCard from '../../common/components/movieCard';
import {RootState} from '../../redux/store';

const Home = () => {
  const styles = useStyles();

  const {movies, status} = useSelector((state: RootState) => state.movies);

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
        />
      </View>
    </View>
  );
};

export default Home;
