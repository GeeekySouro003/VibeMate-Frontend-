import React from 'react'
import Cover from '../../images/cover.png'
import ProfilePic from '../../images/profile pic.png'
import CountUp from 'react-countup';
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
                <span>
                    <CountUp start ={0} end={568} duration={5} />
                </span>
                <span>Followers</span>
            </div>

            <div className="vl"></div>
                <div className="following">
                    <span> <CountUp end={56} duration={4} /></span>
                    <span>Following</span>
                </div>
        </div>
        <hr />
    </div>
    <span>
        My Profile
    </span>
   </div>
  )
}

export default ProfileCard