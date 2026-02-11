import { useEffect } from 'react'
import homeimg from '../assets/homeimg.png'
import MovieGrid from '../components/common/MovieGrid'
import { NavLink } from 'react-router-dom'
import { useMovies } from '../redux/useMovies'
import "./Home.css"

function Home() {
  const { trending, latest, upcoming, loading, getHomeMovies } = useMovies();

  useEffect(() => {
    getHomeMovies();
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
                movies={trending}
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
                movies={latest}
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
                movies={upcoming}
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
