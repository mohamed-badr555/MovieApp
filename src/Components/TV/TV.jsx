import React, { useEffect } from 'react'
import  axios  from 'axios';
import { useState } from 'react';
import home from '../Home/home.module.css'
export default function TV() {

  const [allTV, setAllTV] = useState(null)


async  function getTrendingTv() {
let {data}= await    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=5b8c3128cc9387614fde8c3d11864b43')
 setAllTV(data.results);

  }

  useEffect(() => {

 getTrendingTv()
  },[])

  return <>
 {allTV? <div className="container gy-3">

  <div className="row align-items-center">
  <div className="col-md-4">
      <div className={home.title}>
        <h3>Trending TV to watach</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
    </div>
    {allTV.map( (tv,idx) => <div key={idx} className="col-2">
      <div className="tv">
        <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + tv.poster_path} alt="tv" />
        <h6>{tv.name}</h6>
      </div>
    </div>
     )}
  </div>

</div>:   <div className="vh-100 d-flex justify-content-center align-items-center">
 
  <i class="fa-solid fa-spinner fa-spin-pulse fa-7x text-white"></i>

</div> }




  </>
  
}
