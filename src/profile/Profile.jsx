import { useSelector } from "react-redux";
import "./profile.scss";

function Profile() {
  const username = useSelector((state) => state.userdetailSlice.user.name);
  const age = useSelector((state) => state.userdetailSlice.user.age);

  console.log(username);
  return (
    <div className="profilecard">
      <p>
        Your name <span>{username}</span> age <span>{age}</span> has been added
        to student system. You may now exit.
      </p>
    </div>
  );
}

export default Profile;
