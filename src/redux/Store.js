import { createStore } from 'redux'
import counterApp from './reducer/index';

const store = () => createStore(
    counterApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;