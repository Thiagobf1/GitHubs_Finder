import { UserProps } from "../Types/user";
import Search from "../components/Search";
import { useState } from "react";
import User from "../components/User";

const Home = () => {
  // Correção: Use useState para criar um estado e uma variável para armazená-lo.
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`); // Correção: Use crases (`) para interpolação da string.

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
    </div>
  );
};

export default Home;