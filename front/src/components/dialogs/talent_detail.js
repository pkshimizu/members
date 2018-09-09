import React from 'react';
import {pure} from "recompose";
import {Card, CardMedia, CardContent, Dialog, IconButton, Grid, Typography} from "@material-ui/core";
import Image from '../../images/member_sample.jpg';
import {MailOutline} from '@material-ui/icons';
import SlackImage from '../../images/slack.png';

const TalentDetailDialog = pure(({open, onClose}) => (
  <Dialog open={open} onClose={onClose}>
    <Grid xs={12}>
      <Card>
        <CardMedia component="img" image={Image} />
        <CardContent>
          <Typography variant="headline">氏名</Typography>
          <Typography>役職</Typography>
          <Typography>部署</Typography>
          <IconButton>
            <MailOutline />
          </IconButton>
          <IconButton>
            <img style={{width: "24px", height: "24px"}} src={SlackImage} alt="slack icon" />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  </Dialog>
));

export default TalentDetailDialog;
