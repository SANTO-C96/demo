import React, { useState } from 'react';

const AadhaarUploadForm = () => {
    const [frontFile, setFrontFile] = useState(null);
    const [backFile, setBackFile] = useState(null);
    const [frontError, setFrontError] = useState('');
    const [backError, setBackError] = useState('');
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [continueBtnVisible, setContinueBtnVisible] = useState(false);

    const handleFrontFileChange = (e) => {
        setFrontFile(e.target.files[0]);
    };

    const handleBackFileChange = (e) => {
        setBackFile(e.target.files[0]);
    };

    const handleUploadBtnClick = () => {
        if (frontFile && backFile) {
            // Hide upload button and show success message and continue button
            setSuccessMessageVisible(true);
            setContinueBtnVisible(true);
        } else {
            setFrontError('Please upload both Aadhaar front and back.');
        }
    };

    const handleContinueBtnClick = () => {
        // Add logic to proceed to the next step
        alert('Continuing to the next step...');
    };

    return (
        <div className="container mx-auto p-4">
            <form>
                <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold mb-4 text-center bg-yellow-100">Upload Aadhaar Front and Back</h1>
                    <div className="mb-4">
                        <label htmlFor="aadharFront" className="block text-sm font-medium text-gray-700">Upload Aadhaar Front</label>
                        <input
                            type="file"
                            id="aadharFront"
                            name="aadharFront"
                            accept="image/jpeg, image/png, application/pdf"
                            className="mt-1 block w-full"
                            onChange={handleFrontFileChange}
                        />
                        <span id="frontError" className="text-red-500 text-xs italic">{frontError}</span>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="aadharBack" className="block text-sm font-medium text-gray-700">Upload Aadhaar Back</label>
                        <input
                            type="file"
                            id="aadharBack"
                            name="aadharBack"
                            accept="image/jpeg, image/png, application/pdf"
                            className="mt-1 block w-full"
                            onChange={handleBackFileChange}
                        />
                        <span id="backError" className="text-red-500 text-xs italic">{backError}</span>
                    </div>
                    <button
                        type="button"
                        id="uploadBtn"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md mt-2 text-xs"
                        onClick={handleUploadBtnClick}
                    >
                        Upload
                    </button>
                    {successMessageVisible && (
                        <p id="successMessage" className="text-green-500 text-sm mt-2">Aadhaar card uploaded successfully!</p>
                    )}
                    {continueBtnVisible && (
                        <button
                            type="button"
                            id="continueBtn"
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md mt-2 text-xs mx-auto block"
                            onClick={handleContinueBtnClick}
                        >
                            Continue
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AadhaarUploadForm;
