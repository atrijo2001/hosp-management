import React, { useEffect, useState } from 'react'
import {useContext} from "react"
import TextError from "./TextError"
import PatientContext from "../../context/PatientContext/PatientContext"
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"

import {Container} from "react-bootstrap"
import {useHistory} from "react-router-dom"



const AddPatients = () => {
    const patientContext = useContext(PatientContext);
    const {addPatient} = patientContext
    const history = useHistory()


    const initialValues = {
        "name": '',
        "sex": 'Male',
        "address": '',
        "contactNumber": '',
        "doc": '60a7666c2d312a1b9c57d433'
    }
    
    const onSubmit = values => {
        addPatient(values)
        alert("You have successfully added to the db")
    }

    
    const validationSchema = Yup.object({
			name: Yup.string().required('This Field is Required'),
			address: Yup.string().required('This Field is Required'),
			contactNumber: Yup.string().required('This Field is Required'),
			sex: Yup.string().required('This Field is Required'),
			doc: Yup.string().required('This Field is Required'),
		});


    return (
			<Container>
				<h3 className='text-center m-4' style={{ color: '#033b4a' }}>
					Enter the details of the patient
				</h3>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					<Form>
						<div
							className='form-control form-group  my-2 py-4'
							style={{
								backgroundColor: '#44bea5',
								fontFamily: 'Abril Fatface',
							}}
						>
							<label
								htmlFor='name'
								className='col-sm-2 col-form-label'
								style={{
									backgroundColor: '#44bea5',
									fontFamily: 'Abril Fatface',
								}}
							>
								Name
							</label>
							<Field
								className='col-sm-10'
								type='text'
								id='name'
								name='name'
								style={{ borderRadius: '8px' }}
							/>
							<ErrorMessage
								class='col-sm-10'
								name='name'
								component={TextError}
							/>
						</div>

						<div
							className='form-control form-group my-2 py-4'
							style={{
								backgroundColor: '#44bea5',
								fontFamily: 'Abril Fatface',
							}}
						>
							<label
								htmlFor='sex'
								className='col-sm-2 col-form-label'
								style={{
									backgroundColor: '#44bea5',
									fontFamily: 'Abril Fatface',
								}}
							>
								Sex
							</label>
							<Field
								className='col-sm-10'
								as='select'
								id='sex'
								name='sex'
								style={{ borderRadius: '8px' }}
							>
								<option value='Male'>Male</option>
								<option value='Female'>Female</option>
							</Field>
						</div>

						<div
							className='form-control form-group my-2 py-4'
							style={{
								backgroundColor: '#44bea5',
								fontFamily: 'Abril Fatface',
							}}
						>
							<label htmlFor='address' className='col-sm-2 col-form-label'>
								Address
							</label>
							<Field
								className='col-sm-10'
								type='text'
								id='address'
								name='address'
								style={{ borderRadius: '8px' }}
							/>
							<ErrorMessage name='address' component={TextError} />
						</div>

						<div
							className='form-control form-group my-2 py-4'
							style={{
								backgroundColor: '#44bea5',
								fontFamily: 'Abril Fatface',
							}}
						>
							<label
								htmlFor='contactNumber'
								className='col-sm-2 col-form-label'
							>
								Contact Number
							</label>
							<Field
								className='col-sm-10'
								type='text'
								id='contactNumber'
								name='contactNumber'
								style={{ borderRadius: '8px' }}
							/>
							<ErrorMessage name='contactNumber' component={TextError} />
						</div>

						<div
							className='form-control form-group my-2 py-4'
							style={{
								backgroundColor: '#44bea5',
								fontFamily: 'Abril Fatface',
							}}
						>
							<label htmlFor='doc' className='col-sm-2 col-form-label'>
								Doctor
							</label>
							<Field
								className='col-sm-10'
								as='select'
								id='doc'
								name='doc'
								style={{ borderRadius: '8px' }}
							>
								<option value='60a7666c2d312a1b9c57d433'>
									Dr Atrijo Gangopadhyay
								</option>
								<option value='60a7667d2d312a1b9c57d434'>
									Dr Anukriti Verma
								</option>
								<option value='60a766992d312a1b9c57d435'>
									Dr Arkadeep Mukherjee
								</option>
								<option value='60a766ab2d312a1b9c57d436'>
									Dr Pratyush Chatterjee
								</option>
							</Field>
						</div>

						<button
							type='submit'
							className='btn btn-primary btn-block w-100 mt-2 mb-5'
							style={{
								backgroundColor: '#033b4a',
								fontFamily: 'Abril Fatface',
							}}
						>
							Submit
						</button>
					</Form>
				</Formik>
			</Container>
		);
}

export default AddPatients
