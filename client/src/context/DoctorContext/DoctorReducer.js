import {DOCTOR_FETCHH_FAIL, DOCTOR_FETCH_SUCCESS} from "../types"

export default (state, action) =>{
    switch (action.type) {
        case DOCTOR_FETCH_SUCCESS:
            return{
                 ...state,
                 doctors: action.payload
            }
        case DOCTOR_FETCHH_FAIL:
            return{
                ...state,
                error: action.payload
            }
    }
}