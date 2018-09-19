import React from 'react';
import {pure} from 'recompose';
import {Card, CardMedia, CardContent, Dialog, IconButton, Grid, Typography} from '@material-ui/core';
import {Edit, MailOutline} from '@material-ui/icons';
import SlackImage from '../../images/slack.png';

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
          <Typography component="pre">
            {talent.self_introduction}
            <IconButton
              onClick={() => openSelfIntroductionEditDialog()}
            >
              <Edit/>
            </IconButton>
          </Typography>
          <a href={'mailto:' + talent.mail} target="_blank">
            <MailOutline />
          </a>
          <a href={talent.slack} target="_blank">
            <img style={{width: '24px', height: '24px'}} src={SlackImage} alt="slack icon" />
          </a>
        </CardContent>
      </Card>
    </Grid>
  </Dialog>
));

export default TalentDetailDialog;
