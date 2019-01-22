import React from 'react';
import {pure} from 'recompose';
import {Button, DialogActions, DialogContent, DialogTitle, Grid, TextField} from '@material-ui/core';
import {Field} from 'redux-form';

const TextInput = pure(({
  defaultValue, input, ...custom
}) => (
  <TextField {...input} {...custom} value={null} defaultValue={defaultValue} />
));

const SelfIntroductionEditForm = pure(({talent, onClose, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <DialogTitle>自己紹介を編集</DialogTitle>
    <DialogContent>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Field
            component={TextInput}
            name="message"
            multiline
            fullWidth
            rows={5}
            autoFocus
            placeholder="自己紹介文を入力してください"
            defaultValue={talent.self_introduction}
            style={{minWidth: "500px"}}
          />
        </Grid>
        <Grid item xs={12} style={{display: 'none'}}>
          <Field component={TextInput} name="password" fullWidth type="password" label="パスワード"/>
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>キャンセル</Button>
      <Button color="primary" type="submit">更新</Button>
    </DialogActions>
  </form>
));

export default SelfIntroductionEditForm;
