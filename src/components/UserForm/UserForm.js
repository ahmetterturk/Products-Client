import React, { useState } from 'react';
import { createUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false,
    permissions: 'read',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the createUser API function
      const newUser = await createUser(formData);
      // Redirect back to the users page
      navigate('/users');
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error if needed
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <label>Is Admin:</label>
        <input type="checkbox" name="isAdmin" checked={formData.isAdmin} onChange={handleChange} />
        <br />
        <label>Permissions:</label>
        <select name="permissions" value={formData.permissions} onChange={handleChange}>
          <option value="">...</option>
          <option value="read">Read</option>
          <option value="edit">Edit</option>
        </select>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;
