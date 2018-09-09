import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import dialog from './dialogs';
import talents from './talents';

const reducers = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  talents,
  dialog,
});

export default reducers;
