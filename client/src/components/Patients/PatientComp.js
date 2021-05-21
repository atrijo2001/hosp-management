import React from 'react'
import {Container} from "react-bootstrap"
import axios from "axios"

const PatientComp = ({patient}) => {
    const {name, sex, contactNumber} = patient
    console.log(patient)
    return (
        <Container>
           <h5>Name: {name}</h5>
           <h5>Sex: {sex}</h5>    
           <h5>Contact Number: {contactNumber}</h5>  
           <h5>Doctor: {patient.doc.name}</h5>  
           <h5>Department: {patient.doc.department}</h5>
        </Container>
    )
}

export default PatientComp
