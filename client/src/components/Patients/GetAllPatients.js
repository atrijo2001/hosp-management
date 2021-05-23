import React, { useContext, useEffect, useState } from 'react';
import PatientContext from '../../context/PatientContext/PatientContext';

import { Card} from 'react-bootstrap';

import PatientComp from './PatientComp';
import Pagination from '../Pagination';

const GetAllPatients = () => {
	//Loading state
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [patientsPerPage] = useState(3);
	const patientContext = useContext(PatientContext);
	const { patients, FetchAllPatientData, error } = patientContext;
	useEffect(() => {
		FetchAllPatientData();
		setLoading(false);
	}, []);

    //Get current patients
	const indexOFLastPatient = currentPage * patientsPerPage;
	const indexOFFirstPatient = indexOFLastPatient - patientsPerPage;
	const currentPatients = patients.slice(
		indexOFFirstPatient,
		indexOFLastPatient
    );
    
    //Change page
    const paginate = (pageNumber)=>{setCurrentPage(pageNumber)}

	return (
		<div style={{ background: '#50DBB4' }}>
			<h1
				className='text-center text-light '
				style={{ fontFamily: 'Bowlby One SC' }}
			>
				Patients details
			</h1>
			{!loading && currentPatients.length > 0
				? currentPatients.map((patient, key) => (
						<div
							className='text-center mt-5 px-5'
							style={{ borderRadius: '12px' }}
						>
							<Card key={key}>
								<PatientComp patient={patient} />
							</Card>
						</div>
				))
				: ''}
			<Pagination
				patientsPerPage={patientsPerPage}
				totalPatients={patients.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default GetAllPatients;
