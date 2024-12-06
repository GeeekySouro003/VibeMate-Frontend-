import React, { useState, useRef } from 'react';
import './SharePost.css';
import ProfilePic from '../../images/profile pic.png';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { RiVideoAddFill } from 'react-icons/ri';
import { MdAddLocationAlt } from 'react-icons/md';
import { FaRegFaceGrinBeam } from 'react-icons/fa6';
import { UilTimes } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../Actions/uploadAction.js';

const SharePost = () => {
  const loading=useSelector((state)=>state.PostReducer.uploading)
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const {user}=useSelector((state)=>state.AuthReducer.authData)
  const imageRef = useRef();
  const videoRef = useRef();
  const desc=useRef();
  const dispatch = useDispatch();
  const onImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setImage(img);
    }
  };

  const reset= () => {
    setImage(null);
    desc.current.value="null"
  }

  const onVideoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const vid = e.target.files[0];
      setVideo(URL.createObjectURL(vid));
    }
  };

  const handleSubmit = (e)=> {
    e.preventDefault();

    const newpost= {
      profileId:user._id,
      desc:desc.current.value
    }
    if(image) {
      const data=new FormData()
      const filename=Date.now() + image.name;
      data.append("name", filename)
      data.append("file",image);
      newpost.image=filename
      console.log(newpost)
      try{
          dispatch(uploadImage(data))
      }
      catch(err){
        console.log(err);
      }
    }
    dispatch(uploadPost(newpost))
    reset();
  }

  return (
    <div className="SharePost">
      <img src={ProfilePic} alt="profile pic of share" />

      <div>
        <input ref={desc} required type="text" placeholder="Flex your work!" />
        <div className="postoption">
          <div
            className="opt"
            style={{ color: '#fc7a57' }}
            onClick={() => imageRef.current.click()}
          >
            <MdAddPhotoAlternate size={21} />
            Images
          </div>
          <div
            className="opt"
            style={{ color: '#38b000' }}
            onClick={() => videoRef.current.click()}
          >
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
          <button type="button" className="share-button button_text"  onClick={handleSubmit}>
            {loading? "Uploading..,":"Share"}
            <span className="button__text"></span>
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
            <input type="file" name="myvideo" ref={videoRef} onChange={onVideoChange} />
          </div>
        </div>

        {image && (
          <div className="prevImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL .createObjectURL(image)} alt="selected" className="img" />
          </div>
        )}

{video && (
  <div className="prevVideo">
    <UilTimes className="icon" onClick={() => setVideo(null)} /> 
    <video controls src={video} className="video" />
  </div>
)}

      </div>
    </div>
  );
};

export default SharePost;
