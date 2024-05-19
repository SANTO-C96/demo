import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('36');
  const [tenureMonths, setTenureMonths] = useState('');
  const [loanDetails, setLoanDetails] = useState('');
  const [resultVisible, setResultVisible] = useState(false);

  const navigate = useNavigate();
  const handleContinue = () =>{
       navigate('/address');
  }

  const calculateLoan = () => {
    const loanAmountValue = parseFloat(loanAmount);
    const interestRateValue = parseFloat(interestRate) / 100;
    const tenureMonthsValue = parseInt(tenureMonths);

    const monthlyInterest = (loanAmountValue * interestRateValue) / 12;
    const totalEMI = (loanAmountValue / tenureMonthsValue) + monthlyInterest;

    const loanDetailsHTML = `
      <p><strong>Loan Amount:</strong> ₹${loanAmountValue}</p>
      <p><strong>Interest Rate:</strong> ${interestRateValue * 100}%</p>
      <p><strong>Tenure in Months:</strong> ${tenureMonthsValue}</p>
      <p><strong>Monthly Installment:</strong> ₹${totalEMI.toFixed(2)}</p>
    `;

    setLoanDetails(loanDetailsHTML);
    setResultVisible(true);
  };

  const handleButton = () =>{
    const Button = document.getElementById('button');
    Button.classList.remove('hidden');
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Calculate Your Monthly Installment</h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="mb-8">
          <div className="mb-4">
            <label htmlFor="loanAmount" className="block text-gray-700">Loan Amount (INR)</label>
            <input
              type="number"
              id="loanAmount"
              name="loanAmount"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="interestRate" className="block text-gray-700">Interest Rate (%)</label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              placeholder="Enter interest rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div> */}
          {/* <div className="mb-4">
            <label htmlFor="tenureMonths" className="block text-gray-700">Tenure in Months</label>
            <input
              type="number"
              id="tenureMonths"
              name="tenureMonths"
              placeholder="Enter tenure in months"
              value={tenureMonths}
              onChange={(e) => setTenureMonths(e.target.value)}
              className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div> */}

          <div className="mb-4">
        <label htmlFor="tenureMonths" className="block text-gray-700">Tenure in Months</label>
        <select
          id="tenureMonths"
          name="tenureMonths"
          value={tenureMonths}
          onChange={(e) => setTenureMonths(e.target.value)}
          className="form-select mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="">Select tenure in months</option>
          <option value="12">12 months</option>
          <option value="24">24 months</option>
          <option value="36">36 months</option>
        </select>
      </div>
          {/* <button
            type="button"
            onClick={() => {
              calculateLoan();
              handleButton();
          }} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calculate
          </button> */}
        </form>
        {/* {resultVisible && (
          <div className="border border-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Loan Details</h2>
            <div dangerouslySetInnerHTML={{ __html: loanDetails }}></div>
          </div>
        )} */}

      <button id='button'
            type="button" 
            className="   my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 " onClick={handleContinue}
          >
            continue
          </button>
      </div>
     
    </div>
  );
}

export default LoanCalculator;
