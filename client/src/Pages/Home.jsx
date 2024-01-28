import React from 'react'
import './Home.css';
import Profileside from '../Components/Profileside/Profileside';

const Home = () => {
  return (
    <div className="Home">
        <Profileside />
        <div className="Post">Posts</div>
        <div className="Trends">Trending</div>
    </div>
  )
}

export default Home