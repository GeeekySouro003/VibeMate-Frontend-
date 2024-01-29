import React from 'react'
import ProfileStats from '../../Components/ProfileStats/ProfileStats'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostSection from '../../Components/PostSection/PostSection'
import TrendSide from '../../Components/TrendSide/TrendSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileStats/>
        <div className="profile-center">
          <ProfileCard />
          <PostSection />
        </div>
        <TrendSide/>
    </div>
  )
}

export default Profile