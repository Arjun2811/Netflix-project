import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import axios from './axios';
import "./Row.css";

function Row({title,fetchUrl,isLargeRow=false}) {
 const navigate=useNavigate();
const[movies,setMovies]=useState([]);

const base_url="https://image.tmdb.org/t/p/original/";
useEffect(()=>{

async function fetchData(){

const request=await axios.get(fetchUrl);
setMovies(request.data.results);
return request;
}
fetchData();

},[fetchUrl]);

console.log(movies);


  return (
    <div className='Row'>
       
<h2>{title}</h2>
<div className='row_posters'>

{movies.map((movie) =>
//condition for dead links
  ((isLargeRow&& movie.poster_path) || (!isLargeRow && movie.backdrop_path))&&(
  
    <img  onClick={() => navigate(`/movie/${movie.id}`)}
     className={`row_poster ${isLargeRow &&"row_posterLarge"}`}
    key={movie.id}
    src={`${base_url}${
        isLargeRow? movie.poster_path:movie.backdrop_path
    }`}
    alt={movie.name}
   

    />
    
  )
)
}
  
</div>
    </div>
  );
}

export default Row