import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editUserReducer, fetchUserReducer } from '../Redux/reducer/userReducer';

function EditUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
//   const history = useHistory();
  const { users, loading, error } = useSelector(state => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = users.find(user => user._id === id);
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPassword(user.password);
    } else {
      dispatch(fetchUserReducer());
    }
  }, [id, users, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserReducer({ id, name, email, password }));
    window.location.href="/";
    // history.push('/');
  };

  return (
    <div>
      <h3>Edit User</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="FormMainInput">
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
            required
             className='FormInput'
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditUser;
