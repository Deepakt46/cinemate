import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#000',
    },
    subtext: {
      fontSize: 18,
      textAlign: 'center',
      color: '#000',
    },
  });
};

export default useStyle;
