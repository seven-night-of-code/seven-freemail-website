// LoginForm.jsx
import React from 'react';

const LoginForm = () => {
  return (
    <form>
      {/* Add your login form fields here */}
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;