import React from 'react';
import { useStateValue } from './state';

function MovieList() {
    const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
    const movieList = useStateValue()[0].movies;
    return (
        <>
            <ul className="movie-card">
                {movieList.map((movie) => {
                    return <li className="card" key={movie.id}>
                    <img alt={movie.original_title} src={`${imgBaseUrl}${movie.backdrop_path|| movie.poster_path}`}></img>
                    <div>{`${movie.original_title}`}</div>
                    </li>
                })}
            </ul>
        </>
    );
};

export default MovieList
