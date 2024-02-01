import * as AuthApi from '../Api/AuthRequest.js';

export const logIn = (FormData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.logIn(FormData);
    dispatch({ type: "AUTH_SUCCESSFUL", data: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (FormData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.signUp(FormData);
    dispatch({ type: "AUTH_SUCCESSFUL", data: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: "AUTH_FAIL" });
  }
};
