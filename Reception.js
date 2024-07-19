import React from 'react';
import './Reception.css'; 
import Geeni from './Geeni.png'; 
import Jonny from './Jonny.png';
import Team from './Team.png';
import { Link } from 'react-router-dom';
function Reception() {
    return (
        <div className="reception">
            <h1>Reception Hall</h1>
            <section className="intro">
                <h2>Introduction</h2>
                <p>Welcome to our Reception Hall. Our friendly and professional staff are here to assist you with all your needs, ensuring a smooth and pleasant experience during your visit to our hospital.</p>
            </section>

            <section className="services">
                <h2>Reception Services</h2>
                <ul>
                    <li>Patient Registration</li>
                    <li>Appointment Scheduling</li>
                    <li>Information Desk</li>
                    <li>Billing and Payments</li>
                    <li>Guidance to Departments</li>
                 </ul>
            </section>

            <section className="staff">
                <h2>Meet Our Reception Staff</h2>
                <div className="staffs">
                    <img src={Geeni} alt="Geeni" />
                    <h3>Geeni</h3>
                    <p>Geeni is our head receptionist with over 19 years of experience in the healthcare industry. She is known for her welcoming demeanor and efficiency.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
                <div className="staffs">
                    <img src={Jonny} alt="Jonny" />
                    <h3>Jonny</h3>
                    <p>Jonny is our assistant receptionist. He is a dedicated receptionist who ensures every patient receives the attention and care they need. He has been with us for 15 years.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
                <div className="staffS">
                    <img src={Team} alt="Team" />
                    <h3>staff members team</h3>
                    <p>our assistant receptionists,they are  dedicated receptionists who ensures every patient receives the attention and care they need. He has been with us for 4 years.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
               
               
            </section>

            <section className="contact">
                <h2>Contact Information</h2>
                <p>For any inquiries or assistance, please Feel free to contact our reception hall at:</p>
                <p>Email: reception@healthhub.com</p>
                <p>Phone: (234) 567-7890</p>
               </section>
        </div>
    );
}

export default Reception;
