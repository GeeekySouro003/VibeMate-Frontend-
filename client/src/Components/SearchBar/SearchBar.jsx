import React from 'react'
import Logo from '../../images/logo.jpg'
import { MdPersonSearch } from "react-icons/md";
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="SearchBar">
       <img src={Logo} style={{width:'35px'}} alt='' />
       <div className="Search">
        <input type="text" placeholder='Find the perfect choice' />
        <div className="s-icon">
        <MdPersonSearch size={19}/>
        </div>
       </div>
    </div>
  )
}

export default SearchBar