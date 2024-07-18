import React from 'react';
import { Link } from 'react-router-dom';
import receptionhall from './receptionhall.png';
import roomshs from './roomshs.png';
import yoga from './yoga.png';
import medicines from './medicines.png';
import operation from './operation.png';
import old from './old.png';
import kidd from './kidd.png';
import './Departments.css'; 

function Departments() {
    return (
        
        <div className="departments">
            <h1>Welcome to Our Departments</h1>
            <h2>Here you can explore the various departments at our health hub.</h2>
            
            <ul>
                <div className="department">
                   <img src={yoga} className="department-image" alt="yoga" />
                    <p><b>Yoga</b>  </p>
                    <Link to="/Yoga"> More details</Link>
                </div>
                <div className="department">
                    <img src={roomshs} className="department-image" alt="checkup" />
                    <p><b>Checkup</b></p>
                    <Link to="/Checkup"> More details</Link>
                </div>
                <div className="department">
                    <img src={receptionhall} className="department-image" alt="reception" />
                    <p><b>Reception Hall</b></p>
                    <Link to="/Reception"> More details</Link>
                </div>
                <div className="department">
                    <img src={medicines} className="department-image" alt="medicines" />
                    <p><b>Medicines</b></p>
                    <Link to="/Medicine"> More details</Link>
                </div>
                <div className="department">
                    <img src={operation} className="department-image" alt="operation theater" />
                    <p><b>Operation Theater</b></p>
                    <Link to="/Operation"> More details</Link>
                </div>
                <div className="department">
                    <img src={old} className="department-image" alt="old age department" />
                    <p><b>Old Age Department</b></p>
                    <Link to="/Old"> More details</Link>
                </div>
                <div className="department">
                    <img src={kidd} className="department-image" alt="kids wellness" />
                    <p> <b>Kids Wellness</b></p>
                    <Link to="/kids"> More details</Link>
                </div>
             
            </ul>
        </div>
    );
}

export default Departments;
