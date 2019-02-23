import React from 'react';
import {pure} from 'recompose';
import {Card, CardMedia, CardContent, Dialog, IconButton, Grid, Paper, Typography, withStyles} from '@material-ui/core';
import {AccountCircle, Edit, MailOutline, Phone, Today} from '@material-ui/icons';
import SlackImage from '../../images/slack.png';
import _ from 'lodash';

const styles = theme => ({
  introduction: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    wordWrap: 'break-word',
  }
});

const phoneText = (talent) => {
  if (talent.phone) {
    return (<Typography variant="subheading" gutterBottom><Phone/>{talent.phone}</Typography>);
  }
  return (<Typography variant="subheading" gutterBottom></Typography>);
};

export const selfIntroductionText = (talent) => {
  return _.split(talent.self_introduction, /\n/)
    .map((text, index) => (<span key={`introduction_text_${index}`}>{text}<br /></span>));
};

const departmentAndPosition = (talent) => {
  if (talent.department && talent.position) {
    return (
      <div style={{minHeight: '24px'}}>
        <Typography variant="caption" style={{display: 'inline', paddingRight: '5px'}}>{talent.department}</Typography>
        <Typography variant="caption" style={{display: 'inline'}}>{talent.position}</Typography>
      </div>
    );
  } else if (talent.department) {
    return (
      <div style={{minHeight: '24px'}}>
        <Typography variant="caption" style={{display: 'inline'}}>{talent.department}</Typography>
      </div>
    );
  } else if (talent.position) {
    return (
      <div style={{minHeight: '24px'}}>
        <Typography variant="caption" style={{display: 'inline'}}>{talent.position}</Typography>
      </div>
    );
  }
  return (
    <div style={{minHeight: '24px'}}></div>
  );
};
const scheduleButton = (talent) => {
  if (talent.mail) {
    return (
      <a href={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(talent.mail)}&ctz=Asia%2FTokyo`} target="_blank">
        <IconButton>
          <Today />
        </IconButton>
      </a>
    );
  }
  return (<div/>);
};
const mailButton = (talent) => {
  if (talent.mail) {
    return (
      <a href={'mailto:' + talent.mail} target="_blank">
        <IconButton>
          <MailOutline />
        </IconButton>
      </a>
    );
  }
  return (<div/>);
};
const slackButton = (talent) => {
  if (talent.slack) {
    return (
      <a href={talent.slack} target="_blank">
        <IconButton>
          <img width="24px" height="24px" src={SlackImage} alt="slack icon"/>
        </IconButton>
      </a>
    );
  }
  return (<div/>);
};

const talentCard = (classes, talent, openSelfIntroductionEditDialog) => {
  if(!talent || !talent.status) {
    return (<Card/>);
  }
  return (
    <Card>
      <CardMedia component="img" src={`/api/photos/${talent.id}`} />
      <CardContent>
        {departmentAndPosition(talent)}
        <div style={{overflow: 'hidden'}}>
          <AccountCircle style={{float: 'left', width: '25px', color: talent.status.color}}/>
          <div style={{overflow: 'hidden'}}>
            <Typography variant="subheading">{talent.kana}</Typography>
            <Typography variant="headline" gutterBottom>{talent.name}</Typography>
            <Typography variant="subheading" style={{minHeight: '24px', wordWrap: 'break-word'}}>{talent.business}</Typography>
            {phoneText(talent)}
          </div>
        </div>
        <Paper className={classes.introduction}>
          <Typography>
            {selfIntroductionText(talent)}
          </Typography>
          <IconButton
            onClick={() => openSelfIntroductionEditDialog()}
          >
            <Edit/>
          </IconButton>
        </Paper>
        {scheduleButton(talent)}
        {mailButton(talent)}
        {slackButton(talent)}
      </CardContent>
    </Card>
  )
};

const TalentDetailDialog = pure(({classes, talent, open, onClose, openSelfIntroductionEditDialog}) => (
  <Dialog open={open} onClose={onClose} maxWidth="xs">
    <Grid item xs={12}>
      {talentCard(classes, talent, openSelfIntroductionEditDialog)}
    </Grid>
  </Dialog>
));

export default withStyles(styles)(TalentDetailDialog);
