

import { combineReducers } from 'redux';
import bread from "./breadcrumbreducer";

const allReducers = {
    bread
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;

