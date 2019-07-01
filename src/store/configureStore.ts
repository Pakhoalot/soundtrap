import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleware = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState: object | void) {
  const initial = initialState ? initialState : undefined;
  const store = createStoreWithMiddleware(rootReducer, initial);
  return store;
}