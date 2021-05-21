import React from 'react'
import {Link} from "react-router-dom"

const DoctorScreen = () => {
    return (
        <div>
            <h1 className="text-center">Welcome to the Doctor Screen</h1>
            <h4 className='text-center'>Choose your option</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mt-3">
                        <Link type='button' to='/patient/adddoctor' className='btn btn-warning w-100'>Add Doctor</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 mt-3">
                        <Link type='button' to='/patient/getalldoctor' className='btn btn-warning w-100'>Get All Doctors</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorScreen
