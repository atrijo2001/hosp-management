import React from 'react'
import Helper from './Helper'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomeScreen from "./components/HomeScreen/HomeScreen"

//Import all the js files
import GetAllPatients from "./components/Patients/GetAllPatients"

//Import all the context
import PatientState from "./context/PatientContext/PatientState"

const App = () => {
  return (
    <PatientState>
        <GetAllPatients/>
    </PatientState>
  
  )
}

export default App
