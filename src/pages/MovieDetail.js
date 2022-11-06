import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  
  const {state} = useLocation()
  console.log(state)
  
  const [movie, setMovie] = useState()
  const image_url = `https://image.tmdb.org/t/p/w500`;
  const url = `https://api.themoviedb.org/3/movie/${state?.id}/videos?api_key=1dc131a3cf513873457921d47fc37c3c`
  //youtube videosu için api url si paylaşılacak yukarıda sende iframe içine koyacan

  const getMovie = async() => {
  const {data} = await axios(url)
   console.log(data)
   setMovie(data?.results)
} 
console.log(movie)

useEffect(()=> {
  getMovie()
}, [])

  return (
    <>
    
  
    <iframe src="" frameborder="0"></iframe>
 
  <div className="card d-flex flex-row mt-5 mx-auto" style={{width: "50rem", height:"30rem"}}>
      <img src={(image_url + state?.poster_path)} className="card-img-top" />
      <div className="card-body">
        <h5 className=''>OverView</h5>
        <p className="card-text">{state?.overview}</p>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Title :  {state?.title}</li>
              <li className="list-group-item">Release Date :  {state?.release_date}</li>
              <li className="list-group-item">Language : {state?.original_language}</li>
              <li className="list-group-item">Rate : {state?.vote_average}</li>
          </ul>
      </div>
  </div>
  </>
  )
}

export default MovieDetail