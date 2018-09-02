import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import dialog from './dialogs';

const reducers = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  dialog,
});

export default reducers;
