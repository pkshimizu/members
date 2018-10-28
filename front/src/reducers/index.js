import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import system from './system';
import dialog from './dialogs';
import talents from './talents';
import floors from './floors';

const reducers = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  system,
  talents,
  floors,
  dialog,
});

export default reducers;
