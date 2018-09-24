import { actionTypes } from '../actions/dialogs';

const initState = {
  talent_detail: false,
  self_introduction_edit: false,
  error: false,
  error_message: ''
};

export default (state = initState, action) => {
  if (action.type.endsWith('_FAIL')) {
    let message = action.error.message;
    if (action.error.response.data && action.error.response.data.message) {
      message = action.error.response.data.message
    }
    return { ...state, error: true, error_message: message };
  }
  if (!action.type.startsWith('DIALOG_')) {
    return state;
  }
  switch (action.type) {
  case actionTypes.OPEN:
    return { ...state, [action.payload.name]: action.payload.open };
  default:
    return state;
  }
};
