import React, { useState } from 'react';
import './Checkout.css'
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const navigate = useNavigate()
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        address: '',
        city: '',
        zip: '',
    });
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiration: '',
        cvv: '',
    });

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform checkout logic like saving order to database
        // For now, just log the details
        console.log('Shipping:', shippingDetails);
        console.log('Payment:', paymentDetails);
        navigate('/success')
    };

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <h3>Shipping Information</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={shippingDetails.name}
                    onChange={handleShippingChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={shippingDetails.address}
                    onChange={handleShippingChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={shippingDetails.city}
                    onChange={handleShippingChange}
                    required
                />
                <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    value={shippingDetails.zip}
                    onChange={handleShippingChange}
                    required
                />

                <h3>Payment Information</h3>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentChange}
                    required
                />
                <input
                    type="text"
                    name="expiration"
                    placeholder="Expiration Date"
                    value={paymentDetails.expiration}
                    onChange={handlePaymentChange}
                    required
                />
                <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentChange}
                    required
                />
                <button type="submit" onClick={handleSubmit}>Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
