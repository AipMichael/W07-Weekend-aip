import actionTypes from "../actions/usersActionTypes";

const usersReducer = (users = [], action) => {
  let newUsers;

  switch (action.type) {
    case actionTypes.loadUsers:
      newUsers = [...action.users];
      break;
    case actionTypes.createUser:
      newUsers = [...users, action.user];
      break;

    default:
      newUsers = users;
      break;
  }

  return newUsers;
};

export default usersReducer;
