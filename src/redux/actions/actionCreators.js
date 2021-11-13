import actionTypes from "./actionTypes";

export const loadUsersAction = (users) => ({
  type: actionTypes.loadRobots,
  users,
});

export const createUserAction = (user) => ({
  type: actionTypes.createRobot,
  user,
});

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.userLogout,
});
