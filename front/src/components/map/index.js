import React from 'react';
import {pure} from "recompose";
import {Button, Grid, TextField, withStyles} from "@material-ui/core";
import FloorImage from '../../images/map.png';

const styles = {
  area: {
    position: "relative"
  },
  seat: {
    position: "absolute",
    height: "70px",
    width: "70px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
};

const Map = pure(({classes, talents, openTalentDetailDialog}) => (
  <Grid container justify="center" spacing="24">
    <Grid item xs={4}>
      <TextField fullWidth placeholder="検索したい人の名前" />
    </Grid>
    <Grid item xs={12} className={classes.area}>
      <img src={FloorImage} width="100%" alt="floor map"/>
      {talents.map(talent => (
        <Button
          className={classes.seat}
          style={{top: talent.seat.y, left: talent.seat.x, backgroundColor: "#ffa"}}
          onClick={openTalentDetailDialog}
        >
          {talent.name}
        </Button>
      ))}
    </Grid>
  </Grid>
));

export default withStyles(styles)(Map);