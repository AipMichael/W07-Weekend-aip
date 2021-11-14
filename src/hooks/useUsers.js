import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersThunk } from "../redux/thunks/usersThunk";

const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users);

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  return {
    users,
    loadUsers,
  };
};

export default useUsers;
