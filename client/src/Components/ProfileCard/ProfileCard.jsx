import React from 'react'
import Cover from '../../images/cover.jpg'
import ProfilePic from '../../images/profile.jpg'
import './ProfileCard.css';
 
const ProfileCard = () => {
  return (
   <div className="ProfileCard">
    <div className="ProfileImg">
        <img src={Cover} alt=''  />
        <img src={ProfilePic} alt='' />
    </div>
    <div className="ProfileName">
        <span>Souradip Dasgupta</span>
        <span>MERN STACK DEVELOPER</span>
    </div>

    <div className="follow">
        <hr />
        <div>
            <div className="followers">
                <span>568</span>
                <span>Followers</span>
            </div>

            <div className="vl"></div>
                <div className="following">
                    <span>35</span>
                    <span>Following</span>
                </div>
            
            <hr />
        </div>
    </div>
   </div>
  )
}

export default ProfileCard