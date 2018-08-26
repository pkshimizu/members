import React from 'react';
import {pure} from "recompose";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography} from "@material-ui/core";
import Image from '../../images/member_sample.jpg';

const Search = pure(() => (
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
                <Typography variant="headline">氏名</Typography>
                <Typography>デザイナー</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">詳細</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
));

export default Search;