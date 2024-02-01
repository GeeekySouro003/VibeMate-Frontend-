import * as UploadApi from '../Api/UploadRequest'

export const uploadImage = (data) => async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data)
        
    } catch (err) {
        console.error(err);
        
    }
}

export const uploadPost =(data) => async(dispatch) =>{
    dispatch({type:"UPLOAD_START"})
    try {
        const newPost= await UploadApi.uploadPost(data)
        dispatch({type:"UPLOAD_SUCCESS",data:newPost.data})
        
    } catch (err) {
        console.error(err);
        dispatch({type:"UPLOAD_FAILED"})
    }
}