import React, {useContext, useEffect} from 'react'
import DoctorContext from "../../context/DoctorContext/DoctorContext"
import Loading from "../ui/Loading"
import DoctorCard from "./DoctorCard"

const DoctorScreen = () => {

    const doctorContext = useContext(DoctorContext);
    const {getDoctors, doctors} = doctorContext;
    useEffect(()=>{
        getDoctors();
    }, [])
        return (
            <div style={userStyle}>                
               {doctors.length!==0 ? doctors.map(doctor => <DoctorCard doctor={doctor}/>) : <Loading/>}
            </div>
        )
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '0rem',
};

export default DoctorScreen
