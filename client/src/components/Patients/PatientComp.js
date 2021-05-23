import React from 'react';
import { Container } from 'react-bootstrap';

const PatientComp = ({ patient }) => {
	const { name, sex, contactNumber } = patient;
	console.log(patient);
	return (
		<Container style={{ color: '#033B4A' }}>
			<p>Name: {name}</p>
			<p>Sex: {sex}</p>
			<p>Contact Number: {contactNumber}</p>
			<p>Doctor: {patient.doc.name}</p>
			<p>Department: {patient.doc.department}</p>
		</Container>
	);
};

export default PatientComp;
