// The FullRoster iterates over all of the players and creates
// a link to their profile page.
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