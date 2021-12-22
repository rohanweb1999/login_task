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
            console.log("state", state.employeeList);
            console.log("action.userData", action.userData);
            action.userData = {
                ...action.userData,
                id: new Date().getTime().toString()
            }
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
        case SELECT_EDIT_LIST:
            console.log("select edit list", action.id);
            const selectedObj = state.tempData.find(
                (element) => element.id === action.id
            );
            console.log("selectObj", selectedObj);
            return {
                ...state,
                selectedEditId: action.id,
                formState: selectedObj,
            };

        case UPDATE_SELECTED_USERDATA:
            // const newUpdateData = state.employeeList.map((e) => e.id === state.selectedEditId ? { ...e, data: state.formState } : e)
            // console.log("newUpdateData", newUpdateData);
            return {
                ...state,
                // employeeList: newUpdateData,
                // formState: {
                //     ...state.formState
                // }

            }

        default:
            return state;
    }
}

export default employeeReducer;