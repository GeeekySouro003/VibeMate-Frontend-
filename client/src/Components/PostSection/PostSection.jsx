import React from 'react'
import SharePost from '../SharePost/SharePost'
import './PostSection.css';
import Posts from '../Posts/Posts';

const PostSection = () => {
  return (
   <div className="PostSection">
    <SharePost/>
    <Posts/>
   </div>
  )
}

export default PostSection