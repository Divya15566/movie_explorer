import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Email and Password are required!');
      return;
    }
    console.log('Login attempted with:', { email, password });
    onLogin();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: 2,
        backgroundImage: 'url(https://image.tmdb.org/t/p/original/your-background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black', // Change font color to black

      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(245, 215, 215, 0.8)', // Darker overlay
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: 'black' }}> {/* OrangeRed for title */}
          Welcome to Movie Explorer
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: 'black' }}> {/* Gold for subtitle */}
          Discover your favorite movies and shows
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, input: { color: '#000000' } }} // White background with black text
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, input: { color: '#000000' } }} // White background with black text
        />
        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            paddingX: 4,
            backgroundColor: '#FF4500', // OrangeRed for button
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#FF6347', // Tomato color on hover
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;