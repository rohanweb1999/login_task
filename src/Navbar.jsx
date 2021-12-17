import React from 'react'
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';




const Navbar = () => {


    return (
        <div className="navbar">
            <div className="items">
                <NavLink to="/" id="Logo"><h1>WELCOME</h1></NavLink>
                <div className="itemsNav2">
                    <NavLink to="/Signup" id="btn2" ><button className='reg-btn'>Registration</button></NavLink>
                    <NavLink to="/Signin" id="btn1" ><button className='signin-btn'>Sign In</button></NavLink>
                </div>
            </div>
        </div>




    )
}

export default Navbar;
