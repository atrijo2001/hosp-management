import React from 'react'
import {Container} from "react-bootstrap"

const PatientComp = ({patient}) => {
    console.log(patient)
    const {name, sex, contactNumber} = patient
    const {department} = patient.doc
    return (
        <Container>
           <h5>Name: {name}</h5>
           <h5>Sex: {sex}</h5>    
           <h5>Contact Number: {contactNumber}</h5>  
           <h5>Doctor: {patient.doc.name}</h5>  
           <h5>Department: {department}</h5>
        </Container>
    )
}

export default PatientComp
