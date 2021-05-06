import React, { useState } from 'react'
import "./App.css"
import {useFormik} from "formik"
import axios from "axios"



const App = () => {
    const [res, setRes] = useState({})

    const initialValues = {
        name:'',
        email:'',
        password:'',
        role: '',
        salary: '',
        contactNumber: ''
      }
      
      const onSubmit =async values =>{
        try {
            const {data} = await axios.post("http://localhost:5000/api/employee/register", values, {
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            setRes(data)
            localStorage.setItem('token', data.token);
            const token = localStorage.getItem('token')
            console.log(token)
        } catch (error) {
            console.log(error)
        }
    }
      
      const validate = values =>{
        let errors = {}
        if(!values.name){
          errors.name = 'Required'
        }
        if(!values.email){
          errors.email = 'Required'
        } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
          errors.email = 'Invalid email format'
        }
        if(!values.password){
          errors.password = 'Required'
        }
        if(!values.role){
            errors.role = 'Required'
        }
        if(!values.salary){
            errors.salary = 'Required'
        } 
        if(!values.contactNumber){
            errors.contactNumber = 'Required'
        }

      
        return errors
      }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })



  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-aontrol">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>
        
        <div className="form-control">
            <label htmlFor="email">email</label>
            <input type="email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
            {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
        
        <div className="form-control">
            <label htmlFor="password">password</label>
            <input type="text" id="password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
            {formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null}
        </div>

        <div className="form-control">
            <label htmlFor="role">Role</label>
            <input type="text" id="role" name="role" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.role}/>
            {formik.errors.role && formik.touched.role ? <div className="error">{formik.errors.role}</div> : null}
        </div>

        <div className="form-control">
            <label htmlFor="salary">Salary</label>
            <input type="text" id="salary" name="salary" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.salary}/>
            {formik.errors.salary && formik.touched.salary ? <div className="error">{formik.errors.salary}</div> : null}
        </div>

        <div className="form-control">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="text" id="contactNumber" name="contactNumber" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contactNumber}/>
            {formik.errors.contactNumber && formik.touched.contactNumber ? <div className="error">{formik.errors.contactNumber}</div> : null}
        </div>
    
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
