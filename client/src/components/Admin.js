// Admin.js
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function Admin() {
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) { 
      const user = jwtDecode(token);

      // Check if the user is an admin (you can replace this condition with your actual logic)
      if (user && user.isAdmin) {
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      {isAdmin ? (
        <p>Welcome, Admin! You have access to admin content.</p>
      ) : (
        <p>Access Denied. You are not an admin.</p>
      )}
    </div>
  );
}

export default Admin;
