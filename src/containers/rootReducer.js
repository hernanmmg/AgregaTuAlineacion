import { combineReducers } from 'redux';
import { entrenadorReducer } from './Team';

const rootReducer = combineReducers({
  entrenadorReducer,
});

export default rootReducer;
