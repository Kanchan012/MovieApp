import { NavLink } from 'react-router-dom'
import homeimg from '../assets/homeimg.png'
import "./Home.css"
import Trending from './Trending'
import Latest from './Latest'
function Home() {
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

   
    </>
  )
}

export default Home
