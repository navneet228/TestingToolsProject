import React from 'react';
import john from './john.png'; 
import smith from './smith.png'; 
import doctor from './doctor.png'; 
import './Yoga.css';
import { Link } from 'react-router-dom';



function Yoga() {
    return (
        <div className="yoga">
            <h1>Yoga Department</h1>
            <section className="intro">
                <h2>Introduction</h2>
                <p>Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. It is an art and scince of healthy living.</p>
            </section>

            <section className="class">
                <h2>Here is Our Class Schedule</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Class</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>8:00 AM - 10:00 AM</td>
                            <td>Health Fitness Yoga</td>
                            <td>Mr. Suran Thkkar Doe</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>5:00 PM - 7:00 PM</td>
                            <td>Vinyasa Yoga</td>
                            <td>Mr. John Smith</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>8:00 AM - 9:00 PM</td>
                            <td>Ashtanga Yoga</td>
                            <td>Mr. Sauviya Smith</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>6:00 PM - 2:00 PM</td>
                            <td>Restorative Yoga</td>
                            <td>Mr. Jane Smith</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="instructors">
                <h2>Our Instructors</h2>
                <div className="instructor">
                    <img src={john} className="department-image" alt="john" />
                    <h3>Mr. Suran Thkkar Doe</h3>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                    
                    <p>Mr. Suran Thkkar Doe is a certified Yoga instructor with over 10 years of experience. He specializes in Hatha Yoga and mindfulness meditation.</p>
                </div>
                <div className="instructor">
                    <img src={smith} alt="Instructor 2" />
                    <h3>John Smith</h3>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                    <p>Miss John is an experienced Yoga Doctor known for her dynamic Vinyasa classes. She integrates strength and flexibility training into her sessions.</p>
                </div>
                <div className="instructor">
                    <img src={doctor} alt="Instructor 2" />
                    <h3>Mr. Sauviya Smith</h3>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                    <p>Mr. Sauviya Smith is an experienced Yoga instructor known for his dynamic Vinyasa classes. He integrates strength and flexibility training into his sessions.</p>
                </div>
                <div className="instructor">
                    <img src={john} alt="Instructor 2" />
                    <h3>Mr. Jane Smith</h3>
                    <li className="buttons">
                    <Link to="/Appointment" className="button">Book an appointment</Link>
                </li>
                    <p>Mr. Jane Smith is an experienced Yoga teacher known for his dynamic Vinyasa classes. He integrates strength and flexibility training into his sessions.</p>
                </div>
            </section>

            <section className="programs">
                <h2>Our Programs and Services</h2>
                <ul>
                    <li>Beginner Yoga Classes</li>
                    <li>Advanced Yoga Workshops</li>
                    <li>Private Yoga Sessions</li>
                </ul>
            </section>
           <section className="member">
                <h2>Membership Details</h2>
                <p>Please Join our Yoga community today! We offer flexible and more beneficial membership plans to suit your needs. Contact us for more details.</p>
            </section>

            <section className="contact">
                <h2>Contact Information</h2>
                <p>For more information, please contact us at:</p>
                <p>Email: yogaclasses@healthhub.com</p>
                <p>Phone: 654-123-4567</p>
            </section>

            <section className="faq">
                <h2>Frequently Asked Questions??</h2>
                <div className="faq">
                    <h3>What should I bring to a Yoga classand what kind of clothes I can wear in this class?</h3>
                    <p>Bring a Yoga mat, water bottle, and a towel. Wear comfortable clothing that allows for easy movement.</p>
                </div>
                <div className="faq">
                    <h3>Do I need to have prior experience to join a Yoga class?</h3>
                    <p>No, our classes are suitable for all levels, including beginners so don't hesitate to join.</p>
                </div>
               
            </section>
        </div>
    );
}

export default Yoga;
