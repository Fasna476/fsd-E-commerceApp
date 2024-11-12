// import React, { useEffect, useState } from 'react';
// import './Product.css'; // Import the CSS file for styling

// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
// console.log('product ok')
//     useEffect(() => {
//         fetch('http://localhost:3010/getAllProducts')
//             .then(response => response.json())
//             .then(data => {
//                 if (data.status === 'ok') {
//                     setProducts(data.data);
//                     setLoading(false);
//                 } else {
//                     setError('Failed to fetch products');
//                     setLoading(false);
//                 }
//             })
//             .catch(err => {
//                 console.error('Error fetching products:', err);
//                 setError('Error fetching products');
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p className="loading">Loading products...</p>;
//     if (error) return <p className="error">{error}</p>;

//     return (
//         <div className="products-container">
//             <h2 className="products-title">All Products</h2>
//             <div className="products-grid">
//                 {products.map(product => (
//                     <div className="product-card" key={product._id}>
//                         <img
//                             className="product-image"
//                             src={product.image}
//                             alt={product.title}
//                         />
//                         <div className="product-info">
//                             <h3 className="product-name">{product.title}</h3>
//                             <p className="product-price">${product.price}</p>
//                             <p className="product-category">{product.category}</p>
//                             <p className="product-description">
//                                 {product.description.length > 100
//                                     ? product.description.substring(0, 100) + '...'
//                                     : product.description}
//                             </p>
//                             <button className="view-button">View Details</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Product;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"

const Product = () => {
    const [products, setProducts] = useState([]);
    
    // Fetch all products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3010/getAllProducts');
                const data = await response.json();
                if (data.status === 'ok') {
                    setProducts(data.data);
                } else {
                    console.error('Error fetching products');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchProducts();
    }, []);

    // Add product to cart (localStorage)
    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product._id);
        
        if (existingProduct) {
            existingProduct.quantity += 1; // If the product already exists, increase quantity
        } else {
            cart.push({ ...product, quantity: 1 }); // Add new product to cart
        }

        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart in localStorage
    };

    

    return (
        <div className="product-page">
            <h2>All Products</h2>
            <div className="product-list">
                {products.length === 0 ? (
                    <p>Loading products...</p>
                ) : (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                            
                            <h3>{product.title}</h3>
                            <img src={product.image} alt={product.title} />
                            <p>{product.description}</p>
                            <p>₹{product.price}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Product;
