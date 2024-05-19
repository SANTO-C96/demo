import React, { useState } from 'react';
import Finvu from '../images/finvu.jpg'
import { useNavigate } from 'react-router-dom';

const BankStatementUpload = () => {
  const [uploadedMessageVisible, setUploadedMessageVisible] = useState(false);
  const [continueButtonVisible, setContinueButtonVisible] = useState(false);
  const [contactErrorVisible, setContactErrorVisible] = useState(false);
  const [otpErrorVisible, setOtpErrorVisible] = useState(false);
  const [otpTimerVisible, setOtpTimerVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const navigate = useNavigate();

  const uploadFile = () => {
    // Simulating file upload with a delay (you would replace this with actual file upload logic)
    setTimeout(() => {
      setUploadedMessageVisible(true);
      setContinueButtonVisible(true);
    }, 2000); // Delay of 2 seconds for demonstration purposes
  };

  const sentOTP = () => {
    const contactNumber = document.getElementById('contactNumber').value;
    if (contactNumber.length !== 10 || isNaN(contactNumber)) {
      setContactErrorVisible(true);
      return;
    } else {
      setContactErrorVisible(false);
    }

    document.getElementById('sentOTPButton').classList.add('hidden');
    document.getElementById('enterOTPSection').classList.remove('hidden');

    let timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    setOtpTimerVisible(true);

    setTimeout(() => {
      clearInterval(timerInterval);
      document.getElementById('sentOTPButton').classList.remove('hidden');
      document.getElementById('enterOTPSection').classList.add('hidden');
      document.getElementById('verificationStatus').classList.add('hidden');
      setContinueButtonVisible(false);
      setOtpTimerVisible(false);
      setTimeLeft(60);
    }, 60000);
  };

  const verifyOTP = () => {
    const enteredOTP = document.getElementById('otpInput').value;
    if (enteredOTP.length !== 6 || isNaN(enteredOTP)) {
      setOtpErrorVisible(true);
      return;
    } else {
      setOtpErrorVisible(false);
    }

    document.getElementById('verificationStatus').classList.remove('hidden');
    document.getElementById('verifyOTPButton').classList.add('hidden');
    setContinueButtonVisible(true);
    setOtpTimerVisible(false);
  };

  const handleMethodChange = (e) => {
    const uploadForm = document.getElementById('uploadForm');
    const continueButton = document.getElementById('continueButton');
    const finfoSection = document.getElementById('finfoSection');

    if (e.target.id === 'upload_manual') {
      uploadForm.classList.remove('hidden');
      setContinueButtonVisible(false);
      finfoSection.classList.remove('hidden');
    } else {
      uploadForm.classList.add('hidden');
      setContinueButtonVisible(true);
      finfoSection.classList.remove('hidden');
    }
  };

  const handleContinue=()=>{
    navigate('/kycoption');
  }

  return (
    <div className="container mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold mb-4">Provided Bank Statement</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto bg-gray-200">
        <h2 className="text-lg font-semibold mb-4">Choose Upload Method!</h2>
        <div className="flex items-center mb-4 bg-white-100">
          <input
            type="radio"
            id="upload_finfo"
            name="upload_method"
            className="form-radio"
            checked
            onChange={handleMethodChange}
          />
          <label htmlFor="upload_finfo" className="ml-2 cursor-pointer">
            Upload_via_Finvu
          </label>
          <img
            src={Finvu}
            alt=""
            className="h-20 ml-80 border border-solid border-gray-400 rounded-lg"
          />
        </div>
        {/* New section for contact number and OTP */}
        <div id="finfoSection" className=" flex items-center mb-4">
          <input
            type="tel"
            id="contactNumber"
            className="w-40 px-1 py-1 border rounded-lg focus:outline-none focus:border-blue-500 mr-2"
            placeholder="Enter Contact Number"
          />
          <button
            onClick={sentOTP}
            id="sentOTPButton"
            className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-1 rounded focus:outline-none focus:shadow-outline"
          >
            Send OTP
          </button>
        </div>
        <div id="contactError" className={contactErrorVisible ? 'text-red-600 text-sm mb-2' : 'hidden ml-4'}>
          Please enter a valid 10-digit mobile number.
        </div>
        <div id="enterOTPSection" className="hidden ml-4 flex items-center">
          <input
            type="text"
            id="otpInput"
            className="w-84 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mr-2"
            placeholder="Enter OTP"
          />
          <button
            onClick={verifyOTP}
            id="verifyOTPButton"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Verify
          </button>
          <div id="verificationStatus" className="hidden ml-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-green-500 ml-1">Verified</span>
          </div>
          <div id="otpError" className={otpErrorVisible ? 'text-red-600 text-sm mb-2 ml-2' : 'hidden ml-2'}>
            Please enter a valid 6-digit OTP.
          </div>
          <div id="otpTimer" className={otpTimerVisible ? 'text-red-600 text-sm ml-2' : 'hidden'}>
            {timeLeft} seconds left
          </div>
        </div>
        {/* End of new section */}
        <div className="flex items-center mb-4">
          <input type="radio" id="upload_manual" name="upload_method" className="form-radio" onChange={handleMethodChange} />
          <label htmlFor="upload_manual" className="ml-2 cursor-pointer">
            Upload Manually
          </label>
        </div>
        <form id="uploadForm" encType="multipart/form-data" className="hidden">
          <div className="mb-4">
            <label htmlFor="bank_statement" className="block text-gray-700 font-bold mb-2">
              Upload Bank Statement:
            </label>
            <input
              type="file"
              id="bank_statement"
              name="bank_statement"
              accept=".jpg,.jpeg,.png,.pdf"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={uploadFile}
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload
            </button>
          </div>
        </form>
        <div id="uploadedMessage" className={uploadedMessageVisible ? 'mt-4 text-green-600' : 'hidden'}>
          File uploaded successfully!
        </div>
        <div id="continueButton" className={continueButtonVisible ? 'mt-4' : 'hidden'}>
          {/* Initially hidden */}
          <a href="#" onClick={handleContinue} className="bg-blue-500 mt-2 mb-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Continue
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          <b>You can upload your bank statement via FINfo or manually by selecting the appropriate option above.</b>{' '}
        </p>
      </div>
    </div>
  );
};

export default BankStatementUpload;
