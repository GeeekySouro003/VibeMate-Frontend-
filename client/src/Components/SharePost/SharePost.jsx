import React, { useState, useRef } from 'react';
import './SharePost.css';
import ProfilePic from '../../images/profile pic.png';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { RiVideoAddFill } from 'react-icons/ri';
import { MdAddLocationAlt } from 'react-icons/md';
import { FaRegFaceGrinBeam } from 'react-icons/fa6';
import { UilTimes } from '@iconscout/react-unicons';

const SharePost = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <div className="SharePost">
      <img src={ProfilePic} alt="profile pic of share" />

      <div>
        <input type="text" placeholder="Flex your work!" />
        <div className="postoption">
          <div
            className="opt"
            style={{ color: '#fc7a57' }}
            onClick={() => imageRef.current.click()}
          >
            <MdAddPhotoAlternate size={21} />
            Images
          </div>
          <div className="opt" style={{ color: '38b000' }}>
            <RiVideoAddFill size={21} />
            Videos
          </div>
          <div className="opt" style={{ color: '#f72585' }}>
            <MdAddLocationAlt size={21} />
            Location
          </div>
          <div className="opt" style={{ color: '#00b4d8' }}>
            <FaRegFaceGrinBeam size={21} />
            Feeling
          </div>
          <button type="button" className="share-button">
            <span className="button__text">Share Now</span>
            <span className="button__icon">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  className="svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
  />
</svg>

            </span>
          </button>
          <div style={{ display: 'none' }}>
            <input type="file" name="myimg" ref={imageRef} onChange={onImgChange} />
          </div>
        </div>

        {image && (
          <div className="prevImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image} alt="selected" className="img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePost;
