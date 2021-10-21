import React, {FC} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const App: FC = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/angular-mfe-page">Angular Micro Frontend Page</Link>
        <Link to="/react-mfe-page">React Micro Frontend Page</Link>
      </nav>
      <image-randomizer></image-randomizer>
      <sprbo-ping-pong></sprbo-ping-pong>
      <div className="page-area">
        <Switch>
          <Route path="/" exact={true}>
            <div className="widget-area">
              <h1>Widgets</h1>
              <angular-mfe-widget/>
              <react-mfe-widget/>
            </div>
          </Route>
          <Route path="/angular-mfe-page">
            <angular-mfe-page/>
          </Route>
          <Route path="/react-mfe-page">
            <react-mfe-page/>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
)

export default App
