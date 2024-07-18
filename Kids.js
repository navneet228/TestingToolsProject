import React from 'react';
import './Kids.css'; 
import kidscare from './kidscare.png'; 
import { Link } from 'react-router-dom';

function Kids() {
    return (
        <div className="kids">
            <h1>Kids Wellness Department</h1>
            <section className="intro">
                <h2>Introduction</h2>
                <p>Welcome to our Kids Wellness Department, where we focus on the health and well-being of children. Our mission is to provide comprehensive care and support for kids of all ages.</p>
            </section>

            <section className="services">
                <h2>vailable Services Offered</h2>
                <ul>
                    <li>Monthly Check-ups</li>
                    <li>Vaccinations</li>
                    <li>Developmental Assessments</li>
                    <li>Mental Health Support</li>
                    <li>Fitness Programs</li>
                </ul>
            </section>

            <section className="team">
                <h2>Meet Our Wellness Team</h2>
                <div className="teams">
                    <img src={kidscare} alt="Kidscare" />
                    <h3>wellness of kids care team</h3>
                    <p>They are dedicated to providing comprehensive care with over 10 years of experience in child health. They are committed to providing compassionate and comprehensive care for children.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
               
            </section>
           <section className="contact">
                <h2>Contact Information</h2>
                <p>For more information or to schedule an appointment, please contact our Kids Wellness Department at:</p>
                <p>Email: kidswellness@healthhub.com</p>
                <p>Phone: (123) 999-6590</p>
              </section>
        </div>
    );
}

export default Kids;
