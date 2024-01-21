import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';

import {withToast} from './src/services/toast';
import Route from './src/routes';
import SplashScreen from './src/screens/splash';
import store from './src/redux/store';
import {interceptor} from './src/services/interceptor/restResponse';

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide();
    interceptor(); // error handling
  }, []);

  const [showSplashScreen, setShowSplashScreen] = React.useState(true); // used a custom splash screen to show an animation
  React.useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {showSplashScreen ? <SplashScreen /> : <Route />}
      </NavigationContainer>
    </Provider>
  );
};

export default withToast(App);
