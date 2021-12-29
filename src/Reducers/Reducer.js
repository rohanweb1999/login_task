import { DELETE_SELECT_EMPLOYEE, SERCH_USER_DATA, SUBMIT_DATA, SELECT_EDIT_LIST, UPDATE_SELECTED_USERDATA } from "../actions/Types"

const initialState = {
    formState: {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        profession: "",
        salary: "",
        password: "",
        confirmPassword: "",
    },
    userInputFormSearch: "",
    employeeList: [],
    tempData: [],

}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_DATA:
            action.userData = {
                ...action.userData,
            }
            return {
                employeeList: [...state.employeeList, action.userData],
                tempData: [...state.employeeList, action.userData]

            }


        case DELETE_SELECT_EMPLOYEE:
            console.log("id", action.id);
            alert("Confirm You delete this data")
            return {
                ...state,
                employeeList: state.employeeList.filter((e) => e.id !== action.id),
                tempData: state.employeeList.filter((e) => e.id !== action.id)
            }
        case SERCH_USER_DATA:
            return {
                ...state,
                userInputFormSearch: action.data,
                employeeList: state.tempData.filter((element) => element.firstName.startsWith(state.userInputFormSearch) || element.salary.toString().startsWith(state.userInputFormSearch)),
            }
        case SELECT_EDIT_LIST:
            const selectedObj = state.tempData.find(
                (element) => element.id === action.id
            );
            return {
                ...state,
                selectedEditId: action.id,
                formState: selectedObj,
            };

        case UPDATE_SELECTED_USERDATA:
            // const newUpdateData = state.employeeList.map((e) => e.id === state.selectedEditId ? { ...e, data: state.formState } : e)
            const empInd = state.employeeList.findIndex(res => res.id === action.id)
            const tempInd = state.tempData.findIndex(res => res.id === action.id)
            state.employeeList[empInd] = action.data
            state.tempData[empInd] = action.data
            return {
                ...state
            }

        default:
            return state;
    }
}

export default employeeReducer;