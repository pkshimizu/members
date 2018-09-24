import React from 'react';
import {pure} from 'recompose';
import {Dialog, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

const ErrorDialog = pure(({message, open, onClose}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>
      エラーが発生しました
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        {message}
      </DialogContentText>
    </DialogContent>
  </Dialog>
));

export default ErrorDialog;
