import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import "./login.css";

const LogInForm = () => {
  const { userLogin } = useUser();

  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const [isDisabled, setIsDisabled] = useState(true);

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    userLogin(userData);
  };

  useEffect(() => {
    setIsDisabled(userData.username === "" || userData.password === "");
  }, [userData.username, userData.password]);

  return (
    <div className="form-container">
      <h2 className="form-container__text">
        Welcome! We're happy to have you here at MarioNet: a site for
        establishing relationships, breaking them and sharing mini de fuet.
      </h2>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
        className="login-form"
      >
        <div className="form-container_username">
          <label htmlFor="username">Your username: </label>
          <input
            type="username"
            className="form-container_username-input"
            id="username"
            placeholder="Enter your username"
            value={userData.username}
            onChange={changeUserData}
          />
        </div>
        <div className="form-container_password">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="form-container_pasword-input"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={changeUserData}
          />
        </div>
        <button type="submit" className="login__button" disabled={isDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
