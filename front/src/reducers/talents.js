import { actionTypes } from '../actions/talents';
import _ from 'lodash';

const initState = {
  talents: [],
  selected_talent: null,
  search_keyword: '',
};

const success = (key) => key + '_SUCCESS';

const updateSelfIntroduction = (talents, action) => {
  const talent = action.payload.data
  return _.map(talents, (t) => {
    if (t.id === talent.id) return talent;
    return t;
  });
};

export default (state = initState, action) => {
  if (!action.type.startsWith('TALENTS_')) {
    return state;
  }
  switch (action.type) {
  case success(actionTypes.LOAD):
    return { ...state, talents: action.payload.data };
  case actionTypes.SELECT:
    return { ...state, selected_talent: action.payload.talent_id };
  case actionTypes.SEARCH:
    return { ...state, search_keyword: action.payload.keyword };
  case success(actionTypes.UPDATE_SELF_INTRODUCTION):
    return { ...state, talents: updateSelfIntroduction(state.talents, action)};
  default:
    return state;
  }
};
