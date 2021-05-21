import React from 'react'
import {Container} from "react-bootstrap"
import axios from "axios"

const PatientComp = ({patient}) => {

    const deletePatient = async(id) => {
        console.log(id)
        try {
            const res = await axios.delete(`http://localhost:5000/api/patient/${id}`,{
                headers:{
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOTBmYTNlNmQ3MGQyNWM5MGYzZWM2ZCIsImlhdCI6MTYyMDgzODIzNCwiZXhwIjoxNjIzNDMwMjM0fQ.HnAK-6VJpTTcS3HvML6eI184vKO-Phm3th66afgywP8'
                }
            })
            console.log(res)   
        } catch (err) {
            console.log(err)
        }
    }
    const {name, sex, contactNumber} = patient
    const {department} = patient.doc
    return (
        <Container>
           <h5>Name: {name}</h5>
           <h5>Sex: {sex}</h5>    
           <h5>Contact Number: {contactNumber}</h5>  
           <h5>Doctor: {patient.doc.name}</h5>  
           <h5>Department: {department}</h5>
           <button className="btn-danger w-100" onClick={()=>deletePatient(patient._id)}>Delete</button>
        </Container>
    )
}

export default PatientComp
