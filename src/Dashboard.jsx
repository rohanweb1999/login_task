import { Empty } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSelectEmployee, findInList, searchInputData } from "./actions";

const Dashboard = () => {


    const userInputFormSearch = useSelector(state => state.employeeReducer.userInputFormSearch)

    const employeeList = useSelector(
        (state) => state.employeeReducer.employeeList
    );
    console.log("Dashboard", employeeList);

    const dispatch = useDispatch();

    return (
        <div className="das-main-div">
            <div className="das-sub-div">
                <input type="search" value={userInputFormSearch} onChange={(e) => dispatch(searchInputData(e.target.value), console.log("searchInputData", e.target.value))}></input>
                <span>
                    <button type="button" onClick={dispatch(findInList())}>Search</button>
                </span>
            </div>
            <div>
                <h2>
                    <strong>EMPLOYEE LIST</strong>
                </h2>
                {employeeList ?
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
                                        <label>Salery:-</label>
                                        <p>{element.salery}</p>
                                    </div>
                                    <div className="functionalButtons">
                                        <button className="editButton">EDIT</button>
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
                    :
                    <div className="dataNotFound">
                        <p>No Data Found</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Dashboard;