import React from 'react';
import './Checkup.css'; 
import Aditya from './Aditya.png'; 
import sultan from './sultan.png'; 
import simran from './simran.png';
import { Link } from 'react-router-dom';

function Checkup() {
    return (
        <div className="checkup">
            <h1>Checkup Department</h1>
            <section className="intro">
                <h2>Introduction About Our Checkup Department</h2>
                <p>Our Checkup department is dedicated to provide comprehensive health assessments to ensure well-being of our clients. We offer a variety of checkup packages tailored to meet our client's needs.</p>
            </section>

            <section className="services">
                <h2>Our Checkup Services</h2>
                <ul>
                    <li>General Health Checkup</li>
                    <li>Eyes Checkup</li>
                    <li>Diabetic Checkup</li>
                    <li>Women's Health Checkup</li>
                    <li>Body Checkup</li>
                </ul>
            </section>

            <section className="schedule">
                <h2>Checkup Schedule</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Checkup Type</th>
                            <th>Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>9:00 AM - 11:00 AM</td>
                            <td>General Health Issues</td>
                            <td>Dr. Aditya Mishra</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>12:00 PM - 4:30 PM</td>
                            <td>Bones</td>
                            <td>Dr. Sultan mohammad</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>11:00 AM - 9:00 PM</td>
                            <td>Diabetic Checkup</td>
                            <td>Dr. Simran khurana</td>
                        </tr>
                       
                        
                    </tbody>
                </table>
            </section>

            <section className="dr">
                <h2>Meet Our Doctors</h2>
                <div className="dr">
                    <img src={Aditya} alt="dr" />
                    <h3>Dr. Aditya mishra</h3>
                    <p>Dr. Aditya mishra is a renowned general health issues with over 15 years of experience. He specializes in preventive health care and diagnostics.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
                <div className="dr">
                    <img src={sultan} alt="dr" />
                    <h3>Dr. Sultan mohammad</h3>
                    <p>Dr. Sultan mohammad is a leading doctor known for her expertise in bones health. She has been practicing for over 20 years.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
                <div className="dr">
                    <img src={simran} alt="dr" />
                    <h3>Dr. Simran khurana</h3>
                    <p>Dr. Simran khurana is a leading cardiologist known for her expertise in Diabetic health. She has been practicing for over 20 years.</p>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                </div>
               
            </section>
            <section className="contact">
                <h2>Contact Information</h2>
                <p>For more information , please contact us at:</p>
                <p>Email: checkup@healthhub.com</p>
                <p>Phone: (432) 123-4567</p>
            </section>
        </div>
    );
}

export default Checkup;
