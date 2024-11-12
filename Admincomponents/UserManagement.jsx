// export default UserManagement;
import React, { useEffect, useState } from 'react';
import './UserManagement.css';  // Import the CSS file for styling

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all users when component mounts
    useEffect(() => {
        fetch('http://localhost:3010/getalluser')
            .then(response => response.json())
            .then(data => {
                if (data.status === "ok") {
                    setUsers(data.data);
                    setLoading(false);
                } else {
                    setError("Failed to fetch users");
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
                setError("Error fetching users");
                setLoading(false);
            });
    }, []);

    // Delete a user by ID
    const handleDeleteUser = (userId) => {
        fetch(`http://localhost:3010/deleteuser/${userId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "ok") {
                setUsers(users.filter(user => user._id !== userId));
            } else {
                alert("Failed to delete user");
            }
        })
        .catch((err) => {
            console.error("Error deleting user:", err);
            alert("Error deleting user");
        });
    };

    if (loading) return <p className="loading">Loading users...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="user-management">
            <h2>User Details</h2>
            {users.length > 0 ? (
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>
                                    <button 
                                        className="delete-button"
                                        onClick={() => handleDeleteUser(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-users">No users found.</p>
            )}
        </div>
    );
};

export default UserManagement;
