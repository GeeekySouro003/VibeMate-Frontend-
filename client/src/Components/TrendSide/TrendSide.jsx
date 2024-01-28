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
            <BiHomeSmile size={28} color='#3a0ca3' />
            <IoIosNotificationsOutline size={30} color='#ff7900' />
            <BiSolidMessageSquareDots size={28} color='#d55d92' />
            <GrUserSettings size={28} color='#2c0735' />
        </div>
        <TrendingCard/>
    </div>
  );
}

export default TrendSide;
