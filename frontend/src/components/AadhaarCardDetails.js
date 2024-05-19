import React, { useState } from 'react';

const AadhaarCardDetails = () => {
    const [aadharNumber, setAadharNumber] = useState('');
    const [aadharConfirm, setAadharConfirm] = useState('');
    const [otp, setOtp] = useState('');
    const [aadharError, setAadharError] = useState('');
    const [aadharConfirmError, setAadharConfirmError] = useState('');
    const [otpError, setOtpError] = useState('');
    const [otpSectionVisible, setOtpSectionVisible] = useState(false);

    const handleAadharNumberChange = (e) => {
        const aadharNum = e.target.value.trim();
        const aadharRegex = /^\d{12}$/;
        setAadharNumber(aadharNum);
        if (!aadharRegex.test(aadharNum)) {
            setAadharError('Aadhaar number must be 12 digits.');
        } else {
            setAadharError('');
        }
    };

    const handleAadharConfirmChange = (e) => {
        const confirmNum = e.target.value.trim();
        setAadharConfirm(confirmNum);
        if (aadharNumber !== confirmNum) {
            setAadharConfirmError('Aadhaar numbers do not match.');
        } else {
            setAadharConfirmError('');
        }
    };

    const handleVerifyAadhar = () => {
        setTimeout(() => {
            setOtpSectionVisible(true);
        }, 1000);
    };

    const handleOtpChange = (e) => {
        const otpValue = e.target.value.trim();
        const otpRegex = /^\d{6}$/;
        setOtp(otpValue);
        if (!otpRegex.test(otpValue)) {
            setOtpError('OTP must be 6 digits.');
        } else {
            setOtpError('');
        }
    };

    const handleOtpSubmit = () => {
        if (otp === '123456') {
            alert('OTP Verified!');
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form>
                <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold mb-4 text-center bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-between mb-4">Aadhaar Card Details</h1>
                    <div className="mb-4">
                        <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                            <i className="fas fa-id-card-alt text-gray-400 mr-2"></i>
                            <input type="text" id="aadharNumber" name="aadharNumber" placeholder="Enter Aadhaar Number"
                                className="mt-1 block w-full placeholder-gray-400 focus:outline-none"
                                value={aadharNumber}
                                onChange={handleAadharNumberChange}
                            />
                        </div>
                        <span id="aadharError" className="text-red-500 text-xs italic">{aadharError}</span>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="aadharConfirm" className="block text-sm font-medium text-gray-700">Confirm Aadhaar Number</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                            <i className="fas fa-id-card text-gray-400 mr-2"></i>
                            <input type="text" id="aadharConfirm" name="aadharConfirm" placeholder="Confirm Aadhaar Number"
                                className="mt-1 block w-full placeholder-gray-400 focus:outline-none"
                                value={aadharConfirm}
                                onChange={handleAadharConfirmChange}
                            />
                        </div>
                        <span id="aadharConfirmError" className="text-red-500 text-xs italic">{aadharConfirmError}</span>
                    </div>
                    <button type="button" id="verifyBtn"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md mt-2 text-xs"
                        onClick={handleVerifyAadhar}
                        disabled={aadharError || aadharConfirmError}
                    >
                        Verify Aadhaar
                    </button>
                    <div id="otpSection" className={`mt-4 ${otpSectionVisible ? '' : 'hidden'}`}>
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                            <i className="fas fa-key text-gray-400 mr-2"></i>
                            <input type="text" id="otp" name="otp" placeholder="Enter OTP"
                                className="mt-1 block w-full placeholder-gray-400 focus:outline-none"
                                value={otp}
                                onChange={handleOtpChange}
                            />
                        </div>
                        <span id="otpError" className="text-red-500 text-xs italic">{otpError}</span>
                        <button type="button" id="otpSubmitBtn"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md mt-2 text-xs"
                            onClick={handleOtpSubmit}
                            disabled={otpError}
                        >
                            Submit OTP
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AadhaarCardDetails;
