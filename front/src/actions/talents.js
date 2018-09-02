export const actionTypes = {
  LOAD: 'TALENTS_LOAD',
};

const actions = {
  load: () => ({
    type: actionTypes.LOAD,
    payload: {
      request: {
        method: 'GET',
        url: '/api/talents'
      }
    }
  })
};

export default actions;
