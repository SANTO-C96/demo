import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store email and password values in variables or perform any other action here
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/typeofloan');
  };

  const openForgotPassword = () => {
    // Replace 'your-forgot-password-url' with the actual URL of your forgot password page
    navigate('/forget');
  };

  const handleSignup=()=>{
    navigate('/signup');
  }

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form id="loan-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
          <i class="fa-solid fa-envelope mr-2"></i>Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="error-message" id="name-error"></div>
        </div>

        <div className="mb-4">
          <label htmlFor="pass" className="block text-sm font-semibold mb-1">
            <i className="fas fa-solid fa-key mr-1"></i>Password:
          </label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="error-message" id="pass-error"></div>
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            required
          />
          <label htmlFor="terms" className="ml-2 text-sm font-semibold">
            Remember me
          </label>
          <div className="error-message" id="terms-error"></div>
        </div>

        <div>
          
          <button
      onClick={handleSubmit}
      className={`w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600
      }`}
    >
      Login
    </button>
        </div>
      </form>
      <p className="mt-4 text-sm text-center">
        {' '}
        <span
          className="sign-in-link text-blue-500 cursor-pointer"
          onClick={openForgotPassword}
        >
          Forgot password?
        </span>
      </p>
      <br />
      <hr />

      <p className="mt-4 text-sm text-center">
        {' '}
        <span
          className="sign-in-link text-blue-500 cursor-pointer"
          onClick={handleSignup}
        >
          Create Your New Account Here
        </span>
      </p>
    </div>
  );
};

export default Login;
