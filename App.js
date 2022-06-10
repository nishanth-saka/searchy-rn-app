import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './src/store';
import Home from './src/components/HomeScreen';

export default function App() {
  return (
    <Provider store = { store }>      
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Home />
        </View>          
      </PersistGate>      
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
