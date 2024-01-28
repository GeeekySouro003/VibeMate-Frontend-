import React from 'react';
import './Posting.css';
import { IoHeartDislikeOutline } from 'react-icons/io5';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComments } from 'react-icons/fa';
import { IoIosShare } from 'react-icons/io';

const Posting = ({ data }) => {
  return (
    <div className="Posting">
      <img src={data.img} alt='post Image' />

      <div className="postreaction">
        {data.likes ? <FaRegHeart size={28} color='#f72585'/> : <IoHeartDislikeOutline size={28} color='white' />}
        <FaRegComments size={28}  color='#4cc9f0'/>
        <IoIosShare size={28} color='#ffbf69'/>
      </div>

      <span style={{ color: "black", fontSize: '18px' }}>{data.likes} likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Posting;
