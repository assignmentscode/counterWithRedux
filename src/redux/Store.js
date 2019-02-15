import { createStore } from 'redux';
import counterApp from './reducer/index';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = () => createStore(
  counterApp,
  enhancer,
);

export default store;
