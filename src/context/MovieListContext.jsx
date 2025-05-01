import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  myList: JSON.parse(localStorage.getItem('myList')) || [],
};

const MovieListContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      if (state.myList.some(movie => movie.id === action.payload.id)) {
        return state;
      }
      const newListAdd = [...state.myList, action.payload];
      localStorage.setItem('myList', JSON.stringify(newListAdd));
      return { ...state, myList: newListAdd };
    case 'REMOVE_FROM_LIST':
      const newListRemove = state.myList.filter(movie => movie.id !== action.payload);
      localStorage.setItem('myList', JSON.stringify(newListRemove));
      return { ...state, myList: newListRemove };
    default:
      return state;
  }
};

export const MovieListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MovieListContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieListContext.Provider>
  );
};

export const useMovieList = () => {
  const context = React.useContext(MovieListContext);
  if (context === undefined) {
    throw new Error('useMovieList must be used within a MovieListProvider');
  }
  return context;
};