import React from "react";
import { TextField } from "@material-ui/core";
import "./App.css";
import { NavLink } from "react-router-dom";
import sideImg from "../src/employee.jpg";
import { Form, Button } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { submitData } from "./actions";
import * as Yup from 'yup';

const Signup = () => {




    const formik = useFormik({
        initialValues: {
            id: new Date().getTime().toString(),
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            profession: "",
            salary: "",
            password: "",
            confirmPassword: "",
        },

        // onSubmit: (values) => {
        //   alert(JSON.stringify(values, null, 2));
        //   console.log("Data", JSON.stringify(values));
        // },

        onSubmit: (values) => dispatch(submitData(values),
            formik.handleReset()),
    });
    // console.log(formik.values.firstName);
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
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" className="signup-btn">
                                ADD
                            </Button>
                        </Form.Item>

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
    )
}

export default Signup