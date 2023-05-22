import React, { useEffect } from 'react'
import  axios  from 'axios';
import { useState } from 'react';
import home from '../Home/home.module.css'
export default function Movies() {

  const [allMovies, setAllMovies] = useState(null)
 

async  function getTrendingMovies() {
let {data}= await    axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=5b8c3128cc9387614fde8c3d11864b43')
 setAllMovies(data.results);

  }



  useEffect(() => {
 getTrendingMovies()

  },[])

  return <>
 { allMovies ? <div className="container gy-3">
  <div className="row align-items-center">
    <div className="col-md-4">
      <div className={home.title}>
        <h3>Trending Movies to watach</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
    </div>
    {allMovies.map( (movie,idx) => 
        <div key={idx} className="col-md-2">
        <div className="movie">
          <img src={ "https://image.tmdb.org/t/p/w500" +movie.poster_path} className='w-100' alt="movie" />
          <h6>{movie.title ?movie.title : movie.name}</h6>
        </div>
      </div>
    )}
  </div>


</div>:   <div className="vh-100 d-flex justify-content-center align-items-center">
 
  <i class="fa-solid fa-spinner fa-spin-pulse fa-7x text-white"></i>

</div> }




  </>
  
}
