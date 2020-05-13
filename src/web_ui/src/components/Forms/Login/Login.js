import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <Link to="/dashboard">
        <h2>Login</h2>
      </Link>
    </div>
  );
}
