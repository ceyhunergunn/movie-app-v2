import React, {useState, useEffect} from 'react';
import Movies from './Movies';

function Home() {
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=5598ac90398bc3c7dfd0af61b25733d9")
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  },[])
  return (
    <div>
        <h2>Movies</h2>
        {movies.map((movie)=>
        <Movies key={movie.id} {...movie}/>)}

    </div>
  )
}

export default Home;