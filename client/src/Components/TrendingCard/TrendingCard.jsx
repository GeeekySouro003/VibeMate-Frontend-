import React from 'react';
import './TrendingCard.css';
import { TrendData } from '../../Data/TrendingData.js'; // Assuming correct relative path

const TrendingCard = () => {
  return (
    <div className="TrendingCard">
        <h2>What's happening?!</h2>
        {TrendData.map((trend)=>{
            return (
                <div className="trend" key={trend.id}>
                    <span>#{trend.name}</span>
                    <span>{trend.shares}K Shares</span>
                </div>
            )
        })}

    </div>
  )
}

export default TrendingCard;
