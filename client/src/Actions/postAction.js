import * as PostApi from '../Api/PostRequest.js'

export const getTimelinePosts= (id) => async(dispatch)=>{
    dispatch({type:"RETREIVING_STARTED"})
    try {
        const {data}=await PostApi.getTimelinePosts(id);
        dispatch({type:"RETREIVING_SUCCESSFUL",data:data})

    } catch (err) {
        dispatch({type:"RETREIVING_FAILED"})
        console.error(err);
        
    }
} 