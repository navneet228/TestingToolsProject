import React from 'react';
import './Medicine.css';
import sahib from './sahib.png'; 
import { Link } from 'react-router-dom';

function Medicine() {
    return (
        <div className="medicines">
            <h1>Welcome to Our Medicine Department</h1>
            <section className="intro">
                <h2>Introduction</h2>
                <p>Our Medicines Department is committed to providie a comprehensive range of pharmaceutical products and services to support your health and well-being throughout your journey.</p>
            </section>

            <section className="available">
                <h2>Available Medicines in Our Department</h2>
                <ul>
                    <li>Over-the-Counter (OTC) Medicines</li>
                    <li>Prescription Medicines</li>
                    <li>Vitamins and Minerals</li>
                    <li>First Aid Supplies</li>
                    <li>Health and Wellness Products</li>
                </ul>
                </section>

<section className="pharmacy">
    <h2>Meet Our Pharmacist</h2>
    <div className="pharmacy">
        <img src={sahib} alt="sahib" />
        <h3>Dr. Sahib singh</h3>
        <p>Dr. Sahib Singh is our lead pharmacist with over 15 years of experience in the pharmaceutical industry. He is dedicated to ensuring you receive the best care and advice.</p>
        <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
    </div>
  </section>

<section className="contact">
    <h2>Contact Information</h2>
    <p>For any inquiries or assistance, please contact our Medicines Department, we are open 24/7 offline as well as online:</p>
    <p>Email: pharmacy@healthhub.com</p>
    <p>Phone: (514) 456-7890</p>
   </section>
</div>
);
}

export default Medicine;
