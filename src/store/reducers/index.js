import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GifDataReducer from './gifDataReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['gifData']
  };

  const appReducer = combineReducers({
    GifDataReducer: persistReducer(persistConfig, GifDataReducer),
  })

  export default (reduxReducers = (state, action) => {
    return appReducer(state, action);
  });