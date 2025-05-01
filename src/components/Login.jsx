import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField label="Username" variant="outlined" margin="normal" fullWidth />
      <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;