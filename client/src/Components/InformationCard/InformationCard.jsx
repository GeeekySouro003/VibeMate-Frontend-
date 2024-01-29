import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import './InformationCard.css';
const InformationCard = () => {
  return (
<div className="InformationCard">
    <div className="infoHeader">
        <h3>About Yourself!</h3>
        <div>
        <FaUserEdit size={25}/>
        </div>
        
    </div>
    
    <div className="info">
      <span>
        <b>Recent Work: </b>
      </span>
      <span>Created a Poster</span>
    </div>
     
    <div className="info">
      <span>
        <b>Resides at: </b>
      </span>
      <span>Bengaluru</span>
  
    </div>

     
    <div className="info">
      <span>
        <b>Specializes in: </b>
      </span>
      <span>Social Media Marketing</span>
    </div>

    <button className="lgout-btn type1">
     
    </button>
</div>
  )
}

export default InformationCard