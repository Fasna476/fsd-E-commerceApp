import React, { useEffect, useState } from 'react';
import './ProductManagement.css';  // Import the CSS file for styling

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        image: '',
    });
    const [editProduct, setEditProduct] = useState(null); // State to hold product being edited


    // Fetch all products when component mounts
    useEffect(() => {
        fetch('http://localhost:3010/getAllProducts')
            .then(response => response.json())
            .then(data => {
                if (data.status === "ok") {
                    setProducts(data.data);
                    setLoading(false);
                } else {
                    setError("Failed to fetch products");
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setError("Error fetching products");
                setLoading(false);
            });
    }, []);

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editProduct) {
            setEditProduct({ ...editProduct, [name]: value });
        } else {
        setNewProduct({ ...newProduct, [name]: value });
        }
    };

    // Handle creating a new product
    const handleAddProduct = (e) => {
        e.preventDefault();
        fetch('http://localhost:3010/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct),
        })
        .then(response => response.json())
        .then(data => {
            if (data._id) {
                setProducts([...products, data]);
                setNewProduct({
                    title: '',
                    price: '',
                    category: '',
                    description: '',
                    image: '',
                });
            } else {
                alert("Error adding product");
            }
        })
        .catch((err) => {
            console.error("Error adding product:", err);
            alert("Error adding product");
        });
    };
    // Open the edit form with the selected product's details// Open the edit form with the selected product's details
    const handleEditProduct = (product) => {
        setEditProduct(product);
    };

    // Handle updating a product
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3010/updateProduct/${editProduct._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editProduct),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "ok") {
                setProducts(products.map(product => 
                    product._id === editProduct._id ? data.data : product
                ));
                setEditProduct(null);
            } else {
                alert("Error updating product");
            }
        })
        .catch((err) => {
            console.error("Error updating product:", err);
            alert("Error updating product");
        });
    };

    // Handle deleting a product
    const handleDeleteProduct = (productId) => {
        fetch(`http://localhost:3010/deleteProduct/${productId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "ok") {
                setProducts(products.filter(product => product._id !== productId));
            } else {
                alert("Error deleting product");
            }
        })
        .catch((err) => {
            console.error("Error deleting product:", err);
            alert("Error deleting product");
        });
    };

    if (loading) return <p className="loading">Loading products...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="product-management">
            <h2>Product Details</h2>

            {/* Add New Product Form */}
            <form onSubmit={handleAddProduct} className="product-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" className="add-button">Add Product</button>
            </form>

                    {/* Edit Product Form */}
                    {editProduct && (
                <form onSubmit={handleUpdateProduct} className="product-form">
                    <h3>Edit Product</h3>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={editProduct.title}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={editProduct.price}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={editProduct.category}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={editProduct.description}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={editProduct.image}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="update-button">Update Product</button>
                    <button onClick={() => setEditProduct(null)} className="cancel-button">Cancel</button>
                </form>
            )}

            {/* Products Table */}
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>₹{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            <td><img src={product.image} alt={product.title} className="product-image" /></td>
                            <td>
                                <button 
                                    onClick={() => handleDeleteProduct(product._id)} 
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                                <button 
                                    onClick={() => handleEditProduct(product, { title: 'Updated', price: 150 })} 
                                    className="update-button"
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagement;
