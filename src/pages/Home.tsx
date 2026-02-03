import homeimg from '../assets/homeimg.png'
import "./Home.css"
function Home() {
  return (
    <>
    <div className='homepage'>
    <div className='home-text'>
        <h1>Welcome to the Movie App!</h1> <br />
        <p>Explore our free movies and TV, plus discover what's trending across your favorite streaming services.</p>
    </div>

    <div className='home-img'>
        <img src={homeimg} alt="Home" />
    </div>        
    </div> 
    </>
  )
}

export default Home
