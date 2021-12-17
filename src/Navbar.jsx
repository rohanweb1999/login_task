import React from 'react'
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';




const Navbar = () => {


    return (
        <div className="navbar">
            <div className="items">
                <NavLink to="/" id="Logo"><h1>WELCOME</h1></NavLink>
                <div className="itemsNav2">
                    <NavLink to="/Signup" id="btn2" ><h3>Registration</h3></NavLink>
                    <NavLink to="/Signin" id="btn1" ><h3>Sign In</h3></NavLink>
                </div>
            </div>
        </div>




    )
}

export default Navbar;
