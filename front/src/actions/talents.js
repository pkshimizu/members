export const actionTypes = {
    LOAD: 'TALENTS_LOAD',
    SELECT: 'TALENTS_SELECT',
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
    })
};

export default actions;
