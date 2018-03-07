import {combineReducers} from 'redux';
import userDetailReducer from './reducer.js';
import userSignalmentDetails from './singnalment.js'

const allReducers = combineReducers({
  userDetail: userDetailReducer,
  signalmentDetails: userSignalmentDetails
});

export default allReducers;
