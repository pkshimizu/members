const initState = {
  loading: false,
};

export default (state = initState, action) => {
  if (action.type.endsWith('_SUCCESS') || action.type.endsWith('_FAIL')) {
    return { ...state, loading: false};
  }
  if (action.payload && action.payload.request) {
    return { ...state, loading: true};
  }
  return state;
};
