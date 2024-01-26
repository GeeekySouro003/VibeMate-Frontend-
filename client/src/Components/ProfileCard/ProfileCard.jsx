import React from 'react'
import Cover from '../../images/coverpic.png'
import Profile from '../../images/profile.webp'

const ProfileCard = () => {
  return (
    <div className="profilecard">
        <div className="profileimg">
            <img src={Cover} alt='' />
            <img src={Profile} alt='' />
        </div>
    </div>
  )
}

export default ProfileCard