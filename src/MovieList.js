import React from 'react'

function MovieList() {
    const movieList = [1,2,3,4,5,6,7,8,9,];
    return (
        <>
            <ul className="movie-card">
                {movieList.map((item) => {
                    return <li key={item}>movie {item}</li>
                })}
            </ul>
        </>
    );
};

export default MovieList
