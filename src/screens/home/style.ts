import {StyleSheet, useWindowDimensions} from 'react-native';
import {Colors, FontFamily} from '../../common/common';

const useStyles = () => {
  const {height, width} = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    upcomingMovies: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontFamily: FontFamily.MEDIUM,
      fontSize: 16,
      color: Colors.text,
      marginVertical: 5,
    },
    movieCard: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    poster: {
      borderRadius: 20,
      height: height * 0.4,
      width: width * 0.6,
    },
    rating: {
      fontFamily: FontFamily.LIGHT,
      fontSize: 12,
      color: Colors.text,
    },
    upcomingMovieTxt: {
      fontFamily: FontFamily.MEDIUM,
      textAlign: 'left',
      marginBottom: 10,
      fontSize: 16,
      color: '#000',
    },
    movieCardHeaderText: {
      fontFamily: FontFamily.MEDIUM,
      textAlign: 'left',
      marginBottom: 10,
      fontSize: 16,
      color: '#000',
    },
    emptyComponent: {
      flex: 1,
    },
    noDataImg: {
      height: height / 3,
      width: width - 40,
    },
  });
};

export default useStyles;
