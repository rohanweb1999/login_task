import React from 'react'
import { TextField } from '@material-ui/core';
import './App.css';
import { NavLink } from 'react-router-dom';
import sideImg from '../src/employee.jpg'
import { Form, Button } from 'antd';
import { useFormik } from 'formik';



const Signup = () => {
    const formik = useFormik({
        initialValues: {
            id: new Date().getTime().toString(),
            firstName: '',
            lastName: '',
            email: '',
            Contact: '',
            profession: '',
            sallery: '',
            Password: '',
            cpassword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log("Data", JSON.stringify(values));
        }
    });
    return (
        <>
            <div className="main-div">
                <form className="signupUser" onSubmit={formik.handleSubmit}>
                    <h2>Sign Up</h2>
                    <h3>Please fill in this form to create an account</h3>
                    <TextField
                        label="First Name"
                        variant="standard"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        required
                    />
                    <TextField
                        label="Last Name"
                        variant="standard"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                    />
                    <TextField
                        label="Contact"
                        variant="standard"
                        name="Contact"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.Contact}
                        required
                    />
                    <TextField
                        label="profession"
                        variant="standard"
                        name="profession"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.profession}
                        required
                    />
                    <TextField
                        label="sallery"
                        variant="standard"
                        name="sallery"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.sallery}
                        required
                    />
                    <TextField
                        label="Password"
                        variant="standard"
                        name="Password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.Password}
                        required
                    />
                    <TextField
                        label="Conform Password"
                        variant="standard"
                        name="cpassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.cpassword}
                        required
                    />

                    <div className="Bottom-class">
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" className='signup-btn'>
                                Sign Up
                            </Button>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="danger" onClick={formik.handleReset}>
                                RESET
                            </Button>
                        </Form.Item>
                    </div>
                    <NavLink to="/Signin" >I have already Registered</NavLink>
                </form>

                <div className="Side-image">
                    <img className="img" src={sideImg} alt="side view" />
                </div>

            </div>
        </>
    )
}

export default Signup
