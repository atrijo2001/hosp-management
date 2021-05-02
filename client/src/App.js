import React from 'react'
import Helper from "./components/ui/Helper"
import HomeScreen from "./components/screens/HomeScreen"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import DoctorScreen from './components/screens/DoctorScreen'
import DoctorState from "./context/DoctorContext/DoctorState"

import AddDoctor from "./components/functional/AddDoctor"

const App = () => {
  return (
    <DoctorState>
      <Helper/>
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={HomeScreen}/>
              <Route exact path='/doctors' component={DoctorScreen}/>
              <Route exact path='/adddoctor' component={AddDoctor}/>
          </Switch>
      </BrowserRouter>
    </DoctorState>
  )
}

export default App
