import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import FollowerCard from '../FollowerCard/FollowerCard.jsx';
import './Profileside.css';

const Profileside = () => {
  return (
    <div className="Profileside">
        <SearchBar/>
        <ProfileCard />
        <FollowerCard />
    </div>
  )
}

export default Profileside