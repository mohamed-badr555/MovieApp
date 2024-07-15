import React, { useEffect } from 'react'
import  axios  from 'axios';
import { useState ,useContext} from 'react';
import home from './home.module.css'
import { Link } from 'react-router-dom';
import { APIContext } from './../Context/APIContext';
import { Helmet } from 'react-helmet';
export default function Home() {
 const {allMovies,allTV}  = useContext(APIContext)

  
  return <div>
        <Helmet>
      <title>Home</title>
      </Helmet>
 { allMovies && allTV? <div className="container gy-3">
  <div className="row align-items-center">
    <div className="col-md-4">
      <div className={home.title}>
        <h3>Trending Movies to watach</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
    </div>
    {allMovies.slice(0,10).map( (movie,idx) => 
        <div key={idx} className="col-md-2">
        <Link to={`/moviedetails/movie/${movie.id}`}>
        <div className="movie">
          <img src={ "https://image.tmdb.org/t/p/w500" +movie.poster_path} className='w-100' alt="movie" />
          <h6>{movie.title ?movie.title : movie.name}</h6>
        </div>
        </Link>
      </div>
    )}
  </div>
  <div className="row align-items-center">
  <div className="col-md-4">
      <div className={home.title}>
        <h3>Trending TV to watach</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
    </div>
    {allTV.slice(0,10).map( (tv,idx) => <div key={idx} className="col-2">
      <Link to={`/moviedetails/tv/${tv.id}`}>
      <div className="tv">
        <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + tv.poster_path} alt="tv" />
        <h6>{tv.name}</h6>
      </div>
      </Link>
    </div>
     )}
  </div>

</div>:   <div className="vh-100 d-flex justify-content-center align-items-center">
 
  <i class="fa-solid fa-sync fa-spin fa-5x text-white"></i>

</div> }




  </div>
  
}
