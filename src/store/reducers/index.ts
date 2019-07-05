import { combineReducers } from 'redux';
import environmentReducer from './environmentReducer';
import sessionReducer from './sessionReducer';
import songsFilterReducer from './songsFilterReducer';


const rootReducer = combineReducers({
  environment: environmentReducer,
  session: sessionReducer,
  songsFilter: songsFilterReducer,
})

export default rootReducer;