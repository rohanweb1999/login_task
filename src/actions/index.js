import { DELETE_SELECT_EMPLOYEE, SELECT_EDIT_LIST, SERCH_USER_DATA, SUBMIT_DATA, UPDATE_SELECTED_USERDATA } from "./Types"
// import axios from 'axios';


export const submitData = (userData) => {
    // axios.post('http://localhost:3001/register', userData)
    return {
        type: SUBMIT_DATA,
        userData,
    }
}
export const deleteSelectEmployee = (id) => {
    // axios.post('http://localhost:3001/deleteEmployee', id)
    return {
        type: DELETE_SELECT_EMPLOYEE,
        id,
    }
}
export const searchInputData = (data) => {
    // axios.get(`http://localhost:3001/getEmployee?name='xyz'&salary='500'`)
    // axios.post(`http://localhost:3001/getEmployee`, {name: 'xyz', salary: '500'})
    return {
        type: SERCH_USER_DATA,
        data
    }
}
export const selectEditList = (id) => {
    // axios.get(`http://localhost:3001/getEmployee/123456`)
    return {
        type: SELECT_EDIT_LIST,
        id
    }
}
export const updateSelectedUserdata = (id, data) => {
    // axios.put(`http://localhost:3001/getEmployee/${id}`, data)
    return {
        type: UPDATE_SELECTED_USERDATA,
        id,
        data
    }
}