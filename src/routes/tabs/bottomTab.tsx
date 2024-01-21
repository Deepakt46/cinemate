import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';

import Home from '../../screens/home';
import Trending from '../../screens/trending';
import Upcoming from '../../screens/upcoming';
import useStyles from './styles';

const Tab = createBottomTabNavigator();

interface TabScreen {
  name: string;
  component: React.ComponentType<any>;
  iconSource: number;
}

const tabBarIconStyle = {height: 20, width: 20};

const tabBarOptions = {
  headerShown: false,
  activeTintColor: 'blue',
  inactiveTintColor: 'gray',
};

const tabScreens: TabScreen[] = [
  {
    name: 'home',
    component: Home,
    iconSource: require('../../../assets/icons/home.png'),
  },
  {
    name: 'upcoming',
    component: Upcoming,
    iconSource: require('../../../assets/icons/check-in.png'),
  },
  {
    name: 'trending',
    component: Trending,
    iconSource: require('../../../assets/icons/trend.png'),
  },
];

const CustomTabBarIcon = (source: number, focused: boolean) => {
  const styles = useStyles();
  return (
    <View style={styles.tabStyle}>
      <Image
        source={source}
        style={[
          tabBarIconStyle,
          {
            tintColor: focused
              ? tabBarOptions.activeTintColor
              : tabBarOptions.inactiveTintColor,
          },
        ]}
      />
    </View>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      {tabScreens.map(({name, component, iconSource}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({focused}: BottomTabBarProps) =>
              CustomTabBarIcon(iconSource, focused),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MyTabs;
