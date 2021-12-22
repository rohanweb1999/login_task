import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSelectEmployee, searchInputData } from "./actions";
import { NavLink } from "react-router-dom";


const Dashboard = () => {
    const userInputFormSearch = useSelector(
        (state) => state.employeeReducer.userInputFormSearch
    );

    const employeeList = useSelector(
        (state) => state.employeeReducer.employeeList
    );
    console.log("EmployeeList", employeeList);

    const dispatch = useDispatch();
    return (
        <div className="das-main-div">
            <div className="das-sub-div">
                <input
                    type="search"
                    className="serchField"
                    placeholder="Serch Employee details based on name or salary......"
                    value={userInputFormSearch}
                    onChange={(e) =>
                        dispatch(
                            searchInputData(e.target.value),
                            console.log("searchInputData", e.target.value)
                        )
                    }
                ></input>
            </div>
            <div>
                {employeeList ? (
                    <div className="list-div">
                        {employeeList.map((element, index) => {
                            // return <p key={element.id}>{JSON.stringify(element)}</p>;
                            return (
                                <div className="employeeData" key={element.id}>
                                    <div className="employeeFeild">
                                        <label>FirstName:-</label>
                                        <p>{element.firstName}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>LastName:-</label>
                                        <p>{element.lastName}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>Email:-</label>
                                        <p>{element.email}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>Contact:-</label>
                                        <p>{element.contact}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>Profession:-</label>
                                        <p>{element.profession}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>Salary:-</label>
                                        <p>{element.salary}</p>
                                    </div>
                                    <div className="functionalButtons">
                                        <NavLink to={`/signup?id=${element.id}`}>
                                            <button
                                                className="editButton"
                                            // onClick={() => dispatch(selectEditList(element.id))}
                                            >
                                                EDIT
                                            </button>
                                        </NavLink>
                                        <button
                                            className="deleteButton"
                                            onClick={() => dispatch(deleteSelectEmployee(index))}
                                        >
                                            DELETE
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="dataNotFound">
                        <p>No Data Found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;