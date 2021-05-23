import React from 'react'
import Helper from './Helper'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomeScreen from "./components/HomeScreen/HomeScreen"

//Import all the js files
import GetAllPatients from "./components/Patients/GetAllPatients"
import AddPatients from "./components/Patients/AddPatients"
import PatientScreen from "./components/Patients/PatientScreen"
import DoctorScreen from "./components/Doctor/DoctorScreen"
import GetAllDoctors from "./components/Doctor/GetAllDoctors"

//Import all the context
import PatientState from "./context/PatientContext/PatientState"
import AddDoctor from './components/Doctor/AddDoctor'

const App = () => {
  return (
		<PatientState>
			<BrowserRouter>
				<Helper />
				<Switch>
					<Route exact path='/' component={HomeScreen} />
					<Route exact path='/patient' component={PatientScreen} />
					<Route exact path='/patient/addpatient' component={AddPatients} />
					<Route
						exact
						path='/patient/getallpatient'
						component={GetAllPatients}
					/>
					<Route exact path='/doctor' component={DoctorScreen} />
					<Route exact path='/doctor/adddoctor' component={AddDoctor} />
					<Route exact path='/patient/getalldoctor' component={GetAllDoctors} />
				</Switch>
			</BrowserRouter>
		</PatientState>
	);
}

export default App
