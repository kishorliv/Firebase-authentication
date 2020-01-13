import { combineReducers } from 'redux';
import { sessionReducer } from './Session';

const rootReducer = combineReducers({
    session: sessionReducer,
});

export { rootReducer };
