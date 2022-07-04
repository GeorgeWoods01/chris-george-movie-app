import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=faf76924';

const movie1 = {
  "Title": "Debbie Does Dallas... Again",
  "Year": "2007",
  "imdbID": "tt1675910",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWE0ZDVkMDQtOGY3YS00YjNhLWI0ZDYtZDYyZjEwNjdlZDE0XkEyXkFqcGdeQXVyMTIxMDUyOTI@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data.Search);

  }


  useEffect(() => {
    searchMovies('Batman');



  }, []);



  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder= "don't just look for porn"
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />

      </div>
      <div className="container">
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  )
}

export default App;
