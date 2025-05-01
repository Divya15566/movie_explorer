// src/pages/MyList.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMovieList } from '../context/MovieListContext';
import MovieCard from '../components/MovieCard';

const MyList = () => {
  const { state } = useMovieList();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My List
      </Typography>
      {state.myList.length === 0 ? (
        <Typography variant="body1">Your list is empty. Add some movies!</Typography>
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {state.myList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MyList;