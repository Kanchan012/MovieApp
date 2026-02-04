import { NavLink } from 'react-router-dom'
import homeimg from '../assets/homeimg.png'
import "./Home.css"
import Trending from './Trending'
import Latest from './Latest'
import { fetchLatestMovies, type TrendingItem } from '../services/tmdbApi'
import { useEffect, useState } from 'react'


function Home() {
      const [movies, setMovies] = useState<TrendingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchLatestMovies();
        setMovies(data.results.slice(8, 20)); 
      } catch (err) {
        console.error("Failed to fetch movies for home:", err);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <>
    <div className='homepage'>
    <div className='home-text'>
        <h1>Welcome to the Movie App!</h1> <br />
        <p>Explore our free movies and TV, plus discover what's trending across your favorite streaming services.</p> <br />
        <p>Unlimited movies, TV shows, and more</p>
    </div>

    <div className='home-img'>
        <img src={homeimg} alt="Home" />
    </div>        
    </div> 
    <div className='trending-container'>
        <NavLink to="/trending" className="nav-trending"><h1>Trending</h1></NavLink>
        <Trending />
    </div>
    <div className='nav-trending'>
        <Latest />
    </div>
    <div className="home-latest-section">
        <h2 className="section-title">Upcoming Movies</h2>
        {loading ? (
          <div className="loader" style={{ margin: '0 auto' }}></div>
        ) : (
          <div className="home-movies-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="home-movie-card">
                <div className="home-poster-wrapper">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title || movie.name}
                      className="home-movie-poster"
                    />
                  ) : (
                    <div className="no-poster" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fas fa-film"></i>
                    </div>
                  )}
                </div>
                <div className="home-movie-info">
                  <p className="home-movie-title">{movie.title || movie.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

   
    </>
  )
}

export default Home
