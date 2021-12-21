import { DELETE_SELECT_EMPLOYEE, SERCH_USER_DATA, SUBMIT_DATA } from "../actions/Types"

const initialState = {
    formik: [],
    userInputFormSearch: "",
    employeeList: [],
    tempData: [],

}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_DATA:
            console.log("state", state.employeeList);
            console.log("action.userData", action.userData);
            return {
                employeeList: [...state.employeeList, action.userData],
                tempData: [...state.employeeList, action.userData]

            }


        case DELETE_SELECT_EMPLOYEE:
            alert("Confirm You delete this data")
            return {
                ...state,
                employeeList: state.employeeList.filter((e, i) => i !== action.index),
                tempData: state.employeeList.filter((e, i) => i !== action.index)
            }

        case SERCH_USER_DATA:
            return {
                ...state,
                userInputFormSearch: action.data,
                employeeList: state.tempData.filter((element) => element.firstName.startsWith(state.userInputFormSearch) || element.salary.toString().startsWith(state.userInputFormSearch)),


            }

        default:
            return state;
    }
}

export default employeeReducer;