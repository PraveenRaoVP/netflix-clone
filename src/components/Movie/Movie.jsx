import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const Movie = ({ movie, idx}) => {
    const i = idx;
    var itr = 1
    const { classes } = useStyles();
    // console.log(movie,idx)
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
    
    <Grow in key={i} timeout={2500*itr++}>
    {/* Display thumbnail and title with ratings  */}
      <Typography className={classes.title} variant="h5">{movie.title}</Typography>
    </Grow>
    </Grid>
  )
}

export default Movie;
