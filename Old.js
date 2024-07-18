import React from 'react';
import './Old.css'; 
import teamold from './teamold.png'; 
import old1 from './old1.png';
import old2 from './old2.png';
import { Link } from 'react-router-dom';

function Old() {
    return (
        <div className="old">
            <h1>Old Age Department</h1>
            <section className="intro">
                <h2>Introduction</h2>
                <p>Welcome to our Old Age Department. We provide high-quality care and specialized services tailored to the needs of our elderly patients to ensure their comfort, health, and well-being.</p>
            </section>

            <section className="services">
                <h2>Services Offered</h2>
                <ul>
                    <li>Healthy Medicine</li>
                    <li>Physical Therapy</li>
                    <li>Nutrition and Diet Counseling</li>
                    <li>Memory Care</li>
                    <li>End-of-Life Care</li>
                </ul>
            </section>

            <section className="staff">
                <h2>Meet Our Staff</h2>
                <div className="staff">
                    <img src={teamold} alt="teamold" />
                    <h3>Our Staff members</h3>
                    <p>They are specialist in geriatric medicine with over 30 years of experience. They are dedicated for improving the quality of life for our elderly patients.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
                <div className="staff">
                    <img src={old1} alt="old1" />
                    <h3> Dr. Manpreet Kaur</h3>
                    <p>Dr. Manpreet Kaur has been providing compassionate care to elderly patients for over 12 years. Her expertise and kindness make her a valued member of our team.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
                <div className="staff">
                    <img src={old2} alt="old2" />
                    <h3>Sonia Aulakh</h3>
                    <p>Sonia Aulakh has been providing compassionate care to elderly patients for over 15 years. Her expertise and kindness make her a valued member of our team.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
              
            </section>
             <section className="contact">
                <h2>Contact Information</h2>
                <p>For any inquiries or to schedule a consultation, please contact our Old Age Department at:</p>
                <p>Email: oldagecare@healthhub.com</p>
                <p>Phone: (6153) 456-7890</p>
             </section>
        </div>
    );
}

export default Old;
