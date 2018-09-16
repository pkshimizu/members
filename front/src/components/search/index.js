import React from 'react';
import {pure} from 'recompose';
import {Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography} from '@material-ui/core';
import SlackImage from '../../images/slack.png';
import {MoreHoriz, MailOutline} from '@material-ui/icons';
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
                    <Grid item xs={6} sm={6} md={4} lg={2} key={`search_talent_${talent.id}`}>
                        <Card>
                            <CardMedia component="img" src={`/api/photos/${talent.id}`} />
                            <CardContent>
                                <Typography variant="subheading">{talent.kana}</Typography>
                                <Typography variant="headline">{talent.name}</Typography>
                                <Typography>{talent.position}</Typography>
                                <Typography>{talent.department}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton onClick={openTalentDetailDialog(talent.id)}>
                                    <MoreHoriz />
                                </IconButton>
                                <IconButton>
                                    <a href={'mailto:' + talent.mail} target="_blank">
                                        <MailOutline />
                                    </a>
                                </IconButton>
                                <IconButton>
                                    <a href={talent.slack} target="_blank">
                                        <img width="24px" height="24px" src={SlackImage} alt="slack icon"/>
                                    </a>
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