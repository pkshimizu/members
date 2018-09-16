import _ from 'lodash';
import { actionTypes } from '../actions/floors';

const initState = {
  floors: [],
  selected_floor: {
    seats: []
  },
};

const success = (key) => key + '_SUCCESS';

export default (state = initState, action) => {
  if (!action.type.startsWith('FLOORS_')) {
    return state;
  }
  switch (action.type) {
  case success(actionTypes.LOAD):
    return { ...state, floors: action.payload.data, selected_floor: _.head(action.payload.data) };
  case actionTypes.SELECT:
    return { ...state, selected_floor: state.floors[_.findIndex(state.floors, {id: action.payload.floor_id})]};
  default:
    return state;
  }
};
