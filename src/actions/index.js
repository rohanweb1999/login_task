import { DELETE_SELECT_EMPLOYEE, SUBMIT_DATA } from "./Types"



export const submitData = (userData) => {
    return {
        type: SUBMIT_DATA,
        userData,
    }
}
export const deleteSelectEmployee = (index) => {
    return {
        type: DELETE_SELECT_EMPLOYEE,
        index,
    }
}