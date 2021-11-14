import actionTypes from "../actions/usersActionTypes";

const usersReducer = (users = [], action) => {
  let newUsers;

  switch (action.type) {
    case actionTypes.loadUsers:
      newUsers = [...action.users];
      break;

    default:
      newUsers = users;
      break;
  }

  return newUsers;
};

export default usersReducer;
