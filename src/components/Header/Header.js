// El Header crea enlaces que pueden ser usados para navegar
// entre rutas.
import { Link } from 'react-router-dom'
import React from "react";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;