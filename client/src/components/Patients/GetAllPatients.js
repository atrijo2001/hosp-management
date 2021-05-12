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
        <div style={{background: '#50DBB4'}}>
            <h1 className="text-center font-weight-bold">Patients details</h1>
            {!loading && patients.length>0 ? patients.map((patient, key)=>(
                <div className="text-center mt-5 px-5"  style={{width: '60%', borderRadius: '12px'}}>
                    <Card key={key}>
                        <PatientComp patient={patient}/>
                    </Card>
                </div>
            )) : ''}
        </div>
    )
}

export default GetAllPatients
