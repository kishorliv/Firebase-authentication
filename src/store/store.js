import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { verifyUser } from '../redux/Session';
import { rootReducer } from "../redux/rootReducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancer(applyMiddleware(thunkMiddleware))
  );
  store.dispatch(verifyUser());
  return store;
}

const store = configureStore();

export { store };
