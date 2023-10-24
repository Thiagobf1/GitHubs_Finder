import { useState } from "react";
import { BsSearch } from "react-icons/bs";

// Correção 1: Use as props corretamente.
type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

// Correção 2: Adicione as props como argumentos da função.
const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  // Correção 2: Chame a função loadUser no evento onClick.
  const handleSearch = () => {
    loadUser(userName);
  };

  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={userName} // Correção: Use 'value' para controlar o input.
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSearch}> {/* Correção: Chame a função handleSearch. */}
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;