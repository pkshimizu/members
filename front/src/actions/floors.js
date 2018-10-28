export const actionTypes = {
  LOAD: 'FLOORS_LOAD',
  SELECT: 'FLOORS_SELECT',
};

const actions = {
  load: () => ({
    type: actionTypes.LOAD,
    payload: {
      request: {
        method: 'GET',
        url: '/api/floors'
      }
    },
  }),
  select: (floor_id) => ({
    type: actionTypes.SELECT,
    payload: {
      floor_id
    }
  })
};

export default actions;
