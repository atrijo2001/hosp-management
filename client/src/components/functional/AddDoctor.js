import React, { useEffect, useState } from 'react'
import axios from "axios"

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [address, setAddress] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [department, setDepartment] = useState('')
    // console.log(name)
    const formData = {
        name:name,
        sex:sex,
        address:address,
        qualifications:qualifications,
        department:department
    }
    console.log(formData)
    const fetchData = async() =>{
        try {
            const {data} = await axios.post('http://localhost:5000/api/doctor', {
                headers: {
                    'Content-Type': 'application/json'
                }
            },formData);
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])
    return (
        <div className="container" style={{paddingTop: '20px'}}>
              <form>
            <div className="form-group">
                <label>Enter name</label>
                <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <label htmlFor="sex">Select your gender</label>
            <br/>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" value="Male" onChange={()=>setSex("Male")}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={()=>setSex("Female")}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-group">
                <label htmlFor="address">Enter Address</label>
                <input type="text" className="form-control" placeholder="Enter address" value={address} onChange={e=>setAddress(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="qualifications">Enter qualifications</label>
                <input type="text" className="form-control" placeholder="Enter qualifications" value={qualifications} onChange={(e)=>setQualifications(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="department">Enter Department</label>
                <input type="text" className="form-control" placeholder="Enter Department" value={department} onChange={(e)=>setDepartment(e.target.value)}/>
            </div>
            <button className="btn btn-primary btn-block" onSubmit={fetchData}>Submit</button>
        </form>
        </div>   
    )
}

export default AddDoctor
