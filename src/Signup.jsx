import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import "./App.css";
import { NavLink, useHistory } from "react-router-dom";
import sideImg from "../src/employee.jpg";
import { Form, Button } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { submitData, updateSelectedUserdata, selectEditList } from "./actions";
import queryString from 'query-string';
const Signup = () => {


    const { id } = queryString.parse(window.location.search)

    // const [toggleButton, settoggleButton] = useState(true);
    const selectedEditId = useSelector(
        (state) => state.employeeReducer.selectedEditId
    );

    const formState = useSelector((state) => state.employeeReducer.formState);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            profession: "",
            salary: "",
            password: "",
            confirmPassword: "",
        },

        onSubmit: (values) => {
            if (id) {
                dispatch(updateSelectedUserdata(id, values))
            } else {
                dispatch(submitData(values))
                formik.handleReset()
            }
        }

    });

    useEffect(() => {
        if (id) {
            dispatch(selectEditList(id))
        }
    }, [])

    useEffect(() => {
        if (id && formState) {
            formik.setValues(formState)
        }
    }, [formState])

    const dispatch = useDispatch();

    return (
        <>
            <div className="main-div">
                <form className="signupUser" onSubmit={formik.handleSubmit}>
                    <h2>
                        <strong>EMPLOYEE REGISTRATION</strong>
                    </h2>
                    <h3>Please fill in this form to create an account</h3>
                    <TextField
                        label="First Name"
                        variant="standard"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <TextField
                        label="Last Name"
                        variant="standard"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <TextField
                        label="Contact"
                        variant="standard"
                        name="contact"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                    />
                    <TextField
                        label="profession"
                        variant="standard"
                        name="profession"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.profession}
                    />
                    <TextField
                        label="salary"
                        variant="standard"
                        name="salary"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                    />
                    <TextField
                        label="Password"
                        variant="standard"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <TextField
                        label="Confirm Password"
                        variant="standard"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />

                    <div className="Bottom-class">
                        {!selectedEditId ? (

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="signup-btn"
                                // onClick={settoggleButton(true)}
                                >
                                    ADD
                                </Button>
                            </Form.Item>
                        ) : (
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="signup-btn"
                                // onClick={settoggleButton(false)}
                                // onClick={() => dispatch(updateSelectedUserdata())}
                                >
                                    UPDATE
                                </Button>
                            </Form.Item>
                        )}

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="danger" onClick={formik.handleReset}>
                                RESET
                            </Button>
                        </Form.Item>
                    </div>
                    <NavLink to="/Signin">I have already Registered</NavLink>
                </form>

                <div className="Side-image">
                    <img className="img" src={sideImg} alt="side view" />
                </div>
            </div>
        </>
    );
};

export default Signup;