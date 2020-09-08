import React, {useEffect, useRef} from 'react';
import './App.css';
import Search from './Search'
import MovieList from './MovieList';

function App() {
  const stickyHeader = useRef();
  const myMovieContainer = useRef();

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
  );
}

export default App;
