import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import InformationCard from '../InformationCard/InformationCard.jsx';
import FollowerCard from '../FollowerCard/FollowerCard.jsx';
const ProfileStats = () => {
  return (
    <div className="ProfileStats">
        <SearchBar />
        <InformationCard/>
         <FollowerCard />
    </div>
  )
}

export default ProfileStats