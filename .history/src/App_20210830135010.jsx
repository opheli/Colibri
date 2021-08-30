import React from 'react'
import Home from './components/Home'
import Students from './components/Students'
import Dashboard from './components/Dashboard'
import TouchGameLevelOne from './components/games/TouchGameLevelOne'
import TouchGameLevelTwo from './components/games/TouchGameLevelTwo'
import TouchGameLevelThree from './components/games/TouchGameLevelThree'
import TapGameLevelOne from './components/games/TapGameLevelOne'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/students" component={Students} />
        <Route path="/dashboard/:id" component={Dashboard} />
        {/* Routes to Touch Game */}
        <Route path="/TouchGameLevelOne/:id" component={TouchGameLevelOne} />
        <Route path="/TouchGameLevelTwo/:id" component={TouchGameLevelTwo} />
        <Route path="/TouchGameLevelThree/:id" component={TouchGameLevelThree} />
        {/* Routes to TapGame */}
        <Route path="/TapGameLevelOne/:id" component={TapGameLevelOne} />
        <Route path="/TapGameLevelOne/:id" component={TapGameLevelOne} />
        <Route path="/TapGameLevelOne/:id" component={TapGameLevelOne} />

      </Switch>

    </BrowserRouter>
  )
}