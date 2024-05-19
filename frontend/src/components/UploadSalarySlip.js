import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadSalarySlip = () => {
    const [isUploaded, setIsUploaded] = useState(false);
     const navigate = useNavigate();
    const uploadFile = () => {
        const fileInput = document.getElementById('salary_slip');
        const uploadStatus = document.getElementById('uploadStatus');

        if (fileInput.files.length > 0) {
            // Simulating file upload with a delay
            setTimeout(() => {
                setIsUploaded(true);
                uploadStatus.textContent = 'Uploaded';
                uploadStatus.classList.remove('bg-red-500');
                uploadStatus.classList.add('bg-green-500');
            }, 1000); // Delay of 1 second for demonstration purposes
        } else {
            uploadStatus.textContent = 'Not Uploaded';
            uploadStatus.classList.remove('bg-green-500');
            uploadStatus.classList.add('bg-red-500');
        }
    };

    const handleClick = () =>{
        navigate('/bankstatement');
    }

    return (
        <div className=" mx-auto max-w-3xl p-6">
            <h1 className="text-2xl font-bold mb-4">Personal Documents</h1>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
                <h1 className="heading-lg text-xl font-semibold mb-4"><b>Upload Salary Slip!</b></h1>
                <form id="uploadForm" encType="multipart/form-data">
                    <div className="mb-4">
                        <label htmlFor="salary_slip" className="block text-gray-700 font-bold mb-2">Choose File: 
                            <span id="uploadStatus" className="text-xs px-2 py-1 rounded-lg ml-2 text-white bg-red-500">Not Uploaded</span>
                        </label>
                        <input type="file" id="salary_slip" name="salary_slip" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                    </div>
                    <p className="text-sm text-gray-600">Note: Please upload a PDF or image file of your recent salary slip.</p>
                    <div className="mt-6">
                        <button type="button" onClick={uploadFile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Upload</button>
                    </div>
                </form>
                {isUploaded && (
                    <div>
                        <div id="uploadedMessage" className="mt-4 text-green-600">File uploaded successfully!</div>
                        <div className="mt-6">
                            <button type="button" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>Continue</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadSalarySlip;
