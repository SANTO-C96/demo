import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OngoingLoan() {
  const [showEmiInput, setShowEmiInput] = useState(false);
  const [income, setIncome] = useState('');
  const [emiAmount, setEmiAmount] = useState('');
  const [incomeError, setIncomeError] = useState('');
  const [emiAmountError, setEmiAmountError] = useState('');
  const [optionError, setOptionError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const navigate = useNavigate();

  const handleYesClick = () => {
    setShowEmiInput(true);
  };
  

  const handleNoClick = () => {
    setShowEmiInput(false);
    setEmiAmount('');
  };

  const validateForm = () => {
    let isValid = true;
    if (!income) {
      setIncomeError('Income is required');
      isValid = false;
    } else {
      setIncomeError('');
    }

    if (showEmiInput && !emiAmount) {
      setEmiAmountError('EMI amount is required');
      isValid = false;
    } else {
      setEmiAmountError('');
    }

    if (!showEmiInput) {
      setOptionError('Please select an option');
      isValid = false;
    } else {
      setOptionError('');
    }

    if (isValid) {
      console.log('Form submitted successfully!');
      // You can perform additional actions here, such as sending form data to a server
    }
  };

  const handleSubmit4=()=>{
     navigate('/loancalculator');
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Loan Application Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="income" className="block text-sm font-semibold mb-1">Monthly salary</label>
          <input
            type="text"
            id="income"
            name="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="error-message text-red-500 text-sm">{incomeError}</div>
        </div>
        <p>Do you have any ongoing loans or EMI(s)? *</p>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={handleYesClick}
            className="w-1/2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={handleNoClick}
            className="w-1/2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            No
          </button>
        </div>

        {showEmiInput && (
          <div className="mt-4">
            <label htmlFor="emi-amount" className="block text-sm font-semibold mb-1">EMI Amount:</label>
            <input
              type="text"
              id="emi-amount"
              name="emi-amount"
              value={emiAmount}
              onChange={(e) => setEmiAmount(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="error-message text-red-500 text-sm">{emiAmountError}</div>
          </div>
        )}

        <input
          type="submit"
          value="Submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSubmit4}
        />

        <div className="error-message text-red-500 text-sm">{optionError}</div>
      </form>
    </div>
  );
}

export default OngoingLoan;
