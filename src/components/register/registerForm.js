import { useEffect, useState } from "react";
import useUsers from "../../hooks/useUsers";
import "./registerForm.css";

const RegisterForm = () => {
  const { createUser } = useUsers();

  const initialUser = {
    name: "",
    username: "",
    password: "",
    photo: "",
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

    createUser(userData);
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
      <h2 className="form-container__text">We accept you! One of us!</h2>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
        className="login-form register-form"
      >
        <div className="form-container_name form-line">
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
        <div className="form-container_username form-line">
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
        <div className="form-container_password form-line">
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
        <div className="form-container_picture form-line">
          <label htmlFor="photo">Your picture: </label>
          <input
            type="picture"
            className="form-container_picture-input"
            id="photo"
            placeholder="Enter your picture's url"
            value={userData.photo}
            onChange={changeUserData}
          />
        </div>
        <div className="form-container_bio form-line">
          <label htmlFor="bio" className="bio-label">
            Your bio:{" "}
          </label>
          <textarea
            className="form-container_picture-input"
            id="bio"
            placeholder="Enter a brief description of yourself."
            value={userData.bio}
            onChange={changeUserData}
          />
        </div>
        <button type="submit" className="login__button" disabled={isDisabled}>
          Create me!
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
