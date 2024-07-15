import React,{useState, useEffect} from 'react'
import  axios  from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function MovieDetails() {
 
 let {id,media}= useParams()


    const [objDetails, setObjDetails] = useState(null)
  async  function getMovieDetails() {
        let {data} = await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=5b8c3128cc9387614fde8c3d11864b43&language=en-US`);
        setObjDetails(data)
    }
    useEffect(() => {
    getMovieDetails();
    
 
    }, [])
    
  return <div>
  {objDetails?  <div className="container">
       <Helmet>
      <title>{media == "movie"? objDetails.title : objDetails.name}</title>
      </Helmet>
    <div className="row">
        <div className="col-md-3">
            <div className="poster">
                <img src={"https://image.tmdb.org/t/p/w500" + objDetails.poster_path} className='w-100' alt="poster" />
            </div>
        </div>
        <div className="col-md-9">
            <div className="moviDetails">
                <h4>{objDetails.title}</h4>
                <p>{objDetails.overview}</p>
                {objDetails.genres?.map((genre,idx) => <span key={idx} className="bg-info m-3 p-3">{genre.name}</span> )}
                <h6 className='mt-4'>Vote:{objDetails.vote_average} </h6>
            </div>
        </div>
    </div>
  </div> : <div className="vh-100 d-flex justify-content-center align-items-center">
 
 <i class="fa-solid fa-sync fa-spin fa-5x text-white"></i>

</div> }

  </div >
}
