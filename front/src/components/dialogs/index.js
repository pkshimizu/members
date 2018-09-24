import React from 'react';
import {pure} from 'recompose';
import TalentDetailDialog from '../../containers/dialogs/talent_detail';
import SelfIntroductionEditDialog from '../../containers/dialogs/self_introduction_edit';
import ErrorDialog from '../../containers/dialogs/error';

const Dialogs = pure(({state, openDialog}) => (
  <div>
    <ErrorDialog open={state.error} onClose={() => openDialog('error', false)} />
    <TalentDetailDialog open={state.talent_detail} onClose={() => openDialog('talent_detail', false)} />
    <SelfIntroductionEditDialog open={state.self_introduction_edit} onClose={() => openDialog('self_introduction_edit', false)}/>
  </div>
));

export default Dialogs;