import React, { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieListProvider } from './context/MovieListContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MyList from './pages/MyList';
import MovieDetails from './pages/MovieDetails';
import Login from './pages/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <MovieListProvider>
      <Router>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          {isLoggedIn && <Sidebar />}
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {isLoggedIn && <Header />}
            <Routes>
              {!isLoggedIn ? (
                <Route path="/*" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
              ) : (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/my-list" element={<MyList />} />
                  <Route path="/movie/:id" element={<MovieDetails />} />
                </>
              )}
            </Routes>
          </Box>
        </Box>
      </Router>
    </MovieListProvider>
  );
}

export default App;