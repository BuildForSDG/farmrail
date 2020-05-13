import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <Link to="/">
        <h1>Farmrail Homepage</h1>
      </Link>

      <Link to="/login">
        <h2>Login</h2>
      </Link>
      <Link to="/signup">
        <h2>Signup</h2>
      </Link>
    </div>
  );
}
