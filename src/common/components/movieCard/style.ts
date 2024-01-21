import {StyleSheet} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {Colors, FontFamily} from '../../common';

const useStyles = () => {
  const {height, width} = useWindowDimensions();
  return StyleSheet.create({
    card: {
      height: height / 5,
      width: (width - 60) / 2,
      borderRadius: 20,
      resizeMode: 'cover',
    },
    mainWrapper: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    title: {
      fontFamily: FontFamily.MEDIUM,
      fontSize: 16,
      color: Colors.text,
      marginVertical: 5,
      textAlign: 'center',
    },
  });
};

export default useStyles;
