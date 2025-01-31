import Search from "./components/Search"
import { useEffect, useState } from 'react'

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
}
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [errorMessage, setErrorMessage] = useState(null)

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching movies: ${error}');
      setErrorMessage('Error fetching movies. Please try again later.')
    }
    }

  useEffect(() => {

  }, [searchTerm])

  return (
    <main>
      <div className="pattern" />
      <div className='wrapper'>
        <header>
          <img src='./hero.png' />
          <h1> <span className='text-white'>Finding Movies You Love</span></h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        </header>
        <h1 className="text-white">{searchTerm}</h1>
        <section className="all-movies">
          <h2>All Movies</h2>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </main>
  )
}

export default App
