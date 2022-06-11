import React from 'react';
import { StyleSheet, LogBox, View } from 'react-native';
import { Provider } from 'react-redux';
import ignoreWarnings from 'ignore-warnings';
ignoreWarnings('warn',['ViewPropTypes','[react-native-gesture-handler]'])

LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])

import {store, persistor} from './src/store';
import Home from './src/components/HomeScreen';

export default function App() {
  return (
    <Provider store = { store }>      
       <View style={styles.container}>
          <Home />
        </View>       
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
