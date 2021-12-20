import { DELETE_SELECT_EMPLOYEE, FIND_IN_LIST, SERCH_USER_DATA, SUBMIT_DATA } from "../actions/Types"

const initialState = {
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

            return {
                ...state,
                employeeList: state.employeeList.filter((e, i) => i !== action.index),
                tempData: state.employeeList.filter((e, i) => i !== action.index)


            }

        case SERCH_USER_DATA:
            return {
                ...state,
                userInputFormSearch: action.data

            }
        case FIND_IN_LIST:
            let findByName = state.tempData.find((element) => element.firstName === state.userInputFormSearch)
            let findBySalary = state.tempData.find((element) => element.salary === state.userInputFormSearch)
            console.log("findByName", findByName);
            console.log("findBySalary", findBySalary);

            return {
                ...state,


            }
        default:
            return state;
    }
}

export default employeeReducer;