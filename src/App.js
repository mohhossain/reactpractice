
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [movie, setMovie] = useState()

  const [movieDetails, setMoviedetails] = useState({})

  useEffect(()=> {
    fetchMovie()
  }, [])
  
  function onClick(e) {
    fetchMovie()
    e.preventDefault();
  }

  function fetchMovie(){
    axios.get(`https://www.omdbapi.com/?t=${movie}&plot=full&apikey=c27361fb`).then(
      res => {
        console.log(res)
        setMoviedetails(res.data)
      }
    ).catch(err =>{
      console.error(err);
    })
  }
  return (
    <div className="App">
      <form>
        <label>Type movie name: </label>
        <input value={movie} onChange={(e)=> setMovie(e.target.value)}></input>
        <button onClick={onClick}>Submit</button>
      </form>
      
      <div>
        <h3>{movieDetails.Title}</h3>
        <p>{movieDetails.Actors}</p>
        <img src={movieDetails.Poster} alt={'POSTER'}></img>
        <p>{movieDetails.Plot}</p>
        
      </div>
    </div>
  );
}

export default App;
