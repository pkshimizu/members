import React from 'react';
import Header from "./header";
import {pure} from "recompose";
import {Route, Switch} from "react-router";
import Search from "../search";
import Map from '../map';
import {Grid, withStyles} from "@material-ui/core";

const styles = {
  main: {
    marginTop: '64px'
  }
};

const Layout = pure(({classes}) => (
  <div>
    <Header />
    <main className={classes.main}>
      <Grid container justify="center">
        <Grid xs={10}>
          <Switch>
            <Route path="/" component={Search} />
            <Route path="/map" component={Map} />
          </Switch>
        </Grid>
      </Grid>
    </main>
  </div>
));

export default withStyles(styles)(Layout);
