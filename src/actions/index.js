import { DELETE_SELECT_EMPLOYEE, SELECT_EDIT_LIST, SERCH_USER_DATA, SUBMIT_DATA, UPDATE_SELECTED_USERDATA } from "./Types"



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
export const searchInputData = (data) => {
    console.log();
    return {
        type: SERCH_USER_DATA,
        data
    }
}

export const selectEditList = (id) => {
    return {
        type: SELECT_EDIT_LIST,
        id
    }
}
export const updateSelectedUserdata = () => {
    return {
        type: UPDATE_SELECTED_USERDATA
    }
}