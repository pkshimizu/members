export const actionTypes = {
  OPEN: 'DIALOG_OPEN',
};

const actions = {
  open: (name, open) => ({
    type: actionTypes.OPEN,
    payload: {
      open,
      name,
    }
  })
};

export default actions;
