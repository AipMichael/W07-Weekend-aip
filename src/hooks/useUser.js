import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk, logoutUserThunk } from "../redux/thunks/index";
import jwtDecode from "jwt-decode";
import { userIsAuthenticatedAction } from "../redux/actions/actionCreators";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const userLogin = (user) => {
    dispatch(loginUserThunk(user));
  };

  const isAuthenticated = useCallback(() => {
    const checkUserAuthenticated = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    if (checkUserAuthenticated) {
      const userData = jwtDecode(checkUserAuthenticated.token);

      dispatch(userIsAuthenticatedAction(userData));
    }
  }, [dispatch]);

  const logoutUser = useCallback(() => {
    localStorage.removeItem("user");
    dispatch(logoutUserThunk());
  }, [dispatch]);

  return {
    user,
    userLogin,
    isAuthenticated,
    logoutUser,
  };
};

export default useUser;
