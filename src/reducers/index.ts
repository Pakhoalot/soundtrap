import { combineReducers } from 'redux';
import environmentReducer from './environmentReducer';
import sessionReducer from './sessionReducer';


const rootReducer = combineReducers({
  environment: environmentReducer,
  session: sessionReducer,
})

export default rootReducer;