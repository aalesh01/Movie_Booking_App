import React from 'react'
import { useState, useEffect } from 'react';
import '../homepage/homepage.css'

const Bookings = () => {

    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await fetch(`http://localhost:8080/moviesBooked`)
                .then(res => res.json())
                .then(res => setData(res))
        }
        getData();

        const getDataM = async () => {
            await fetch(`http://localhost:8080/movies`)
                .then(res => res.json())
                .then(res => setMovies(res))
        }
        getDataM();
    }, [])



    return (
        <div className='mCards'>
            {data.map((element) => (
                <div key={element.id} className="mCard">
                    <img src={movies[element.movie_id].poster_path} alt="" />
                    <h1>{movies[element.movie_id].title}</h1>
                    <p>Name:{element.name}</p>
                    <h4>Seat:{element.seat}</h4>
                </div>
            )
            )
            }
        </div>
    )
}

export default Bookings
