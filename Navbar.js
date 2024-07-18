import React from "react";
import './Navbar.css';
import LOGO from './LOGO.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
        <div className="logo">
               <img src={LOGO} alt="Logo" className="logo" />
               </div>
       
        <ul>
            <li><Link to ="Homepage">Home Page</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to ="/Departments">Departments</Link></li>
            <li><Link to ="/Services">Services</Link></li>
            <li><Link to ="/Admin">Admin</Link></li>
            <li><Link to ="/DonateBlood">Donate Blood</Link></li>
            <li><Link to ="/Contactus">Contact Us</Link></li>
            <li className="buttons">
                <Link to="/Signin" className="button">Signin</Link>
            </li>
            <li className="buttons">
                <Link to="/Signup" className="button">Signup</Link>
            </li>
          
      
        

           
           

           
            
        </ul>
 
    </div>
    
  
 
    );
}

export default Navbar;
