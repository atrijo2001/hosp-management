import React from 'react'
import {Link} from "react-router-dom"

const DoctorScreen = () => {
    return (
			<div>
				<h1 className='text-center m-5' style={{ color: '#44BEA5' }}>
					Welcome to the Doctor Screen
				</h1>
				<h4 className='text-center p-5' style={{ color: '#033B4A' }}>
					Choose your option
				</h4>
				<div className='container'>
					<div className='row'>
						<div className='col-md-10' style={{ margin: '0 auto' }}>
							<Link
								type='button'
								to='/doctor/adddoctor'
								className='btn btn-success w-100'
								style={{ background: '#033B4A', fontFamily: 'Abril Fatface' }}
							>
								Add Doctor
							</Link>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-10 mt-3' style={{ margin: '0 auto' }}>
							<Link
								type='button'
								to='/doctor/getalldoctor'
								className='btn btn-success w-100'
								style={{ background: '#033B4A', fontFamily: 'Abril Fatface' }}
							>
								Get All Doctors
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
}

export default DoctorScreen
