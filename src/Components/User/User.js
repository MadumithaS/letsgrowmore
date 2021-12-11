import "./User.css";

const User = ({ id, first_name, last_name, email, image }) => {
  return (
    <div className="user">
      <img src={image} alt="" />
      <div className="usercontent">
        <h5 className="user-id">{id}</h5>
        <span>
          <b>{first_name + " " + last_name}</b>
        </span>
        <p className="user-email">{email}</p>
      </div>
    </div>
  );
};

export default User;
