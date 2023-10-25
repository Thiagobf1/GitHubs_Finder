import { UserProps } from "../Types/user";
import Search from "../components/Search";
import { useState } from "react";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {

    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`); // Correção: Use crases (`) para interpolação da string.

    if(res.status === 404) {
      setError(true);
      return;
    }

    const data = await res.json();

    // Correção: Atualize o estado com os dados do usuário.
    setUser(data);

    const {avatar_url, login, location, followers, following} = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User{...user}/>}
      {error && <Error />}
    </div>
  );
};

export default Home;