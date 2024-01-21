import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import useStyle from './styles';

const SplashScreen = () => {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeIn" style={styles.title}>
        CineMate
      </Animatable.Text>
      <Animatable.Text animation="slideInUp" delay={500} style={styles.subtext}>
        Where you can find the movies
      </Animatable.Text>
    </View>
  );
};

export default SplashScreen;
