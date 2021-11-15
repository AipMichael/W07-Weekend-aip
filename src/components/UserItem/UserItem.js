import "./UserItem.css";

const UserItem = ({ user }) => {
  const actionOnClick = () => {};

  return (
    <li className="contact">
      <div className="contactContainer-card">
        <div className="contact-image">
          <img
            className="user-picture"
            src={
              user.photo
                ? user.photo
                : "https://media3.giphy.com/media/3o72ETF6Uo0548dMuA/giphy.gif?cid=ecf05e474ki9kunmcoc2iagjaup093z1ci7ldz5kymko33br&rid=giphy.gif&ct=g"
            }
            alt="cute user"
            height="200"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{user.username}</h5>
          <p className="card-text">Bio: {user.bio}</p>
          <p className="card-text">
            This is my {user.friend ? "friend" : "enemy"}
          </p>
          <button onClick={actionOnClick} className="contact-relationship">
            {user.friend ? "Hate you." : "Befriend you."}
          </button>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
