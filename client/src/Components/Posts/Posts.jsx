import React from 'react'
import { PostsData } from '../../Data/Postsdata'
import Posting from '../Posting/Posting'
import './Posts.css';
const Posts = () => {
  return (
    <div className="Posts">
        {PostsData.map((post,id)=>{
            return <Posting data={post}  id={id}/>
        })}

    </div>
  )
}

export default Posts