// El componente Roster concordará con una de dos rutas
// diferentes dependiendo del pathname completo:
// Si es exactamente /roster, renderiza FullRoster.
// Si es /roster/:number, renderizará el Player
// que corresponda al ID que recibimos en el path.
import React from "react";
import { Switch, Route } from 'react-router-dom'
import FullRoster from '../FullRoster/FullRoster'
import Player from '../Player/Player'

const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

export default Roster;