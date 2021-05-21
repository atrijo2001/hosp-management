import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Container, Card} from "react-bootstrap"

import DoctorComp from "./DoctorComp"

const GetAllDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchDoctors = async () => {
        try {
            const {data} = await axios.get("http://localhost:5000/api/doctor");
            setLoading(false);
            setDoctors(data)            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchDoctors()
    }, [])

    return (
        <div style={{background: '#50DBB4'}}>
            <h1 className="text-center font-weight-bold">Doctors details</h1>
            {!loading && doctors.length>0 ? doctors.map((doctor, key)=>(
                <div className="text-center mt-5 px-5"  style={{width: '60%', borderRadius: '12px'}}>
                    <Card key={key}>
                        <DoctorComp doctor={doctor}/>
                    </Card>
                </div>
            )) : ''}
        </div>
    )
}

export default GetAllDoctors
