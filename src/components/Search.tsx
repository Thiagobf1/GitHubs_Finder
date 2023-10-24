
import {BsSearch} from 'react-icons/bs';

const Search = () => {
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder='Digite o nome do usuário' />
        <button type="button">
          <BsSearch.Search/>        
        </button>
      </div>
    </div>
  )
}

export default Search