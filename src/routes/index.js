import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Portfolio from '../pages/Portfolio'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contato} />
      <Route path="/portfolio" exact component={Portfolio} />

    </Switch>
  )
}

export default Routes