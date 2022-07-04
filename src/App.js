import { useEffect } from 'react';

// faf76924

const API_URL = 'http://www.omdbapi.com?apikey=faf76924';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data.Search);

  }

  useEffect(() => {
    searchMovies('Debbie does Dallas');



  }, []);

  return (
    <h1>App</h1>
  );
}

export default App;
