import React from 'react';
import {pure} from 'recompose';
import {Button, Grid, List, ListItem, ListItemText, withStyles} from '@material-ui/core';
import SearchForm from '../../containers/search/form';
import _ from 'lodash';

const styles = {
  area: {
    position: 'relative',
    minWidth: '640px',
    maxWidth: '640px',
  },
  seat: {
    position: 'absolute',
    height: '70px',
    width: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
};

const select_color = (talent, keyword) => {
  if (keyword) {
    if (_.includes(talent.name, keyword)
        || _.includes(talent.kana, keyword)
        || _.includes(talent.department, keyword))
      return '#ff9277';
  }
  return talent.classification === 'employee' ? '#00cc88' : '#44d5e5';
};

const Map = pure(({classes, floors, selected_floor, keyword, selectFloor, openTalentDetailDialog}) => (
  <Grid container justify="center" spacing={24}>
    <Grid item xs={12}>
      <Grid container justify="center">
        <Grid item xs={4}>
          <SearchForm />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid container justify="center">
        <Grid item xs={3}>
          <List component="nav">
            {floors.map(floor => (
              <ListItem
                key={`map_floor_${floor.id}`}
                button
                selected={floor.id === selected_floor.id}
                onClick={() => selectFloor(floor.id)}>
                <ListItemText primary={floor.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={9} className={classes.area}>
          <img src={`/api/floormaps/${selected_floor.id}`} width="100%" alt="floor map"/>
          {selected_floor.seats.map(seat => (
            <Button
              key={`map_seat_${seat.id}`}
              className={classes.seat}
              style={{
                top: `${seat.y}%`,
                left: `${seat.x}%`,
                backgroundColor: select_color(seat.talent, keyword)
              }}
              onClick={openTalentDetailDialog(seat.talent.id)}
            >
              {seat.talent.name}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
));

export default withStyles(styles)(Map);