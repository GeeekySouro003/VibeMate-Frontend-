import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import './ProfileSide.css';

const Profileside = () => {
  return (
    <div className="Profileside">
        <SearchBar/>
        <ProfileCard />
    </div>
  )
}

export default Profileside