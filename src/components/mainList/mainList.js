import useUsers from "../../hooks/useUsers";
import useUser from "../../hooks/useUser";
import "./mainList.css";

import { useEffect } from "react";

const MainList = () => {
  const { users, loadUsers } = useUsers();
  const { user } = useUser();

  useEffect(() => {
    loadUsers();
  }, [loadUsers, user.isAuthenticated]);

  return (
    <>
      {user.isAuthenticated ? (
        <>
          <img
            src="https://i.ibb.co/1zy9xG9/mario-Nette.png"
            alt="marionette"
          />
          <pre className="mi-pre">{JSON.stringify(users, null, 2)}</pre>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MainList;
