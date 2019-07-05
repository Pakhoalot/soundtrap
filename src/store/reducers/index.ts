import { combineReducers } from 'redux';
import environmentReducer from './environmentReducer';
import sessionReducer from './sessionReducer';
import songsFilterReducer from './songsFilterReducer';
import tracksReducer from './tracksReducer';


const rootReducer = combineReducers({
  environment: environmentReducer,
  session: sessionReducer,
  songsFilter: songsFilterReducer,
  track: tracksReducer,
})

export default rootReducer;