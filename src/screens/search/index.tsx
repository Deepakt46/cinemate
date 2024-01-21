/* eslint-disable react-hooks/exhaustive-deps */
import {View, TextInput, Image, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useCallback, useState} from 'react';
import useStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {debounce} from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {emptySearch, searchMovies} from '../../redux/slices/searchMovies';
import MovieCard from '../../common/components/movieCard';
import {RootState} from '../../redux/store';

const Search = () => {
  const styles = useStyles();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const {movies, status, page} = useSelector(
    (state: RootState) => state.searchMovie,
  );

  const handleSearch = useCallback((val: string) => {
    if (status !== 'loading') {
      dispatch(searchMovies({page: page, search: val}) as any);
    } else if (val.length === 0) {
      dispatch(emptySearch());
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const handleDelay = handleSearch;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
            dispatch(emptySearch());
          }}>
          <Image
            source={require('../../../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'gray'}
            onChangeText={handleDelay}
          />
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icons/cancel.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => <MovieCard item={item} loading={loading} />}
      />
    </SafeAreaView>
  );
};

export default Search;
