import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/Admintab.css";

const EditableTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users/getusers');
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); 

  const handleInputChange = (e, username) => {
    const { name, value } = e.target;

    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.username === username ? { ...user, [name]: value } : user
      )
    );
  };

  const updateUser = async (userId, updatedUserData) => {
    try {
      const response = await axios.put(`http://localhost:4000/users/updateUser/${userId}`, updatedUserData);
      console.log('Updated user:', response.data.user);
      alert("updated sucessuflly");
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleUpdateUser = (username) => {
    const updatedUser = users.find(user => user.username === username);
    // Assuming updatedUser contains all fields to update
    updateUser(updatedUser._id, updatedUser);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1 className="title">Employee Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Role</th>
            <th>Organization</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ _id, username, password, role, organization }) => (
            <tr key={_id}>
              <td>
                <input
                  name="username"
                  value={username}
                  type="text"
                  onChange={(e) => handleInputChange(e, username)}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="password"
                  value={password}
                  type="password"
                  onChange={(e) => handleInputChange(e, username)}
                  placeholder="Type Password"
                />
              </td>
              <td>
                <input
                  name="role"
                  value={role}
                  type="text"
                  onChange={(e) => handleInputChange(e, username)}
                  placeholder="Type Role"
                />
              </td>
              <td>
                <input
                  name="organization"
                  value={organization}
                  type="text"
                  onChange={(e) => handleInputChange(e, username)}
                  placeholder="Type Organization"
                />
              </td>
              <td>
                <button onClick={() => handleUpdateUser(username)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
