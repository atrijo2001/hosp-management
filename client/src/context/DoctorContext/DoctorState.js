import DoctorContext from "./DoctorContext";
import DoctorReducer from "./DoctorReducer";
import {DOCTOR_FETCHH_FAIL, DOCTOR_FETCH_SUCCESS} from "../types";
import axios from "axios";
import React,{ useReducer } from "react";

const DoctorState = props => {
    const initialState = {
        doctors: [],
        error: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(DoctorReducer, initialState);

    const getDoctors = async(props)=>{
        try {
            console.log(props)
            const {data} = await axios.get(`http://localhost:5000/api/doctor?department=${props}`);
            dispatch({type: DOCTOR_FETCH_SUCCESS, payload: data})
        } catch (err) {
            dispatch({type: DOCTOR_FETCHH_FAIL, payload: err})
        }
    }
   return(
       <DoctorContext.Provider 
       value={{
           doctors: state.doctors,
           error: state.error,
           getDoctors
       }}>
           {props.children}
       </DoctorContext.Provider>
   )
}


export default DoctorState
