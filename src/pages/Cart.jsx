import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    // Fetching cart items from localStorage (or state management)
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
        calculateTotal(storedCart);
    }, []);

    // Calculate the total price of items in the cart
    const calculateTotal = (items) => {
        const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(totalPrice);
    };

    // Handle changing quantity of a product
    const updateQuantity = (id, quantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotal(updatedCart);
    };

    // Handle removing a product from the cart
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotal(updatedCart);
    };

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                                <p>₹{item.price}</p>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                                />
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <h3>Total: ₹{total}</h3>
                        <Link to="/checkout">
                            <button>Proceed to Checkout</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
