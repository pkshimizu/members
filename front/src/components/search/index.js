import React from 'react';
import {pure} from "recompose";
import {Card, CardActions, CardContent, CardMedia, Grid, IconButton, TextField, Typography} from "@material-ui/core";
import Image from '../../images/member_sample.jpg';
import SlackImage from '../../images/slack.png';
import {MoreHoriz, MailOutline} from '@material-ui/icons';

const Search = pure(({openTalentDetailDialog}) => (
  <Grid container justify="center" spacing="24">
    <Grid item xs={4}>
      <TextField fullWidth placeholder="検索したい人の名前や部署名" />
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing="8">
        {Array(10).fill(0).map(() => (
          <Grid item xs={2}>
            <Card>
              <CardMedia component="img" height="140" image={Image} />
              <CardContent>
                <Typography variant="subheading">しめい</Typography>
                <Typography variant="headline">氏名</Typography>
                <Typography>役職</Typography>
                <Typography>部署</Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={openTalentDetailDialog}>
                  <MoreHoriz />
                </IconButton>
                <IconButton>
                  <MailOutline />
                </IconButton>
                <IconButton>
                  <img width="24px" height="24px" src={SlackImage} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
));

export default Search;