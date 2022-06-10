import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GifDataReducer from './gifDataReducer';
import ListReducer from './listReducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['viewableIDs']
  };

  const appReducer = combineReducers({
    GifDataReducer: persistReducer(persistConfig, GifDataReducer),
    ListReducer: persistReducer(persistConfig, ListReducer),
  })

  export default (reduxReducers = (state, action) => {
    return appReducer(state, action);
  });