import React from 'react';
import {pure} from 'recompose';
import {Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography, withStyles} from '@material-ui/core';
import SlackImage from '../../images/slack.png';
import {MoreHoriz, MailOutline, Today, AccountCircle} from '@material-ui/icons';
import SearchForm from '../../containers/search/form';
import TalentPopover from "../../containers/search/popover";

const styles = {
  cards: {
    maxWidth: '1920px',
    paddingLeft: '15px',
    paddingRight: '15px',
    overflow: 'hidden',
  },
  '@media (max-width: 630px)': {
    cards: {
      maxWidth: '250px',
    },
  },
  card: {
    float: 'left',
    maxWidth: '240px',
    minWidth: '240px',
    margin: '5px',
  },
  talentImage: {
    minHeight: '240px',
    maxHeight: '240px',
  },
  cardContent: {
    minHeight: '120px',
    maxHeight: '120px',
  },
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
    <div style={{minHeight: '24px'}}/>
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

const Search = pure(({
  classes,
  talents,
  updateSearchKeyword,
  openTalentDetailDialog,
  openTalentPopover,
  closeTalentPopover
}) => (
  <Grid container justify="center" spacing={24}>
    <Grid item xs={12}>
      <Grid container justify="center">
        <Grid item xs={12} md={4}>
          <SearchForm />
        </Grid>
      </Grid>
    </Grid>
    <TalentPopover/>
    <div className={classes.cards}>
      {talents.map((talent, index) => (
        <Card
          id={`talent-card-${index}`}
          className={classes.card}
          key={`search_talent_${talent.id}`}
          onMouseEnter={openTalentPopover(talent.id)}
          onMouseLeave={closeTalentPopover()}
        >
          <CardMedia className={classes.talentImage} component="img" src={`/api/photos/${talent.id}`} />
          <CardContent className={classes.cardContent}>
            {departmentAndPosition(talent)}
            <div style={{overflow: 'hidden'}}>
              <AccountCircle style={{float: 'left', width: '25px', color: talent.status.color}}/>
              <div style={{overflow: 'hidden'}}>
                <Typography variant="subheading">{talent.kana}</Typography>
                <Typography variant="headline" gutterBottom>{talent.name}</Typography>
                <Typography variant="subheading" style={{minHeight: '24px', wordWrap: 'break-word'}}>{talent.business}</Typography>
              </div>
            </div>
          </CardContent>
          <CardActions disableActionSpacing={true}>
            <IconButton onClick={openTalentDetailDialog(talent.id)}>
              <MoreHoriz />
            </IconButton>
            {scheduleButton(talent)}
            {mailButton(talent)}
            {slackButton(talent)}
          </CardActions>
        </Card>
      ))}
    </div>
  </Grid>
));

export default withStyles(styles)(Search);