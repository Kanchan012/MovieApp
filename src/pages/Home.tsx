import { useEffect, useState } from 'react'
import homeimg from '../assets/homeimg.png'
import { fetchLatestMovies, fetchTrending, fetchUpcomingMovies, type TrendingItem } from '../services/tmdbApi'
import MovieGrid from '../components/common/MovieGrid'
import { NavLink } from 'react-router-dom'
import "./Home.css"

function Home() {
  const [trendingMovies, setTrendingMovies] = useState<TrendingItem[]>([]);
  const [latestMovies, setLatestMovies] = useState<TrendingItem[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<TrendingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        setLoading(true);
        const [trending, latest, upcoming] = await Promise.all([
          fetchTrending(),
          fetchLatestMovies(),
          fetchUpcomingMovies()
        ]);

        setTrendingMovies(trending.results.slice(0, 12));
        setLatestMovies(latest.results.slice(0, 12));
        setUpcomingMovies(upcoming.results.slice(0, 12));
      } catch (err) {
        console.error("Failed to fetch movies for home:", err);
      } finally {
        setLoading(false);
      }
    }
    getAllMovies();
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

      <div className="home-sections-container">
        {loading ? (
          <div className="loader-container">
            <div className="loader" style={{ margin: '100px auto' }}></div>
          </div>
        ) : (
          <>
            <section className="home-section">
              <NavLink to="/trending" className="section-link">
                <h2 className="section-title">Trending Today <span className="view-all">View All →</span></h2>
              </NavLink>
              <MovieGrid
                movies={trendingMovies}
                gridClassName="home-movies-grid"
                cardClassName="home-movie-card"
                imageClassName="home-movie-poster"
                infoClassName="home-movie-info"
              />
            </section>

            <section className="home-section">
              <NavLink to="/latest" className="section-link">
                <h2 className="section-title">Latest Releases <span className="view-all">View All →</span></h2>
              </NavLink>
              <MovieGrid
                movies={latestMovies}
                gridClassName="home-movies-grid"
                cardClassName="home-movie-card"
                imageClassName="home-movie-poster"
                infoClassName="home-movie-info"
              />
            </section>

            <section className="home-section">
             <NavLink to="/upcoming" className="section-link">
                <h2 className="section-title">Upcoming Movies <span className="view-all">View All →</span></h2>
              </NavLink>              <MovieGrid
                movies={upcomingMovies}
                gridClassName="home-movies-grid"
                cardClassName="home-movie-card"
                imageClassName="home-movie-poster"
                infoClassName="home-movie-info"
              />
            </section>
          </>
        )}
      </div>
    </>
  )
}

export default Home
