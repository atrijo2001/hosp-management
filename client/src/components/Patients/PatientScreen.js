import React from 'react'
import {Link} from "react-router-dom"

const PatientScreen = () => {
    return (
			<div>
				<h1 className='text-center m-5' style={{ color: '#44BEA5' }}>
					Welcome to the Patient Screen
				</h1>
				<h4 className='text-center p-5' style={{ color: '#033B4A' }}>
					Choose your option
				</h4>
				<div className='container'>
					<div className='row'>
						<div className='col-md-10 mt-3' style={{ margin: '0 auto' }}>
							<Link
								type='button'
								to='/patient/addpatient'
								className='btn btn-primary w-100'
								style={{ background: '#033B4A', fontFamily: 'Abril Fatface' }}
							>
								Add Patient
							</Link>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-10 mt-3' style={{ margin: '0 auto' }}>
							<Link
								type='button'
								to='/patient/getallpatient'
								className='btn btn-primary w-100'
								style={{ background: '#033B4A', fontFamily: 'Abril Fatface' }}
							>
								Get All Patients
							</Link>
						</div>
					</div>
				</div>
			</div>
		);

}

export default PatientScreen
