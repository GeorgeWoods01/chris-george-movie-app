import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=faf76924';

// const movie1 = {
//   "Title": "Debbie Does Dallas... Again",
//   "Year": "2007",
//   "imdbID": "tt1675910",
//   "Type": "series",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYWE0ZDVkMDQtOGY3YS00YjNhLWI0ZDYtZDYyZjEwNjdlZDE0XkEyXkFqcGdeQXVyMTIxMDUyOTI@._V1_SX300.jpg"
// }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);

  }


  useEffect(() => {
    searchMovies('Superman');
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = () => {
    searchMovies(searchTerm);
  }

  const handleKeypress = (e) => {
      //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder= "don't just look for porn"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeypress}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={handleSubmit}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}
    </div>
  );
}

export default App;
