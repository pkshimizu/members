import React from 'react';
import {pure} from 'recompose';
import {Card, CardMedia, CardContent, Dialog, IconButton, Grid, Typography} from '@material-ui/core';
import {Edit, MailOutline, Phone, Today} from '@material-ui/icons';
import SlackImage from '../../images/slack.png';

const phoneText = (talent) => {
  if (talent.phone) {
    return (<Typography variant="subheading" gutterBottom><Phone/>{talent.phone}</Typography>);
  }
  return (<Typography variant="subheading" gutterBottom></Typography>);
};

const TalentDetailDialog = pure(({talent, open, onClose, openSelfIntroductionEditDialog}) => (
  <Dialog open={open} onClose={onClose}>
    <Grid item xs={12}>
      <Card>
        <CardMedia component="img" src={`/api/photos/${talent.id}`} />
        <CardContent>
          <Typography variant="subheading">{talent.kana}</Typography>
          <Typography variant="headline" gutterBottom>{talent.name}</Typography>
          <Typography variant="subheading" style={{minHeight: '24px'}}>{talent.position}</Typography>
          <Typography variant="subheading" gutterBottom>{talent.department}</Typography>
          {phoneText(talent)}
          <Typography component="pre">
            {talent.self_introduction}
            <IconButton
              onClick={() => openSelfIntroductionEditDialog()}
            >
              <Edit/>
            </IconButton>
          </Typography>
          <a href={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(talent.mail)}&ctz=Asia%2FTokyo`} target="_blank">
            <IconButton>
              <Today />
            </IconButton>
          </a>
          <a href={'mailto:' + talent.mail} target="_blank">
            <IconButton>
              <MailOutline />
            </IconButton>
          </a>
          <a href={talent.slack} target="_blank">
            <IconButton>
              <img width="24px" height="24px" src={SlackImage} alt="slack icon"/>
            </IconButton>
          </a>
        </CardContent>
      </Card>
    </Grid>
  </Dialog>
));

export default TalentDetailDialog;
