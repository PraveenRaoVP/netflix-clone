import React from 'react'
import { Movie } from '..';
import { useStyles } from './styles'
import { Grid } from '@mui/material';

const MovieList = ({ movies }) => {
  const { classes } = useStyles();
  console.log(movies)
  return (
    <Grid container className={classes.moviesContainer}>
        {movies.results.map((movie, idx) => (
            <Movie key={idx} movie={movie} />
        ))}
    </Grid>
  )
}

export default MovieList
