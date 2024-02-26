import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Usertable() {
  const { id } = useParams(); // Get the 'id' parameter from URL params
  console.log(id);


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/users/singleuser/${id}`);
                setUser(response.data.user); // Assuming the response contains a single user object
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]); // Include userid in the dependency array to fetch data when it changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>User Details</h2>
            {user && (
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}
