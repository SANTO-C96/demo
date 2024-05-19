import React from 'react';
import { useNavigate } from 'react-router-dom';

const KYCoption = () => {
    const navigate = useNavigate();
  const showTerms = (termsId, btnId) => {
    const terms = document.getElementById(termsId);
    const btn = document.getElementById(btnId);

    if (terms.style.display === 'none' || terms.style.display === '') {
      terms.style.display = 'block';
      btn.style.display = 'none';
    } else {
      terms.style.display = 'none';
      btn.style.display = 'block';
    }
    
  };

  const proceed = (termsId) => {
    const terms = document.getElementById(termsId);

    if (terms.style.display === 'block') {
      terms.style.display = 'none';
      
    }
  };

  const handleSubmit = (route) => {
    navigate(route);
};

  const toggleProceed = (checkId, btnId) => {
    const checkbox = document.getElementById(checkId);
    const btn = document.getElementById(btnId);

    btn.disabled = !checkbox.checked;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Choose KYC Option</h1>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto">
        <h2 className="text-lg font-semibold mb-4">Select your KYC option:</h2>
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-between mb-4">
            <h3 className="text-base font-semibold mb-1">e-KYC</h3>
            <p className="text-sm text-gray-600 mb-3">Verify your identity online</p>
            <button
              id="selectBtn1"
              className="bg-blue-500 hover:bg-blue-600 text-white w-20 px-3 py-1 rounded-md text-xs"
              onClick={() => showTerms('terms1', 'selectBtn1')}
            >
              Select
            </button>
            <div id="terms1" className="hidden mt-4">
              <h4 className="text-base font-semibold mb-2">Terms and Conditions</h4>
              <p className="text-sm text-gray-600">
                By clicking on proceed button below, you hereby acknowledge that you are providing your Aadhaar related details voluntarily, without any undue
                influence/ coercion, to KARZA TECHNOLOGIES PRIVATE LIMITED for retrieving your Aadhaar Paperless-XML from the UIDAI Portal for conducting offline
                verification of Aadhaar for identification purposes, in accordance with applicable law and based on the process detailed below. Any information
                submitted by you shall be treated as confidential, in accordance with applicable law. Please note that it is not mandatory for you to provide your
                Aadhaar details. If you do not wish to continue with providing the same, we request you to cancel the offline Aadhaar verification transaction and
                you may proceed with other modes of identity verification. Please Click Here to check the Terms and Conditions.
              </p>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  id="agreeCheck1"
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => toggleProceed('agreeCheck1', 'proceedBtn1')}
                />
                <span className="text-sm">
                  <b>I agree to the terms and conditions</b>
                </span>
              </label>
              <button
                id="proceedBtn1"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md mt-2 text-xs"
                onClick={() => {proceed('terms1');handleSubmit('/aadharcarddetails')}}
                
              >
                Proceed
              </button>
            </div>
          </div>
          <hr className="w-full border-t-2 border-gray-200" />
          <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-between mb-4">
            <h3 className="text-base font-semibold mb-1">Aadhar Card</h3>
            <p className="text-sm text-gray-600 mb-3">Upload your Aadhar card</p>
            <button
              id="selectBtn2"
              className="bg-green-500 hover:bg-green-600 text-white w-20 px-3 py-1 rounded-md text-xs"
              onClick={() => showTerms('terms2', 'selectBtn2')}
            >
              Select
            </button>
            <div id="terms2" className="hidden mt-4">
              <h4 className="text-base font-semibold mb-2">Terms and Conditions</h4>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec ex laoreet, vitae pretium dolor placerat.</p>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  id="agreeCheck2"
                  type="checkbox"
                  className="form-checkbox text-green-500"
                  onChange={() => toggleProceed('agreeCheck2', 'proceedBtn2')}
                />
                <span className="text-sm">I agree to the terms and conditions</span>
              </label>
              <button
                id="proceedBtn2"
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md mt-2 text-xs"
                onClick={() => {proceed('terms2');handleSubmit('/aadharupload')}}
                
              >
                Proceed
              </button>
            </div>
          </div>
          <hr className="w-full border-t-2 border-gray-200" />
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-between mb-4">
            <h3 className="text-base font-semibold mb-1">Other KYC Documents</h3>
            <p className="text-sm text-gray-600 mb-3">Upload other required documents</p>
            <button
              id="selectBtn3"
              className="bg-yellow-500 hover:bg-yellow-600 text-white w-20 py-1 rounded-md text-xs"
              onClick={() => showTerms('terms3', 'selectBtn3')}
            >
              Select
            </button>
            <div id="terms3" className="hidden mt-4">
              <h4 className="text-base font-semibold mb-2">Terms and Conditions</h4>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec ex laoreet, vitae pretium dolor placerat.</p>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  id="agreeCheck3"
                  type="checkbox"
                  className="form-checkbox text-yellow-500"
                  onChange={() => toggleProceed('agreeCheck3', 'proceedBtn3')}
                />
                <span className="text-sm">I agree to the terms and conditions</span>
              </label>
              <button
                id="proceedBtn3"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md mt-2 text-xs"
                onClick={() => {proceed('terms3');handleSubmit('/kycdocumentforum')}}
                
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCoption;



