import { DELETE_SELECT_EMPLOYEE, SUBMIT_DATA } from "../actions/Types"

const initialState = {
    employeeList: [],

}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_DATA:
            console.log("state", state.employeeList);
            console.log("action.userData", action.userData);
            return {
                employeeList: [...state.employeeList, action.userData]
            }


        case DELETE_SELECT_EMPLOYEE:

            return {
                ...state,
                employeeList: state.employeeList.filter((e, i) => i !== action.index)
            }
        default:
            return state;
    }
}

export default employeeReducer;