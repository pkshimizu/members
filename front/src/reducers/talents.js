import { actionTypes } from '../actions/talents';

const initState = {
  talents: []
};

export default (state = initState, action) => {
  if (!action.type.startsWith('TALENTS_')) {
    return state;
  }
  switch (action.type) {
    case actionTypes.LOAD:
      return { ...state, talents: action.payload.data };
    default:
      return state;
  }
};
