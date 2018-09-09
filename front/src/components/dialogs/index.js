import React from 'react';
import {pure} from "recompose";
import TalentDetailDialog from "../../containers/dialogs/talent_detail";

const Dialogs = pure(({state, openDialog}) => (
  <div>
    <TalentDetailDialog open={state.talent_detail} onClose={() => openDialog('talent_detail', false)} />
  </div>
));

export default Dialogs;