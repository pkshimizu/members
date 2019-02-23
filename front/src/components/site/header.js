import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography, withStyles} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {pure} from 'recompose';
import {withRouter} from 'react-router';

const styles = {
  flex: {
    flexGrow: 1,
  }
};

const Header = pure(({classes, history}) => (
  <header>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          社員検索
        </Typography>
        <Button color="inherit" onClick={() => history.push('/')}>
          顔写真
        </Button>
        <Button color="inherit" onClick={() => history.push('/map')}>
          座席表
        </Button>
        <Button color="inherit" href="/manual.pdf" target="_blank">
          ヘルプ
        </Button>
        <IconButton color="inherit"><AccountCircle /></IconButton>
      </Toolbar>
    </AppBar>
  </header>
));

export default withStyles(styles)(withRouter(Header));