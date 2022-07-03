import { useEffect, useState } from "react";
import React from 'react'
import './homepage.css';
import { Link } from "react-router-dom";

const Homepage = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await fetch(`http://localhost:8080/movies`)
                .then(res => res.json())
                .then(res => setData(res))
        }
        getData();
    }, [])


  return (
    <div className="mCards">
      {data.map((element)=>(
         <div key={element.id} className="mCard">
              <img src={element.poster_path} alt="" />
              <h1>{element.title}</h1>
              <Link to={`moviedetails/${element.id}`} >More Details.. </Link>
         </div>
      )
      )
    }
    </div>
  )
}

export default Homepage
