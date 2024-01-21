import {StyleSheet} from 'react-native';
import {FontFamily, Colors} from '../common/common';

const useStyles = () => {
  return StyleSheet.create({
    header: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    headerText: {
      fontSize: 20,
      fontFamily: FontFamily.BOLD, // Use the FontFamily constant
      color: Colors.text,
    },
    searchIcon: {
      height: 24,
      width: 24,
      resizeMode: 'contain',
    },
  });
};

export default useStyles;
