import React from 'react'
import Errorpage from '../src/errorpage.jpg';
import './App.css';



const PagenotFound = () => {
    return (
        <div className="errorPage">
            <img src={Errorpage} alt="page not found"></img>
        </div>
    )
}

export default PagenotFound;
