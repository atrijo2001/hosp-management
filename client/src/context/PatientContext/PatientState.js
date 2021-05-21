import React, { useReducer } from 'react'
import PatientReducer from "./PatientReducer"
import PatientContext from "./PatientContext"
import axios from "axios"
import {ADD_PATIENT_FAIL, ADD_PATIENT_SUCCESS, FETCH_PATIENTID_FAIL, FETCH_PATIENTID_SUCCESS, FETCH_PATIENT_FAIL, FETCH_PATIENT_SUCCESS} from "../types"

const PatientState = (props) => {
    const initialState = {
        patients: [],
        patientById: {},
        error: {}
    }
    const [state, dispatch] = useReducer(PatientReducer, initialState)

    ///Fetch all patients
    const FetchAllPatientData = async() => {
        try {
            const {data} = await axios.get("http://localhost:5000/api/patient", {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTc2NThhNjA1YzgwNDMwMDQyODM3MiIsImlhdCI6MTYyMTU5MTg2OCwiZXhwIjoxNjI0MTgzODY4fQ.hbErDlFr68p0UHpPZQTnLB5U5ealfgtJDM8TqMGhdmE'
                }
            })
            dispatch({
                type: FETCH_PATIENT_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: FETCH_PATIENT_FAIL,
                payload: err
            })
        }
    }

    // Add patient to the hospital database
    const addPatient = async(formData) => {
        try {
            const {data} = await axios.post("http://localhost:5000/api/patient", formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTc2NThhNjA1YzgwNDMwMDQyODM3MiIsImlhdCI6MTYyMTU5MTg2OCwiZXhwIjoxNjI0MTgzODY4fQ.hbErDlFr68p0UHpPZQTnLB5U5ealfgtJDM8TqMGhdmE'
                }
            })

            dispatch({
                type: ADD_PATIENT_SUCCESS,
                payload: data
            })
        } catch (err) {
            
        }
    }
    return (
        <PatientContext.Provider value={{
            patients: state.patients,
            patientById: state.patientById,
            error: state.error,
            FetchAllPatientData,
            addPatient
        }}>
            {props.children}
        </PatientContext.Provider>
    )
}

export default PatientState
