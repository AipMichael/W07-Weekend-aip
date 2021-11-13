import { useEffect, useState } from "react";
import "./register.css";

const RegisterForm = () => {
  /*   const { userLogin } = useUser(); */

  const initialUser = {
    name: "",
    username: "",
    password: "",
    image: "",
    bio: "",
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

    /* userLogin(userData) */
  };

  useEffect(() => {
    setIsDisabled(
      userData.username === "" ||
        userData.password === "" ||
        userData.name === ""
    );
  }, [userData.username, userData.password, userData.name]);

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
        <div className="form-container_name">
          <label htmlFor="username">Your name: </label>
          <input
            type="name"
            className="form-container_username-input"
            id="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={changeUserData}
          />
        </div>
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
        <div className="form-container_picture">
          <label htmlFor="username">Your picture: </label>
          <input
            type="picture"
            className="form-container_picture-input"
            id="image"
            placeholder="Enter your picture's url"
            value={userData.image}
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

export default RegisterForm;
