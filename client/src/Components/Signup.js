import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Signup.css';

export default function Signup() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ username: '', email: '', password: '', role: 'user' });

    const handleSignup = async () => {
        try {
            const res = await axios.post('http://localhost:4000/users/createuser', userData);
            console.log(res.data);
            const userRole = res.data.user.role;
            const userId = res.data.user._id; // Extracting user ID from the response

            if (userRole === 'user') {
                navigate(`/user/${userId}`); // Passing user ID as a parameter
            } else if (userRole === 'admin') {
                navigate('/admin');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRoleChange = (e) => {
        setUserData({ ...userData, role: e.target.value });
    };

    function navigateToLogin(){
        navigate("/")
    }

    return (
        <div className="SignupPage">
            <div className="SignupContainer">
                <input type="text" placeholder="Username" onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                <input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                <input type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                <label htmlFor="role">Role</label>
                <select name="role" id="role" value={userData.role} onChange={handleRoleChange}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button onClick={handleSignup}>Signup</button>

                <p>Already have an account? <span onClick={navigateToLogin}>Login</span></p>
            </div>

            
           
           
        </div>
    );
}
