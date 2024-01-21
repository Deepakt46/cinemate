import {StyleSheet, useWindowDimensions} from 'react-native';
import {FontFamily, Colors} from '../../common/common';

const useStyles = () => {
  const {height, width} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    posterWrap: {
      flex: 1,
      justifyContent: 'flex-end',
      resizeMode: 'center',
    },
    titleText: {
      fontFamily: FontFamily.BOLD,
      fontSize: 35,
      marginBottom: 8,
      textAlign: 'center',
      color: '#000',
    },
    dateText: {
      fontFamily: FontFamily.MEDIUM,
      fontSize: 16,
      color: '#717171',
      marginBottom: 5,
      textAlign: 'center',
    },
    description: {
      flex: 0.4,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 20,
    },
    duration: {
      fontSize: 16,
      fontFamily: FontFamily.MEDIUM,
      marginBottom: 20,
      textAlign: 'center',
      color: '#717171',
    },
    overView: {
      fontFamily: FontFamily.BOLD,
      fontSize: 18,
      marginBottom: 10,
      textAlign: 'center',
      color: '#000',
    },
    review: {
      fontFamily: FontFamily.NORMAL,
      fontSize: 14,
      textAlign: 'center',
      color: '#000',
    },
    backButton: {
      position: 'absolute',
      left: 20,
      top: 40,
    },
    backIcon: {
      height: 40,
      width: 40,
      tintColor: '#fff',
    },
    noData: {
      height: height / 2,
      width: width - 40,
    },
    noDataWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rating: {
      fontSize: 16,
      fontFamily: FontFamily.NORMAL,
      textAlign: 'center',
      color: Colors.primary,
      marginBottom: 8,
    },
  });
};

export default useStyles;
