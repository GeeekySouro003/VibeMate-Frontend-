import * as uploadApi from '../Api/UploadRequest'

export const uploadImage = (data) => async (dispatch) => {
    try {
        await uploadApi.uploadImage(data);
    } catch (err) {
        console.error(err);
    }
}

export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" });
    try {
        const newpost = await uploadApi.uploadPost(data);
        dispatch({ type: "UPLOAD_SUCCESS", data: newpost.data });
    } catch (err) {
        console.error(err);
        dispatch({ type: "UPLOAD_FAILED" });
    }
}