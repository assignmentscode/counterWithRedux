import { combineReducers } from 'redux';
import counter from './reducer';

const counterApp = combineReducers({
    counter,
});
export default counterApp;