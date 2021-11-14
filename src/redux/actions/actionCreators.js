import actionTypes from "./actionTypes";

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

export const userIsAuthenticatedAction = (user) => ({
  type: actionTypes.userAuthentication,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.userLogout,
});
