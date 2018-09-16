import React from 'react';
import {pure} from 'recompose';
import {Card, CardMedia, CardContent, Dialog, IconButton, Grid, Typography} from '@material-ui/core';
import {MailOutline} from '@material-ui/icons';
import SlackImage from '../../images/slack.png';

const TalentDetailDialog = pure(({talent, open, onClose}) => (
  <Dialog open={open} onClose={onClose}>
    <Grid item xs={12}>
      <Card>
        <CardMedia component="img" src={`/api/photos/${talent.id}`} />
        <CardContent>
          <Typography variant="subheading">{talent.kana}</Typography>
          <Typography variant="headline">{talent.name}</Typography>
          <Typography>{talent.position}</Typography>
          <Typography>{talent.department}</Typography>
          <IconButton>
            <a href={'mailto:' + talent.mail} target="_blank">
              <MailOutline />
            </a>
          </IconButton>
          <IconButton>
            <a href={talent.slack} target="_blank">
              <img style={{width: '24px', height: '24px'}} src={SlackImage} alt="slack icon" />
            </a>
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  </Dialog>
));

export default TalentDetailDialog;
