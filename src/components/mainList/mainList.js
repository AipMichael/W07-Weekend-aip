import useUsers from "../../hooks/useUsers";
import useUser from "../../hooks/useUser";
import "./mainList.css";

import { useEffect } from "react";
import UserItem from "../UserItem/UserItem";

const MainList = () => {
  const { users, loadUsers } = useUsers();
  const { user } = useUser();

  useEffect(() => {
    loadUsers();
  }, [loadUsers, user.isAuthenticated]);

  return (
    <>
      <img
        src="https://i.ibb.co/1zy9xG9/mario-Nette.png"
        alt="marionette"
        className="marionette"
      />
      <ul>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
    </>
  );
};

export default MainList;
