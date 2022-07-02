import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const MovieDetails = () => {

    const [movies, setMovies] = useState([]);

    const id = useParams();

    useEffect(() => {
        const getDataM = async () => {
            await fetch(`http://localhost:3000/movies`)
                .then(res => res.json())
                .then(res => setMovies(res))
        }
        getDataM();
    }, [])
    return (
        <div className="mCards">
            <div className="mCard">
                <img src={movies[id].poster_path} alt="" />
                <h1>{movies[id].title}</h1>
                <p>Original language:{movies[id].original_language}</p>
                <p>Original title:{movies[id].original_title}</p>
                <p>Overview:{movies[id].overview}</p>
                <p> Popularity:{movies[id].popularity}</p>
            <p>Release_date:{movies[id].release_date}</p>
            <p>Vote average:{movies[id].vote_average}</p>
                <p>Vote_count:{movies[id].vote_count}</p>
                <button>Book Ticket</button><button></button><button></button>
        </div>
        </div >
    )
}

export default MovieDetails
