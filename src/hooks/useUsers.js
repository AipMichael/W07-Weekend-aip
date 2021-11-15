import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersThunk, createUserThunk } from "../redux/thunks/usersThunk";

const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users);

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  const createUser = useCallback(
    (user) => {
      dispatch(createUserThunk(user));
    },
    [dispatch]
  );

  return {
    users,
    loadUsers,
    createUser,
  };
};

export default useUsers;
