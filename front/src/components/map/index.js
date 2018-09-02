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

const Map = pure(({classes, openTalentDetailDialog}) => (
  <Grid container justify="center" spacing="24">
    <Grid item xs={4}>
      <TextField fullWidth placeholder="検索したい人の名前" />
    </Grid>
    <Grid item xs={12} className={classes.area}>
      <img src={FloorImage} width="100%"/>
      <Button className={classes.seat} style={{top: "22%", left: "28%", backgroundColor: "#ffa"}} onClick={openTalentDetailDialog}>清水 健司</Button>
      <Button className={classes.seat} style={{top: "22%", left: "12%", backgroundColor: "#ffa"}} onClick={openTalentDetailDialog}>ながーい なまーえ</Button>
      <Button className={classes.seat} style={{top: "36%", left: "12%", backgroundColor: "#ffa"}} onClick={openTalentDetailDialog}>すずき</Button>
      <Button className={classes.seat} style={{top: "36%", left: "28%", backgroundColor: "#ffa"}} onClick={openTalentDetailDialog}>こんどう</Button>
    </Grid>
  </Grid>
));

export default withStyles(styles)(Map);