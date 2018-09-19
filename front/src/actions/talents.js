export const actionTypes = {
  LOAD: 'TALENTS_LOAD',
  SELECT: 'TALENTS_SELECT',
  SEARCH: 'TALENTS_SEARCH',
  UPDATE_SELF_INTRODUCTION: 'TALENTS_UPDATE_SELF_INTRODUCTION',
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
  }),
  select: (talent_id) => ({
    type: actionTypes.SELECT,
    payload: {
      talent_id
    }
  }),
  search: (keyword) => ({
    type: actionTypes.SEARCH,
    payload: {
      keyword
    }
  }),
  updateSelfIntroduction: (talent_id, message, password) => ({
    type: actionTypes.UPDATE_SELF_INTRODUCTION,
    payload: {
      request: {
        method: 'PATCH',
        url: `/api/talents/${talent_id}/self_introduction/`,
        data: {
          message,
          password
        }
      }
    }
  })
};

export default actions;
