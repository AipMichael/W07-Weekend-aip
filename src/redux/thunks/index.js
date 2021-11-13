import { userLoginAction, userLogoutAction } from "../actions/actionCreators";
import axios from "axios";
import jwtDecode from "jwt-decode";

const apiUrl: `https://aip-netzwerk.herokuapp.com/users/login`;

export const loginUserThunks = (user) => async (dispatch) => {
  const response = await axios.post(`${apiUrl}login`, user);
  console.log("hola");

  if (response.status === 200) {
    const token = response.data.token;
    console.log(token);
    const user = jwtDecode(token);
    console.log(user);
    /* dispatch(loginUserAction(loginUser)); */
    /*     localStorage.setItem("tokenStorage", JSON.stringify({ token }));
     */
  }
};