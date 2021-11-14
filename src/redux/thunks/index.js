import { userLoginAction, userLogoutAction } from "../actions/actionCreators";
import axios from "axios";
import jwtDecode from "jwt-decode";

const myApi = `https://aip-netzwerk.herokuapp.com/users`;

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await axios.post(myApi + "users/login", user);
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token); //instaló npm i jwt-decode
    dispatch(userLoginAction(user));
    localStorage.setItem(
      process.env.REACT_APP_LOCAL_STORAGE,
      JSON.stringify({ token: token })
    );
  }
};

export const logoutUserThunk = () => {
  return (dispatch) => {
    dispatch(userLogoutAction());
  };
};
