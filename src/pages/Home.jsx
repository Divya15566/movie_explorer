import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { fetchMovies } from '../api/tmdb';
import MovieSection from '../components/MovieSection';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const [popular, topRated, upcoming, nowPlaying] = await Promise.all([
          fetchMovies('/movie/popular'),
          fetchMovies('/movie/top_rated'),
          fetchMovies('/movie/upcoming'),
          fetchMovies('/movie/now_playing'),
        ]);
        
        setPopularMovies(popular.results);
        setTopRatedMovies(topRated.results);
        setUpcomingMovies(upcoming.results);
        setNowPlayingMovies(nowPlaying.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <MovieSection title="Now Playing" movies={nowPlayingMovies} />
      <MovieSection title="Popular" movies={popularMovies} />
      <MovieSection title="Top Rated" movies={topRatedMovies} />
      <MovieSection title="Upcoming" movies={upcomingMovies} />
    </Box>
  );
};

export default Home;