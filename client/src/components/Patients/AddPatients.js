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
        "doc": '60770e6f08b7084ca4d21cc4'
    }
    
    const onSubmit = values => {
        addPatient(values)
        alert("You have successfully added to the db")
    }

    
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        contactNumber: Yup.string().required('Required'),
        sex: Yup.string().required('Required'),
        doc: Yup.string().required('Required')
    })


    return (
        <Container>
            <h4 className="text-center mb-4">Enter the details of the patient</h4>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className="form-control my-2 py-2">
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />       
                        <ErrorMessage name="name" component={TextError}/>
                    </div> 

                    <div className="form-control my-2 py-2">
                        <label htmlFor="sex">Sex</label>
                        <Field as="select" id="sex" name="sex">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Field>
                    </div>

                    <div className="form-control my-2 py-2">
                        <label htmlFor="address">Address</label>
                        <Field type="text" id="address" name="address" />       
                        <ErrorMessage name="address" component={TextError}/>
                    </div> 

                    <div className="form-control my-2 py-2">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <Field type="text" id="contactNumber" name="contactNumber" />       
                        <ErrorMessage name="contactNumber" component={TextError}/>
                    </div> 

                    <div className="form-control my-2 py-2">
                        <label htmlFor="doc">Doctor</label>
                        <Field as="select" id="doc" name="doc">
                            <option value="60770e6f08b7084ca4d21cc4">Dr Atrijo Gangopadhyay</option>
                            <option value="60770e9a08b7084ca4d21cc5">Dr Anukriti Verma</option>
                            <option value="6088355af1302148d88fd5c1">Dr Arkadeep Mukherjee</option>
                            <option value="608ec7f6f3ad92286c05ebf5">Dr Pratyush Chatterjee</option>
                        </Field>
                    </div>

                    <button type='submit' className="btn btn-primary btn-block">Submit</button>
                </Form>
            </Formik>
        </Container>
    )
}

export default AddPatients
