import React, {useEffect, useRef} from 'react';
import './App.css';
import Search from './Search'
import MovieList from './MovieList';
import { StateProvider } from './state';

function App() {
  const stickyHeader = useRef();
  const myMovieContainer = useRef();
  const initialState = {
    movies: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'search':
        return {
          ...state,
          movies: action.movies
        };
        
      default:
        return state;
    }
  };

 useEffect(() => {
    const adjustStickyHeader = () => {
      myMovieContainer.current.setAttribute("style", `margin-top : ${stickyHeader.current.clientHeight+20}px`);
    };

    adjustStickyHeader();
    window.addEventListener('resize', adjustStickyHeader);

    return () => {
      window.removeEventListener('resize', adjustStickyHeader);
    };

 }, []);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="app">
      <div className="sticky-search" ref={stickyHeader} >
        <div className="container">
          <h1>Movie Search</h1>
          <Search/>
        </div>
      </div>
        <div className="container">
          <div className='movie-container' ref={myMovieContainer}>
            <MovieList/>
          </div>
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
