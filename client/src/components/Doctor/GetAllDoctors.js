import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Container, Card} from "react-bootstrap"

import DoctorComp from "./DoctorComp"

const GetAllDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const [error, setError] = useState(null)
    const fetchDoctors = async () => {
        try {
            const {data} = await axios.get("http://localhost:5000/api/doctor");
            setDoctors(data)            
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }

    useEffect(()=>{
        fetchDoctors()
    }, [])

    if(doctors.length>0){
        console.log(doctors)
    }
    return (
        <Container>
            {doctors && !error? doctors.map((doctor, key)=>{
                <Card key={key}>
                    <DoctorComp doctor={doctor}/>
                </Card>
            }): <h1 className="text-center">Loading</h1>}
        </Container>
    )
}

export default GetAllDoctors
