
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TwoWheelersSignup() {
  const [refreshCount, setRefreshCount] = useState(0);
  const hideToggleNavbar =
    window.location.pathname === '/' ||
    window.location.pathname === '/contact' ||
    window.location.pathname === '/loan' || 
    window.location.pathname === '/salaried'||
    window.location.pathname === '/business'||
    window.location.pathname === '/login'||
    window.location.pathname === '/account'||
    window.location.pathname === '/basic'||
    window.location.pathname === '/threesignup'||
    window.location.pathname === '/twosignup'||
    window.location.pathname === '/evsignup'||
    window.location.pathname === '/signup';
  useEffect(() => {
    const navDialog = document.getElementById('nav-dialog');
    if (navDialog) {
      if (hideToggleNavbar) {
        navDialog.classList.add('hidden');
      } else {
        navDialog.classList.remove('hidden');
      }
    }
  }, [refreshCount, hideToggleNavbar]);
  
  const navigate = useNavigate();
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [panError, setPanError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [incomeError, setIncomeError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false); // State to track if OTP is verified

  function handleSendOTP() {
    const mobileInput = document.getElementById('mobile');
    if (mobileInput.value.trim().length !== 10 || isNaN(mobileInput.value.trim())) {
      setMobileError("Please enter a valid 10-digit mobile number");
    } else {
      alert("OTP sent to " + mobileInput.value.trim());
      setMobileError('');
    }
  }

  function handleVerifyOTP() {
    const otpInput = document.getElementById('otp');
    if (otpInput.value.trim().length !== 6 || isNaN(otpInput.value.trim())) {
      setOtpError("Please enter a valid 6-digit OTP");
    } else {
      setOtpError('');
      setOtpVerified(true); // Set OTP verification status to true
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const panInput = document.getElementById('pan');
    const mobileInput = document.getElementById('mobile');
    const otpInput = document.getElementById('otp');
    const incomeInput = document.getElementById('income');
    const termsCheckbox = document.getElementById('terms');

    // Reset previous error messages
    setEmailError('');
    setPanError('');
    setMobileError('');
    setOtpError('');
    setIncomeError('');
    setTermsError('');

    // Validate email
    if (!emailInput.value.trim().includes('@')) {
      setEmailError("Please enter a valid email address");
      return;
    }

    

    // Validate mobile number
    if (mobileInput.value.trim().length !== 10 || isNaN(mobileInput.value.trim())) {
      setMobileError("Please enter a valid 10-digit mobile number");
      return;
    }

    // Validate OTP
    if (!otpVerified) {
      setOtpError("Please verify OTP");
      return;
    }

    // Validate income
    if (isNaN(incomeInput.value.trim())) {
      setIncomeError("Please enter a valid income");
      return;
    }

    // Validate terms checkbox
    if (!termsCheckbox.checked) {
      setTermsError("Please accept the terms and conditions");
      return;
    }

    // If all validations pass, you can proceed with form submission
    console.log("Form submitted successfully!");
  }

  function openReferencePage() {
    // Replace 'your-reference-page-url' with the actual URL of your reference page
    navigate('/login');
  }
  
  const handleSignup = () =>{
    navigate('/basic');
  }

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Loan Sign Up</h2>
      <form id="loan-form" onSubmit={handleFormSubmit}>
        {/* Email input */}
        {/* PAN input */}
        {/* Mobile number input */}
        {/* OTP input */}
        {/* Income input */}
        {/* Terms checkbox */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1"><i className="fas fa-envelope mr-1"></i>Email:</label>
          <input type="email" id="email" name="email" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <div className="text-red-600 text-xs mt-1">{emailError}</div>
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-semibold mb-1"><i className="fas fa-phone-alt mr-1"></i>Mobile Number:</label>
          <div className="flex items-center">
            <input type="text" id="mobile" name="mobile" required className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            <button type="button" id="send-otp-btn" onClick={handleSendOTP} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send OTP</button>
          </div>
          <div className="text-red-600 text-xs mt-1">{mobileError}</div>
        </div>

        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-semibold mb-1">OTP:</label>
          <div className="flex">
            <input type="text" id="otp" name="otp" required className="block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            {!otpVerified && (
              <button type="button" onClick={handleVerifyOTP} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Verify OTP
              </button>
            )}
            {otpVerified && (
              <span className="ml-2 text-green-500">OTP Verified</span>
            )}
          </div>
          <div className="text-red-600 text-xs mt-1">{otpError}</div>
        </div>
        
        {/* <div className="mb-4">
          <label htmlFor="income" className="block text-sm font-semibold mb-1">Income:</label>
          <input type="text" id="income" name="income" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <div className="text-red-600 text-xs mt-1">{incomeError}</div>
        </div> */}

        <div className="mb-4">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms" className="ml-2 text-sm font-semibold">I hereby confirm my consent and authorise Bundela Fin Corp and its affiliates to contact me through SMS/ call/ whatsapp on the mobile number provided and to use or share this number for verification purposes for processing my loan application.</label>
          <div className="text-red-600 text-xs mt-1">{termsError}</div>
        </div>
        
        
        
        {/* Submit button */}
        <div>
          <input type="submit" value="Sign Up" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSignup} />
        </div>
      </form>
      <p className="mt-4 text-sm">If you have already an account, please <span className="text-blue-500 cursor-pointer underline" onClick={openReferencePage}>sign in</span> here.</p>
    </div>
  );
}

export default TwoWheelersSignup;

