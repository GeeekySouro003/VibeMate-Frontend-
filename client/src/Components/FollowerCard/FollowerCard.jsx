import React from 'react'
import { Followers } from '../../Data/Followersdata.js'
import './FollowerCard.css'
const FollowerCard = () => {
  return (
   <div className="FollowerCard">
    <h2>Who is following you ?</h2>
     {Followers.map((follower,id) =>{
        return(
            <div className="follower">
                <div>
                <img src={follower.img}  className="followerimg " alt='' />
                <div className="followername">
                    <span>{follower.name}</span>
                    <span>#{follower.username}</span>
                </div>
            </div>
            <button className='followbtn'> 
                Follow
            </button>
            </div>
        )
     })}
   
   </div>
  )
}

export default FollowerCard