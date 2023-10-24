import { UserProps } from "../Types/user";
import Search from "../components/Search";
import { useState } from "react";

const Home = () => {
  // Correção: Use useState para criar um estado e uma variável para armazená-lo.
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`); // Correção: Use crases (`) para interpolação da string.

    const data = await res.json();

    // Correção: Atualize o estado com os dados do usuário.
    setUser(data);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {/* Correção: Exibir informações do usuário, se disponível. */}
      {user && (
        <div>
          <h2>User Information</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;