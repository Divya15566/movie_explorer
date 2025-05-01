import React from 'react';
import { Box, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const MovieSection = ({ title, movies }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, py: 2 }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};

export default MovieSection;