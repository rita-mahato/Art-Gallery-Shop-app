import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="success-container">
            <h1>Order Placed Successfully!</h1>
            <p>Thank you for your purchase. Your order has been confirmed.</p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
};

export default SuccessPage;
