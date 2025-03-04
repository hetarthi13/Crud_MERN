import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home'
import EditUser from './Pages/EditUser';
import AddUser from './Pages/AddUser';

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/add" element={<AddUser />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouteComponent
