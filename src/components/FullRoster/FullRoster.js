// El componente FullRoster itera sobre la lista completa de
// Players(de la API) y crea un enlace a su página de perfil.
// Cada enlace lleva a una ruta del tipo /roster/:id,
// lo que a su vez renderizará Player (ver Roster.js)
import { Link } from 'react-router-dom'
import React from "react";
import PlayerAPI from '../../utils/PlayerAPI'

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster;