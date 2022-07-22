import React from 'react'
import "./Navbar2.css";
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
    const [dropdown,setDropdown]=useState(false);
    const showDropDown = ()=>{
        setDropdown(true);
    }
    const hideDropDown = ()=>{
        setDropdown(false);
    }

  return (
    <React.Fragment>
        <div className="div1">
        <div className="div2"><h3>Hospital</h3></div>
        <div className="div3"><NavLink to="/">Home</NavLink>
        <NavLink  to="/aboutus">About Us</NavLink>
        <a href='#'  onMouseEnter={showDropDown}
                  onMouseLeave={hideDropDown} >Services {dropdown ?(<ul className="dropdown_list">
                    <NavLink to="services/bloodbank">
                      <li>Blood Bank</li>
                    </NavLink>
                    <NavLink to="/chemotherapy">
                      <li>Chemo Therapy</li>
                    </NavLink>
                    <NavLink to="/counseling">
                      <li>Counseling</li>
                    </NavLink>
                    <NavLink to="/diabetescenter">
                      <li>Diabetis Center</li>
                    </NavLink>
                    <NavLink to="/emergency">
                      <li>Emergency</li>
                    </NavLink>
                    <NavLink to="/pharmacy">
                      <li>Pharmacy</li>
                    </NavLink>
                    <NavLink to="/physiotherapy">
                      <li>Physiotherapy</li>
                    </NavLink>
                    <NavLink to="/prayerroom">
                      <li>Prayer Room</li>
                    </NavLink>
                    <NavLink to="/roomcategory">
                      <li>Room Catrgory</li>
                    </NavLink>
                    <NavLink to="/strokecenter">
                      <li>Stroke Center</li>
                    </NavLink>
                    <NavLink to="/vaccination">
                      <li>Vaccination</li>
                    </NavLink>
                  </ul>):null}</a>
        <NavLink to="/contact">Contact</NavLink></div>
        </div>
    </React.Fragment>
  );
}

export default Navbar2;
