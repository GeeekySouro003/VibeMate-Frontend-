import React from 'react'
import './Home.css';
import Profiles from '../Components/Profiles/Profiles';

const Home = () => {
  return (
    <div className="Home">
        <Profiles />
        <div className="Post">Posts</div>
        <div className="Trends">Trending</div>
    </div>
  )
}

export default Home