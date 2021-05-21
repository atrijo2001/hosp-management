import React from 'react'
import {Link} from "react-router-dom"

const PatientScreen = () => {
    return (
        <div>
            <h1 className="text-center">Welcome to the Patient Screen</h1>
            <h4 className='text-center'>Choose your option</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mt-3">
                        <Link type='button' to='/patient/addpatient' className='btn btn-primary w-100'>Add Patient</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 mt-3">
                        <Link type='button' to='/patient/getallpatient' className='btn btn-primary w-100'>Get All Patients</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PatientScreen
