import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUserById, fetchUserReducer } from '../Redux/reducer/userReducer';
function Home() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state);
  
  useEffect(() => {
    dispatch(fetchUserReducer());
  },[])

//   const dispatch = useDispatch();

const handleDeleteUser = (id) => {
    dispatch(DeleteUserById({ id }));
    setTimeout(() => {
        dispatch(fetchUserReducer());  // Fetch the updated list of users after deletion
    }, 1000); 
};

  return (<>
  <div><div style={{padding:"10px" ,display:"flex",justifyContent:"flex-end"}}><button onClick={()=>window.location.href="/add"}>Add User</button></div>
<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">User Name</th>
      <th scope="col">User Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {user?.users.length > 0 ? (
      user?.users?.map((item) => (
        <tr key={item._id}>
          <th scope="row">{item._id}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td><button onClick={()=>window.location.href=`/edit/${item._id}`}>Edit</button><button className='m-4 btn btn-danger' onClick={() => handleDeleteUser(item._id)}>Delete</button></td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4">No Data</td>
      </tr>
    )}
  </tbody>
</table>
</div>
  </>
  )
}

export default Home