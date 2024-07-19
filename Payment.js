import React, { useState } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
function Payment() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Feedback');
        alert('Payment submitted');
    };

    return (
        <div className="payment">
            <h1>Payment</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Please provide Name on Card:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Please provide Card Number:</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Expiry Date:</label>
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>CVV:</label>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                    />
                </div>
               
                <div class="forms">
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Payment;
