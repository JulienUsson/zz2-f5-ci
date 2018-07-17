import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import NotFound from 'scenes/NotFound'
import * as presentations from 'scenes/presentations'
import * as exercices from 'scenes/exercices'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {Object.values(presentations).map(({ name, Presentation }) => (
        <Route
          key={name}
          exact
          path={`/presentations/${name}`}
          render={Presentation}
        />
      ))}
      {Object.values(exercices).map(({ name, Exercice }) => (
        <Route key={name} exact path={`/exercices/${name}`} render={Exercice} />
      ))}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
