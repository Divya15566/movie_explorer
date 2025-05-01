// src/components/MovieCard.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ width: 200, m: 1 }}>
      <CardActionArea component={Link} to={`/movie/${movie.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div" noWrap>
            {movie.title}
          </Typography>
          <Rating
            name="read-only"
            value={movie.vote_average / 2}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary">
            {movie.vote_average.toFixed(1)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;