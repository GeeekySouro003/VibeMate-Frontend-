import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Profiles.css'
import ProfileCard from '../ProfileCard/ProfileCard'

const Profiles = () => {
  return (
    <div className="Profiles">
        <SearchBar/>
        <ProfileCard/>
    </div>
  )
}

export default Profiles