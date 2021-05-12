import React, { useContext, useEffect, useState } from 'react'
import PatientContext from "../../context/PatientContext/PatientContext"

import {Card} from "react-bootstrap"

import PatientComp from "./PatientComp"

const GetAllPatients = () => {

    //Loading state
    const [loading, setLoading] = useState(true)

    const patientContext = useContext(PatientContext)
    const {patients, FetchAllPatientData, error} = patientContext
    useEffect(()=>{
        FetchAllPatientData()
        setLoading(false)
    }, [])


    return (
        <div>
            {!loading && patients.length>0 ? patients.map((patient, key)=>(
                <Card key={key}>
                    <PatientComp patient={patient}/>
                </Card>
            )) : ''}
        </div>
    )
}

export default GetAllPatients
