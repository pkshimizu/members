export const actionTypes = {
    LOAD: 'TALENTS_LOAD',
    SELECT: 'TALENTS_SELECT',
    SEARCH: 'TALENTS_SEARCH',
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
    })
};

export default actions;
