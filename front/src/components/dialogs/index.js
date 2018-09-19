import React from 'react';
import {pure} from 'recompose';
import TalentDetailDialog from '../../containers/dialogs/talent_detail';
import SelfIntroductionEditDialog from '../../containers/dialogs/self_introduction_edit_dialog';

const Dialogs = pure(({state, openDialog}) => (
  <div>
    <TalentDetailDialog open={state.talent_detail} onClose={() => openDialog('talent_detail', false)} />
    <SelfIntroductionEditDialog open={state.self_introduction_edit} onClose={() => openDialog('self_introduction_edit', false)}/>
  </div>
));

export default Dialogs;