import {ADD_PATIENT_FAIL, ADD_PATIENT_SUCCESS, FETCH_PATIENTID_FAIL, FETCH_PATIENTID_SUCCESS, FETCH_PATIENT_FAIL, FETCH_PATIENT_SUCCESS} from "../types"

export default (state, action) => {
    switch (action.type) {
        case FETCH_PATIENT_SUCCESS:
            return{
                ...state,
                patients: action.payload,
                error: null
            }
        case FETCH_PATIENT_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case ADD_PATIENT_SUCCESS:
            return{
                ...state,
                patients: [...state.patients, action.payload]
            }
    }
}