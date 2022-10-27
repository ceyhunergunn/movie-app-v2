import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetail() {
    const location = useLocation();
    //const [movie,setMovie] = useState(location)
    const loc =location.state;
  return (
    <div>
        <h2>Movie Detail</h2>
        <img style={{width:'29rem'}} src={loc.api_img + loc.poster_path}/>
            <br/><br/>
            <h3>{location.state.title}</h3>
            <h4>IMDB: {loc.vote_average}</h4>
            <h5>Release Date : {loc.release_date}</h5>
            <h5>Overview</h5>
            <p>{loc.overview}</p>
            <h5>Vote Count : {loc.vote_count}</h5>
            <h5>Popularity : {loc.popularity}</h5>
            <h5>Original Language : {loc.original_language}</h5>
    </div>
  )
}

export default MovieDetail;