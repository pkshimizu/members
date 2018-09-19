import { actionTypes } from '../actions/dialogs';

const initState = {
  talent_detail: false,
  self_introduction_edit: false,
  error: false,
};

export default (state = initState, action) => {
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
