import React, {useState} from 'react';
import axios from './axios';
import { useStateValue } from './state';

function Search() {
    const [{ movies }, dispatch] = useStateValue();
    const [searchInput, setSearchInput] = useState("");
    const searchMovies = async (e) => {
        e.preventDefault();
        try{
            const url = `/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${searchInput}&page=1&include_adult=false`;
            const res = await axios.get(url);
            console.log(res.data.results);
            dispatch({
                type: 'search',
                movies: res.data.results
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form id="movie-form" onSubmit={searchMovies}>
                <div className="search-movie">
                    <div className="movie-label">
                        <label>Movie Name</label>
                    </div>
                    <div className="search-text">
                        <input type="text" placeholder="i:e spider man" value={searchInput} 
                        onChange= {(e) => setSearchInput(e.target.value)} ></input>
                    </div>
                    <div className="submit-movie">
                        <input type="submit" value="Search Movie" className="search-button"></input>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Search
