import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import dialog from './dialogs';
import talents from './talents';
import floors from './floors';

const reducers = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  talents,
  floors,
  dialog,
});

export default reducers;
