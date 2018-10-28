import React from 'react';
import {pure} from 'recompose';
import {CircularProgress, Modal, Typography, withStyles} from '@material-ui/core';

const styles = {
  root: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(99, 99, 99, 0.5)',
    position: 'absolute',
    zIndex: 10000,
    overflow: 'hidden',
  },
  message: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    textAlign: 'center',
  },
  text: {
    color: 'white',
  }
};

const Loading = pure(({classes, load}) => (
  <Modal
    open={load}
  >
    <div className={classes.root}>
      <div className={classes.message}>
        <CircularProgress />
        <Typography variant="headline" className={classes.text}>時間がかかる場合があります</Typography>
        <Typography variant="headline" className={classes.text}>しばらくお待ち下さい</Typography>
      </div>
    </div>
  </Modal>
));

export default withStyles(styles)(Loading);
