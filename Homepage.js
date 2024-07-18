import React from "react";
import './Homepage.css';
import page from './page.png';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Homepage(){
    const location = useLocation();
    const email = location.state?.email;
    return(
        
        
        <div className="home">
            <h2> 
                    <h2>Welcome to our Health Hub place,<br></br> here we provide you all kind of services<br></br> which related to your health fitness</h2>
                </h2>
                {email && <p>Logged in as: {email}</p>}
            <img src={page} className="page" alt="page"></img>
          
            

        </div>
    )
}
export default Homepage; 