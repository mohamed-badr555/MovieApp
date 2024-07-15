import axios from "axios"
import { createContext, useEffect, useState } from "react"



export const APIContext= createContext()

export function APIContextFunction(props){


    const [allMovies, setAllMovies] = useState(null)
    const [allTV, setAllTV] = useState(null)
  
  async  function getTrendingMovies() {
  let {data}= await    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=5b8c3128cc9387614fde8c3d11864b43')
   setAllMovies(data.results);
  
    }
  
  async  function getTrendingTv() {
  let {data}= await    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=5b8c3128cc9387614fde8c3d11864b43')
   setAllTV(data.results);
  
    }
  
    useEffect(() => {
   getTrendingMovies()
   getTrendingTv()
    },[])
  

    return <APIContext.Provider value={{allMovies:allMovies,allTV}} >
    
    {props.children}
    </APIContext.Provider>
}