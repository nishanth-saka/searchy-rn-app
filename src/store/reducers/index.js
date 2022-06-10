import {combineReducers} from 'redux';
import GifDataReducer from './gifDataReducer';
import ListReducer from './listReducers';

  const appReducer = combineReducers({
    GifDataReducer,
    ListReducer,
  })

  export default (reduxReducers = (state, action) => {
    return appReducer(state, action);
  });