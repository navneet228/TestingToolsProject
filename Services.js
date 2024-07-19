import React from "react";
import './Services.css';

function Services() {
    return (
        <div className="services">
            <h1>Our Services</h1>
            <p>We run a general family practice, and have a clinical focus in Female and kids Wellness, Digestive health, Environmental health, Skin health and Allergies.</p>
            <br></br>
            <br></br>
            <div className="concern">
            <h2>COMMON CONCERNS</h2>
            <p>If you’re wondering how our team might assist you, the following are examples of what we have consulted and treated masses for in the past.</p>
            <ol>
                <li>Gastrointestinal diseases (IBS, IBD (Colitis/Crohns), Reflux, Leaky Gut, Bloating, Constipation)</li>
                <li>Hormone imbalance</li>
                <li>Sleep issues/insomnia</li>
                <li>Female disorders</li>
                <li>Anxiety and depression</li>
                <li>Healthy weight</li>
                <li>kids health checkups</li>
                <li>full body checkup</li>   
                <li>yoga,health fitness classes</li>
            </ol>
            </div>
            <br></br>
            <br></br>
            <div className="contact">
                <h2>Available Services</h2>
                <ul>
                    <li>General Checkup</li>
                    <li>Eye Checkup</li>
                    <li>Heart Checkup</li>
                    <li>Diabetes Checkup</li>
                   <li>Medicines</li>
                    <li>Email contact</li>
                    <li>Individualized treatment, including nutritional, lifestyle, exercise, stress management plans and support</li>
                </ul>
        </div>
        </div>
        
    );
}
export default Services;