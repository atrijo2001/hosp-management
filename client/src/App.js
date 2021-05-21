import React from 'react'
import Helper from './Helper'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomeScreen from "./components/HomeScreen/HomeScreen"

//Import all the js files
import GetAllPatients from "./components/Patients/GetAllPatients"
import AddPatients from "./components/Patients/AddPatients"
import PatientScreen from "./components/Patients/PatientScreen"

//Import all the context
import PatientState from "./context/PatientContext/PatientState"

const App = () => {
  return (
    <PatientState>
      <BrowserRouter>
        <Helper/>
            <Switch>
              <Route exact path='/' component={HomeScreen}/>
              <Route exact path='/patient' component={PatientScreen}/>
              <Route exact path='/patient/addpatient' component={AddPatients}/>
              <Route exact path='/patient/getallpatient' component={GetAllPatients}/>
            </Switch>
        </BrowserRouter>
    </PatientState>
  
  )
}

export default App
