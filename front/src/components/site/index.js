import React from 'react';
import Header from './header';
import {pure} from 'recompose';
import {Route, Switch} from 'react-router';
import Search from '../../containers/search';
import Map from '../../containers/map';
import {Grid, withStyles} from '@material-ui/core';
import Dialogs from '../../containers/dialogs';
import Loading from './loading';

const styles = {
  main: {
    marginTop: '64px'
  }
};

const Layout = pure(({classes, loading}) => (
  <div>
    <Header />
    <main className={classes.main}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/map" component={Map} />
          </Switch>
        </Grid>
      </Grid>
    </main>
    <Dialogs />
    <Loading load={loading} />
  </div>
));

export default withStyles(styles)(Layout);
