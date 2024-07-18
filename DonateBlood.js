import React, { useState } from 'react';
import './DonateBlood.css'; 

function DonateBlood() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [donationSuccess, setDonationSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        setDonationSuccess(true);
       
    };

    return (
        <div className="Container"> 
            <h1>Donate Blood</h1>
            {donationSuccess ? (
                <div className="success">
                    
                    <p>Thank your donation!</p>
                    <p>We appreciate your generosity.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    
                    
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    
                   
                        <label htmlFor="bloodType">Blood Type:</label>
                        <select
                            id="bloodType"
                            value={bloodType}
                            onChange={(e) => setBloodType(e.target.value)}
                            required
                        >
                            <option value="" className='select'>Select Blood Type</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                  
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                 
                   
                        <label htmlFor="message">Message (Optional):</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                  
                    <button type="submit">Donate</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default DonateBlood;
