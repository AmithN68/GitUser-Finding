import React,{useContext} from 'react'
import { GlobalContextApi } from './../contextApi/GlobalContext';

const SidebarComp = () => {
    let { loading, user } = useContext(GlobalContextApi);
    let { avatar_url, login, company, location, followers } = user;
  return (
    <div className='sidebar'>
          <header>
              <figure>
                  <img src={avatar_url} alt={login} />
              </figure>
              <h2>{login}</h2>
              <p>company:{company}</p>
              <p>{location}</p>
              <p>followers:{followers}</p>
      </header>
    </div>
  )
}

export default SidebarComp
