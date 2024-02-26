import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleLogin = async () => {
        try {
            const res = await axios.get('http://localhost:4000/users/loginuser', { params: credentials });
            console.log(res.data);

            const userRole = res.data.user.role;
            const id = res.data.user._id;

            // Redirect to different pages or render different views based on user role
            if (userRole === 'user') {
                navigate('/user');
            } else if (userRole === 'admin') {
                // Render admin-specific data table
                navigate('/admin');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const navigateToSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="LoginPage">
            <div className="LoginContainer">
                <div className="logo">
                    {/* Your logo here */}
                    {/* <img src="logo.png" alt="Logo" /> */}
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                </div>
                <button onClick={handleLogin}>Login</button>
                <p>Don't have an account? <span onClick={navigateToSignup}>Sign up</span></p>
            </div>
            <div className="footer">
                <p>Footer content</p>
            </div>
        </div>
    );
};

export default Login;
