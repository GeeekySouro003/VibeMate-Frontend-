import React from 'react';
import { BiHomeSmile } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { GrUserSettings } from "react-icons/gr";
import './TrendSide.css';
import TrendingCard from '../TrendingCard/TrendingCard';

const TrendSide = () => {
  return (
    <div className="TrendSide">
        <div className="navIcon">
            <BiHomeSmile size={28} />
            <IoIosNotificationsOutline size={28} />
            <BiSolidMessageSquareDots size={28} />
            <GrUserSettings size={28} />
        </div>
        <TrendingCard/>
    </div>
  );
}

export default TrendSide;
