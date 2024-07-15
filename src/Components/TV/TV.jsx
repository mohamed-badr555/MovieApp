import React, { useEffect } from 'react'
import  axios  from 'axios';
import { useState ,useContext} from 'react';
import home from '../Home/home.module.css'
import { APIContext } from './../Context/APIContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function TV() {

  const {allTV}  = useContext(APIContext)

  return <div>
        <Helmet>
      <title>TV</title>
      </Helmet>
 {allTV? <div className="container gy-3">

  <div className="row align-items-center">
  <div className="col-md-4">
      <div className={home.title}>
        <h3>Trending TV to watach</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
    </div>
    {allTV.map( (tv,idx) => <div key={idx} className="col-2">
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
 
  <i class="fa-solid fa-spinner fa-spin-pulse fa-7x text-white"></i>

</div> }




  </div>
  
}
