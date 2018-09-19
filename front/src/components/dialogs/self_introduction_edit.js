import React from 'react';
import {pure} from 'recompose';
import {Dialog} from '@material-ui/core';
import SelfIntroductionEditForm from '../../containers/dialogs/self_introduction_edit_form';

const SelfIntroductionEditDialog = pure(({open, onClose, talent, updateSelfIntroduction}) => (
  <Dialog open={open} onClose={onClose}>
    <SelfIntroductionEditForm onClose={onClose} onSubmit={updateSelfIntroduction.bind(null, talent.id)}/>
  </Dialog>
));

export default SelfIntroductionEditDialog;
