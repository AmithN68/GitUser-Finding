import React, { useContext,useState } from 'react'
import { GlobalContextApi } from './../contextApi/GlobalContext';

const SearchComp = () => {
    let { OnTermSubmit } = useContext(GlobalContextApi);

    let [search, setSearch] = useState("");
    let handleSubmit = e => {
        e.preventDefault();
        OnTermSubmit(search);
    }
  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="search here" value={search} onChange={e=>setSearch(e.target.value)} />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchComp
