import React, { useState, useEffect } from 'react';

export default function EditableUserProfile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Retrieve email from local storage
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {email}</p>
      {/* Other profile information */}
    </div>
  );
}
