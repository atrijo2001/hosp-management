import React from 'react';
import background from '../../images/hospital.jpg';

import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
	const history = useHistory();
	const patientClicked = () => {
		history.push('/patient');
	};

	const doctorClicked = () => {
		history.push('/doctor');
	};
	return (
		<div>
			<img
				src={background}
				width='100%'
				height='600vh'
				style={{ objectFit: 'cover' }}
			/>
			<div className='container'>
				<div className='row'>
					<div className='col-3'>
						<div
							className='card m-3 p-3 text-center'
							style={{ backgroundColor: '#033b4a', color: '#fff' }}
						>
							<h5 style={{ fontFamily: 'Bowlby One SC' }}>
								Free consultations
							</h5>
							<p style={{ fontFamily: 'Josefin Slab' }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								eius mollitia totam.
							</p>
						</div>
					</div>
					<div className='col-3'>
						<div
							className='card m-3 p-3 text-center'
							style={{ backgroundColor: '#033b4a', color: '#fff' }}
						>
							<h5 style={{ fontFamily: 'Bowlby One SC' }}>
								Specialist Doctors
							</h5>
							<p style={{ fontFamily: 'Josefin Slab' }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								eius mollitia totam.
							</p>
						</div>
					</div>
					<div className='col-3'>
						<div
							className='card m-3 p-3 text-center'
							style={{ backgroundColor: '#033b4a', color: '#fff' }}
						>
							<h5 style={{ fontFamily: 'Bowlby One SC' }}>Latest Technology</h5>
							<p style={{ fontFamily: 'Josefin Slab' }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								eius mollitia totam.
							</p>
						</div>
					</div>
					<div className='col-3'>
						<div
							className='card m-3 p-3 text-center'
							style={{ backgroundColor: '#033b4a', color: '#fff' }}
						>
							<h5 style={{ fontFamily: 'Bowlby One SC' }}>Modern Laboratory</h5>
							<p style={{ fontFamily: 'Josefin Slab' }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								eius mollitia totam.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container mb-5'>
				<div className='row'>
					<div className='col-6'>
						<button
							onClick={patientClicked}
							className='btn w-100'
							style={{
								backgroundColor: '#033b4a',
								color: '#fff',
								fontFamily: 'Bowlby One SC',
							}}
						>
							Patients
						</button>
					</div>
					<div className='col-6'>
						<button
							onClick={doctorClicked}
							className='btn w-100'
							style={{
								backgroundColor: '#033b4a',
								color: '#fff',
								fontFamily: 'Bowlby One SC',
							}}
						>
							Doctor
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
