import React from 'react';
import {pure} from 'recompose';
import {Paper, Typography, withStyles} from '@material-ui/core'
import {selfIntroductionText} from "../dialogs/talent_detail";
import _ from 'lodash';

const styles = {
  root: {
    position: 'fixed',
    zIndex: '1000',
    padding: '10px',
  }
};

const TalentPopover = pure(({
  classes,
  open,
  selected_talent,
  top,
  left,
}) => (
  <Paper
    className={classes.root}
    style={{
      top: top,
      left: left,
      display: (open && !_.isEmpty(selected_talent.self_introduction))? 'block' : 'none'
    }}>
    <Typography>{selfIntroductionText(selected_talent)}</Typography>
  </Paper>
));

export default withStyles(styles)(TalentPopover);