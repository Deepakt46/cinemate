import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import MovieDetails from '../screens/movieDetails';
import MyTabs from './tabs/bottomTab';
import {Image, StatusBar, Text, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import Search from '../screens/search';

const Stack = createNativeStackNavigator();

//custom header
const Header = () => {
  const styles = useStyles();
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView edges={['top']} style={styles.header}>
      <Text style={styles.headerText}>CineMate</Text>
      <TouchableOpacity onPress={() => navigation.navigate('search')}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Route = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
      <Stack.Navigator initialRouteName="bottomTab">
        <Stack.Screen
          name="bottomTab"
          component={MyTabs}
          options={{header: Header}}
        />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Route;
