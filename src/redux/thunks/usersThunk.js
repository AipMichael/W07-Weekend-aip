import axios from "axios";
import { loadUsersAction } from "../actions/usersActionCreators";

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
