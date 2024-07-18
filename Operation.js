import React from 'react';
import './Operation.css'; 
import ope from './ope.png'; 
import { Link } from 'react-router-dom';
function Operation() {
    return (

        <div className="operation">
            <h1>Operation Theatre</h1>
            <section className="intro">
                <h2>Introduction</h2>
                <p>Our Operation Theatre provides comprehensive care for patients with complex surgeries.  Operation Theatre is equipped with the latest technology and staffed by experienced surgeons and medical professionals dedicated to providing the highest quality surgical care.</p>
            </section>

            <section className="services">
                <h2>Surgical Services</h2>
                <ul>
                    <li>General Surgery</li>
                    <li>Cardiothoracic Surgery</li>
                    <li>Pregnancy Care</li>
                    <li>Plastic Surgery</li>
                    <li>Bones Surgery</li>
                </ul>
            </section>

            <section className="team">
                <h2>Meet Our Surgical Team</h2>
                <div className="surgry">
                    <img src={ope} alt="ope" />
                    <h3>Staff members of operation theatre</h3>
                    <p>Dr. Alisha is our chief surgeon with over 20 years of experience in general and minimally invasive surgery. She is known for her precision and compassionate care.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
                </section>

           <section className="contact">
                <h2>Contact Information</h2>
                <p>For any inquiries or to schedule a consultation, please contact our Operation Theatre department at:</p>
                <p>Email: surgery@healthhub.com</p>
                <p>Phone: (234) 456-7890</p>
               </section>
        </div>
    );
}

export default Operation;
