import React,{useState,useEffect} from 'react';
import "./Banner.css";
import axios from "./axios";
// import requests from "./requests";

function Banner() {
    const APIKEY = process.env.REACT_APP_API_KEY;
    const [movie, setMovie] = useState([]);


    
  
    useEffect(()=>{
         axios.get(`/trending/all/week?api_key=${APIKEY}&language=en-US`).then(response=>{setMovie(response.data.results[Math.floor((response.data.results.length-1)*Math.random())])
          
        })
            
        },[])

       

  return (
    <div>
        <header className='banner' style={{backgroundSize:"cover",backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundPosition:"center center"
        
        }}>
            <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner__buttons'>
              <button className='banner__button'>Play</button>
              <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>{movie?.overview}</h1>
            </div>
           <div className='banner__fadebottom'>

           </div>
        </header>
       
    </div>
  )
}

export default Banner;


