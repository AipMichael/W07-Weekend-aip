import axios from "axios";
import {
  loadUsersAction,
  createUserAction,
} from "../actions/usersActionCreators";

const myApi = `https://aip-netzwerk.herokuapp.com/users`;

export const loadUsersThunk = () => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );
  const { data: users } = await axios.get(myApi, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch(loadUsersAction(users));
};

export const createUserThunk = (user) => {
  return async (dispatch) => {
    try {
      const { data: newUser } = await axios.post(`${myApi}/register`, user);
      dispatch(createUserAction(newUser));
    } catch (error) {
      console.log("peligro thunk 27", error);
    }
  };
};
