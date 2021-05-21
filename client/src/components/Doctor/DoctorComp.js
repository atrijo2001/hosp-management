import React from 'react'

const DoctorComp = ({doctor}) => {
    return (
        <div className="container">
            <h3 className="text-center">{doctor.name}</h3>
        </div>
    )
}

export default DoctorComp
