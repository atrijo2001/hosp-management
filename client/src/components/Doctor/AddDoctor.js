import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Container } from 'react-bootstrap'
import * as Yup from 'yup'
import TextError from '../Patients/TextError'

const AddDoctor = () => {
    const initialValues = {
			name: '',
			sex: 'Male',
			address: '',
			qualifications: '',
			department:''
    };
    const onSubmit =(values)=> {
        console.log('Form data', values);
    }
    const validationSchema = Yup.object({
			name: Yup.string().required('This Field is Required'),
			sex: Yup.string().required('This Field is Required'),
			address: Yup.string().required('This Field is Required'),
			qualifications: Yup.string().required('This Field is Required'),
			department: Yup.string().required('This Field is Required'),
		});
    return (
			<Container>
				<h3 className='text-center m-4' style={{ color: '#033b4a' }}>
					Enter the details of the Doctor
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
							<ErrorMessage name='name' component={TextError} />
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
								<option value='Other'>Other</option>
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
								htmlFor='qualifications'
								className='col-sm-2 col-form-label'
							>
								Qualifications
							</label>
							<Field
								className='col-sm-10'
								type='text'
								id='qualifications'
								name='qualifications'
								style={{ borderRadius: '8px' }}
							/>
							<ErrorMessage name='qualifications' component={TextError} />
						</div>

						<div
							className='form-control form-group my-2 py-4'
							style={{
								backgroundColor: '#44bea5',
								fontFamily: 'Abril Fatface',
							}}
						>
							<label htmlFor='department' className='col-sm-2 col-form-label'>
								Department
							</label>
							<Field
								className='col-sm-10'
								type='text'
								id='department'
								name='department'
								style={{ borderRadius: '8px' }}
							/>
							<ErrorMessage name='department' component={TextError} />
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

export default AddDoctor
