import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addUser } from '../Redux/actions/userActions';
import { addUserReducer } from '../Redux/reducer/userReducer';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUserReducer({ name, email, password }));
    window.location.href="/";
  };

  return (
    <div>
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit} className='FormMain'>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
             className='FormInput'
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             className='FormInput'
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             className='FormInput'
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
