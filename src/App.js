import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home.jsx';
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';
import PagenotFound from './PagenotFound';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
// import { Button } from '@material-ui/icons/Button'
// import '../node_modules/@material-ui/icons';
function App() {


  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="*" element={<PagenotFound />} />


        </Routes>
      </Router>
    </>
  )
}

export default App;
