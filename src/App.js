import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './pages/home'
import routes from './configs/routes'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.homepage.path} component={Homepage} />
      <Route component={Homepage} />
    </Switch>
  </BrowserRouter>
)

export default App
