import React from 'react';
import {pure} from 'recompose';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography} from '@material-ui/core';

const SelfIntroductionEditDialog = pure(({talent, open, onClose}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>自己紹介を編集</DialogTitle>
    <DialogContent>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <TextField multiline fullWidth rows={5} autoFocus placeholder="自己紹介文を入力してください"/>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth type="password" label="パスワード"/>
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>キャンセル</Button>
      <Button color="primary">保存</Button>
    </DialogActions>
  </Dialog>
));

export default SelfIntroductionEditDialog;
