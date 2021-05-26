// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// React Router DOM
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


// Pages
import HomePage from './pages/Home/Home'
import PatientsPage from './pages/Patients/Patients'
import DoctorsPage from './pages/Doctors/Doctors'

function App () {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {/* HomePage route */}
          <Route exact path="/" component={HomePage} />
           {/* PatientsPage route */}
          <Route exact path="/patients/" component={PatientsPage} />
          {/* DoctorsPage route */}
          <Route exact path="/doctors/" component={DoctorsPage} />

        </Switch>
      </div>
    </Router>
  )
}

export default App
