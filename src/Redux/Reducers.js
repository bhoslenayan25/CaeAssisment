import { combineReducers } from 'redux';
import rosterReducer from '../Screens/Roster/redux/reducer'
import { log } from '../Utilities/Utility';
const appReducer = combineReducers({
  roster: rosterReducer
});

const rootReducer = (state, action) => {
  log('===ACTION===', action.type, state);
  return appReducer(state, action);
};

export default rootReducer;
