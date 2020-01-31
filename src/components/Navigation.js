import React from 'react';
 
//import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
                <a className="navbar-brand" href="/">TORNADO</a>
                <a className="navbar-brand" href="/">Home</a>
                <a className="navbar-brand" href="/about">About</a>
                <a className="navbar-brand" href="/contact">Contact</a>
                
                <li className="navbar-brand dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">
                    Forms
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/NewPersonForm">New Person</a>
                    </div>
                </li>
            </nav>    
       </div>
    );
}
 
export default Navigation;

{/* <NavLink to="/">Home</NavLink>{'      '}
    <NavLink to="/about">About</NavLink>{'      '}
    <NavLink to="/contact">Contact</NavLink>{'      '}
    <NavLink to="/NewPersonForm">New Person Form</NavLink>{'      '} */}