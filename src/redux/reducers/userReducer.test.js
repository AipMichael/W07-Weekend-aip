import userReducer from "./userReducer";
import { userLoginAction, userLogoutAction } from "../actions/actionCreators";
import actionTypes from "../actions/actionTypes";

describe("Given a userReducer reducer", () => {
  describe("When it receives a user, including an isAuthenticated property, and a login action", () => {
    test("Then it should return a new user with the property isAuthenticated equal to true", () => {
      const myUser = {
        isAuthenticated: false,
        user: {
          username: "userita7",
          password: "contrasenaLinda",
          name: "quieroSerUsuaria",
        },
      };

      const newUser = userReducer(myUser, userLoginAction(myUser));

      expect(newUser).toHaveProperty("isAuthenticated", true);
    });
  });

  describe("When it receives an user and a userLogoutAction action", () => {
    test("Then it should return a non-authenticated user", () => {
      const myUser = {
        isAuthenticated: false,
        user: {
          username: "userita7",
          password: "contrasenaLinda",
          name: "quieroSerUsuaria",
        },
      };
      const action = {
        type: actionTypes.userLogout,
        myUser,
      };

      const newUser = userReducer(myUser, action);

      expect(newUser).toHaveProperty("isAuthenticated", false);
    });
  });
});
