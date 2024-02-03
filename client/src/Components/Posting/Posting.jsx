import React, { useState } from 'react';
import './Posting.css';
import Heart from '../../images/like.png';
import NotLike from '../../images/notlike.png';
import { FaRegComments } from 'react-icons/fa';
import { IoIosShare } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { likePost } from '../../Api/PostRequest';


const Posting = ({ data }) => {
  const { user } = useSelector((state) => state.AuthReducer.authData);

 const [liked,setLiked]=useState(data.likes.includes(user._id))
 const[likes,setLikes]=useState(data.likes.length)

  const handleLike =() =>{
    setLiked((prev)=>!prev)
    likePost(data._id,user._id)
    liked?setLikes((prev)=>prev -1):setLikes((prev)=>prev + 1)
  }

  return (
    <div className="Posting">
      <img src={ data.image ? import.meta.env.VITE_APP_PUBLIC_FOLDER + data.image : ""} alt='post Image' />
      <div className="postreaction">
        <img src={liked ? Heart : NotLike} alt="Like Icon" style={{cursor:"pointer"}} onClick={handleLike} />
        <FaRegComments size={28} color='#4cc9f0' />
        <IoIosShare size={28} color='#ffbf69' />
      </div>

      <span style={{ color: "black", fontSize: '18px' }}>{likes} likes</span>
      <div className="detail">
        <span><b>{data && data.name}</b></span>
        <span> {data && data.desc}</span>
      </div>
    </div>
  );
};

export default Posting;
