import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import News from './components/pages/News'
import Live from './components/pages/Live'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/live' component={Live} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  )
}

export default App
