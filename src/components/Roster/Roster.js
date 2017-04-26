// The Roster component matches one of two different routes
// depending on the full pathname
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