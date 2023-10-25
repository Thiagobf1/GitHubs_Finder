import { UserProps } from "../Types/User";
import { MdLocationPin } from "react-icons/md";

const User = ({ login, avatar_url, followers, following, location }: UserProps) => {
  return (
    <div>
      <img src={avatar} alt={login} />
      <h2>{login}</h2>
      <p>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      <div>
        <p>Seguidores</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Seguindo:</p>
        <p>{following}</p>
      </div>
    </div>
  );
};

export default User;