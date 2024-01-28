import React from 'react'
import './Home.css';
import Profileside from '../Components/Profileside/Profileside';
import PostSection from '../Components/PostSection/PostSection';
import TrendSide from '../Components/TrendSide/TrendSide';

const Home = () => {
  return (
    <div className="Home">
        <Profileside />
        <PostSection />
        <TrendSide/>
        <div className="Trends">Trending</div>
    </div>
  )
}

export default Home