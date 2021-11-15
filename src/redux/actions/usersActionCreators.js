import userActionTypes from "./usersActionTypes";

export const loadUsersAction = (users) => ({
  type: userActionTypes.loadUsers,
  users,
});

export const createUserAction = (user) => ({
  type: userActionTypes.createUser,
  user,
});
