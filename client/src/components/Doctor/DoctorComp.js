import React from 'react'

const DoctorComp = ({doctor}) => {
    console.log(doctor)
    return (
        <div className="container">
            <h3 className="text-center">Name: {doctor.name}</h3>
            <h3 className="text-center">Department: {doctor.department}</h3>
            <h3 className="text-center">Qualifications: {doctor.qualifications}</h3>
            <h3 className="text-center">Gender: {doctor.sex}</h3>
        </div>
    )
}

export default DoctorComp
