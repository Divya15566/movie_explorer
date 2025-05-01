import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField } from '@mui/material';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log('Search:', e.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movie Explorer
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search movies..."
          size="small"
          sx={{ marginLeft: 'auto', backgroundColor: 'white', borderRadius: 1 }}
          value={searchQuery}
          onChange={handleSearch}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;