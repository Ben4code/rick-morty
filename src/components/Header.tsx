import React, { useContext } from 'react';
import { Store } from '../Store';
import { Link } from 'react-router-dom'

const Header = () => {
  //Get content from state.
  const { state } = useContext(Store);

  return (
    <header className="header">
      <div>
        <Link to='/'>
          <h1 className="brand">Castlevania</h1>
        </Link>
        <p>Pick your favourite episode!</p>
      </div>

      <ul className="nav">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/favs'}>Favourites: {state.favourites.length}</Link></li>
      </ul>

    </header>

  )
}

export default Header
