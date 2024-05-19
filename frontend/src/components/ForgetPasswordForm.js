import React, { useState } from 'react';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(45); // Time in seconds
  const [timerInterval, setTimerInterval] = useState(null);

  const handleSendOTP = () => {
    if (!email) {
      alert('Please enter your email.');
      return;
    }

    // Send OTP logic here (mocking sending email)
    const generatedOTP = generateOTP();
    setOtp(generatedOTP);
    setOtpSent(true);

    // Start timer
    startTimer();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Reset password logic here
    console.log('Password reset successful');
    // You can redirect or show a success message here
  };

  const generateOTP = () => {
    const digits = '123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setOtpTimer((prevTimer) => prevTimer - 1);
      if (otpTimer === 0) {
        clearInterval(interval);
        setOtpSent(false);
        setOtp('');
        setOtpTimer(45); // Reset timer
      }
    }, 1000);
    setTimerInterval(interval);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <div className="mb-4">
          <h5 className="text-lg font-semibold">Forgot Password?</h5>
          <p className="text-sm text-gray-700 mb-2">Enter your registered email ID to reset the password</p>
        </div>
        <form onSubmit={handleSubmit} id="otp-form">
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              onClick={handleSendOTP}
              disabled={otpSent}
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              {otpSent ? 'OTP Sent' : 'Send OTP'}
            </button>
            {otpSent && <span className="text-sm text-green-500">OTP sent to {email}</span>}
          </div>
          {otpSent && (
            <div id="otp-section">
              <label htmlFor="otp" className="block text-sm font-medium mb-1">OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                disabled
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="otp"
                placeholder="Enter OTP"
                required
                autoComplete="new-password"
              />
              <div className="text-sm text-gray-700">OTP valid for {otpTimer} seconds</div>
            </div>
          )}
          <div className="mb-3">
            <button
              type="submit"
              id="reset-password"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                <a href="/setpassword">Reset Password</a>
              
            </button>
          </div>
          <p className="text-sm text-gray-700">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
