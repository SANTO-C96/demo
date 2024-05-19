import React, { useState } from 'react';

const KYCDocumentForm = () => {
    const [selectedDocument, setSelectedDocument] = useState('');
    const [documentFile, setDocumentFile] = useState(null);
    const [documentError, setDocumentError] = useState('');
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [continueBtnVisible, setContinueBtnVisible] = useState(false);

    const handleDocumentTypeChange = (e) => {
        setSelectedDocument(e.target.value);
    };

    const handleDocumentChange = (e) => {
        setDocumentFile(e.target.files[0]);
    };

    const handleUploadBtnClick = () => {
        if (documentFile) {
            // Hide upload button and show success message and continue button
            setSuccessMessageVisible(true);
            setContinueBtnVisible(true);
        } else {
            setDocumentError('Please upload a document.');
        }
    };

    const handleContinueBtnClick = () => {
        // Add logic to proceed to the next step based on the selected document type
        alert(`Continuing with ${selectedDocument}.`);
    };

    return (
        <div className="container mx-auto p-4">
            <form>
                <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold mb-4 text-center bg-yellow-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-between mb-4">KYC Document</h1>
                    <div className="mb-4">
                        <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Choose Document Type (any one)</label>
                        <select
                            id="documentType"
                            name="documentType"
                            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            value={selectedDocument}
                            onChange={handleDocumentTypeChange}
                        >
                            <option value="passport">Passport</option>
                            <option value="drivingLicense">Driving License</option>
                        </select>
                    </div>
                    <div id="documentUpload" className="mb-4">
                        <label htmlFor="document" className="block text-sm font-medium text-gray-700">Upload Document</label>
                        <input
                            type="file"
                            id="document"
                            name="document"
                            accept="image/jpeg, image/png, application/pdf"
                            className="mt-1 block w-full"
                            onChange={handleDocumentChange}
                        />
                        <span id="documentError" className="text-red-500 text-xs italic">{documentError}</span>
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
                        <p id="successMessage" className="text-green-500 text-sm mt-2">File uploaded successfully!</p>
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

export default KYCDocumentForm;
