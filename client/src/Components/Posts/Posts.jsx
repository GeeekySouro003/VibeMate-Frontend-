import React, { useEffect } from 'react'
import Posting from '../Posting/Posting'
import {useDispatch,useSelector} from  'react-redux';
import './Posts.css';
import { getTimelinePosts } from '../../Actions/postAction';
const Posts = () => {
const dispatch =useDispatch();
const {user} =useSelector((state)=>state.AuthReducer.authData)
const {posts,loading}=useSelector((state)=>state.PostReducer)

useEffect(()=>{
  dispatch(getTimelinePosts(user._id))
},[])
  return (
    <div className="Posts">
        { loading ? "Fetching Posts..." : 
        posts.map((post,id)=>{
            return <Posting data={post}  id={id}/>
        })}

    </div>
  )
}

export default Posts