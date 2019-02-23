export const actionTypes = {
  OPEN: 'DIALOG_OPEN',
};

const actions = {
  open: (name, open, top = 0, left = 0) => ({
    type: actionTypes.OPEN,
    payload: {
      open,
      name,
      top,
      left,
    }
  })
};

export default actions;
