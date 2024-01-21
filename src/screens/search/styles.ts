import {StyleSheet} from 'react-native';
import {FontFamily} from '../../common/common';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    searchBarContainer: {
      flexDirection: 'row',
      height: 40,
      alignItems: 'center',
    },
    searchBox: {
      borderWidth: 1,
      paddingHorizontal: 10,
      width: '90%',
      height: 40,
      borderRadius: 20,
      fontFamily: FontFamily.MEDIUM,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      height: 24,
      width: 24,
    },
    backIcon: {
      height: 35,
      width: 35,
      resizeMode: 'contain',
      marginRight: 5,
    },
  });
};

export default useStyles;
