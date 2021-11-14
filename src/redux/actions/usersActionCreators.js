import userActionTypes from "./usersActionTypes";

export const loadUsersAction = (users) => ({
  type: userActionTypes.loadUsers,
  users,
});
