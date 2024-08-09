import React, { useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

const Admin = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const db = getDatabase();
    const usersRef = ref(db, 'users');
    try {
      const data = await get(usersRef);
      if (data.exists()) {
        const userData = [];
        data.forEach(childData => {
          const user = childData.val();
          userData.push(user);
        });
        setUsers(userData);
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  fetchUserData();

  return (
    <div className="container">
      <h1>User Details</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {users.map((user, index) => (
          <div className="col" key={index}>
            <div className="card h-100 hover-effect" style={{ backgroundColor: "aliceblue" }}>
              <div className="card-body">
                <h5 className="card-title">{user.USERNAME}</h5>
                <p className="card-text">Email: {user.EMAIL}</p>
                <p className="card-text">Phone: {user.Phno}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
