// SignUpForm.jsx
import React from 'react';

const SignUpForm = () => {
  return (
    <form>
      {/* Add your sign up form fields here */}
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;