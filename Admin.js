import React, { useState, useEffect } from 'react';
import './Admin.css';
import { ref, onValue, push, update, remove } from 'firebase/database';
import { database } from '../Firebase';

function Admin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(database, 'users');
    onValue(usersRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const usersArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setUsers(usersArray);
      }
    });
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, role };
    const newUserRef = push(ref(database, 'users'));
    update(newUserRef, newUser)
      .then(() => {
        alert('New user is added');
      })
      .catch((error) => {
        console.error("Error adding user: ", error);
      });
    setUsername('');
    setEmail('');
    setRole('user');
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      remove(ref(database, 'users/' + userId))
        .then(() => {
          alert('User is successfully deleted');
        })
        .catch((error) => {
          console.error("Error deleting user: ", error);
        });
    }
  };

  return (
    <div className="admin">
      <h1>Admin Form</h1>
      <section className="section">
        <h2>Add New User</h2>
        <form onSubmit={handleAddUser}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Add User</button>
        </form>
      </section>

      <section className="admin-section">
        <h2>Manage Users History</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Admin;
