import React from 'react';
import {pure} from 'recompose';
import {Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography} from '@material-ui/core';
import SlackImage from '../../images/slack.png';
import {MoreHoriz, MailOutline, Today} from '@material-ui/icons';
import SearchForm from '../../containers/search/form';

const Search = pure(({talents, updateSearchKeyword, openTalentDetailDialog}) => (
  <Grid container justify="center" spacing={24}>
    <Grid item xs={12}>
      <Grid container justify="center">
        <Grid item xs={4}>
          <SearchForm />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={8}>
        {talents.map(talent => (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={`search_talent_${talent.id}`}>
            <Card>
              <CardMedia component="img" src={`/api/photos/${talent.id}`} />
              <CardContent>
                <Typography variant="subheading">{talent.kana}</Typography>
                <Typography variant="headline" gutterBottom>{talent.name}</Typography>
                <Typography variant="subheading" style={{minHeight: '24px'}}>{talent.position}</Typography>
                <Typography variant="subheading">{talent.department}</Typography>
              </CardContent>
              <CardActions disableActionSpacing={true}>
                <IconButton onClick={openTalentDetailDialog(talent.id)}>
                  <MoreHoriz />
                </IconButton>
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
));

export default Search;