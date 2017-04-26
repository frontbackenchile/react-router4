// El componente Main renderizará una de las 3 rutas
// entregadas (La que concuerde con su /ruta ). Las
// rutas /roster y /schedule van a concordar con cualquier
// pathname que empiece con /roster o /schedule. La ruta /
// sólo va a concordar cuando el pathname sea exactamente
// el string "/" (en este caso).
import { Switch, Route } from 'react-router-dom'
import React from "react";
import Home from '../Home/Home'
import Roster from '../Roster/Roster'
import Schedule from '../Schedule/Schedule'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)
export default Main;