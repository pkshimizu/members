import { actionTypes } from '../actions/talents';

const initState = {
    talents: [],
    selected_talent: null,
    search_keyword: '',
};

const success = (key) => key + '_SUCCESS';

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
    default:
        return state;
    }
};
