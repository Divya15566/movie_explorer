import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import { Box, Typography, Button, CircularProgress, Divider, Chip, Avatar } from '@mui/material';
import { useMovieList } from '../context/MovieListContext';
import { 
  fetchMovieDetails, 
  fetchMovieCredits, 
  fetchSimilarMovies 
} from '../api/tmdb';
import MovieSection from '../components/MovieSection';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useMovieList();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isInMyList = state.myList.some(m => m.id === parseInt(id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [details, creditsData, similar] = await Promise.all([
          fetchMovieDetails(id),
          fetchMovieCredits(id),
          fetchSimilarMovies(id),
        ]);
        
        setMovie(details);
        setCredits(creditsData);
        setSimilarMovies(similar.results);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAddRemoveFromList = () => {
    if (isInMyList) {
      dispatch({ type: 'REMOVE_FROM_LIST', payload: parseInt(id) });
    } else {
      dispatch({ 
        type: 'ADD_TO_LIST', 
        payload: {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
        }
      });
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">{error}</Typography>
        <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Go Back Home
        </Button>
      </Box>
    );
  }

  if (!movie) {
    return null;
  }

  const director = credits.crew.find(person => person.job === 'Director');

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flexShrink: 0 }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '300px', borderRadius: '8px' }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h3" gutterBottom>
            {movie.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating
              name="read-only"
              value={movie.vote_average / 2}
              precision={0.5}
              readOnly
            />
            <Typography variant="body1" sx={{ ml: 1 }}>
              {movie.vote_average.toFixed(1)}/10
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {movie.overview}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Director: {director ? director.name : 'Unknown'}
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Cast:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {credits.cast.slice(0, 5).map((person) => (
                <Chip
                  key={person.id}
                  avatar={<Avatar alt={person.name} src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} />}
                  label={person.name}
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>
          <Button
            variant="contained"
            color={isInMyList ? 'error' : 'primary'}
            onClick={handleAddRemoveFromList}
          >
            {isInMyList ? 'Remove from My List' : 'Add to My List'}
          </Button>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />
      <MovieSection title="Similar Movies" movies={similarMovies} />
    </Box>
  );
};

export default MovieDetails;