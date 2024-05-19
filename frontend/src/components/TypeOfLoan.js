import React from 'react'
import Rickshaw from '../images/auto-rikshaw.png'

const TypeOfLoan = () => {
  return (
    <div>
<div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">You are looking for:</h2>
  <form action="#" method="post">
    <div className="flex items-center mb-2">
      <input type="radio" id="electric_3_wheeler_loan" name="loan_type" defaultValue="electric_3_wheeler_loan" className="mr-2" />
      <label htmlFor="electric_3_wheeler_loan" className="flex items-center">
        <img src={Rickshaw} alt="" className='w-5 mr-2' /> {/* Font Awesome icon for Electric 3 Wheeler Loan */}
        Electric 3 Wheeler Loan
      </label>
    </div>
    <div className="flex items-center mb-2">
      <input type="radio" id="electric_2_wheeler_loan" name="loan_type" defaultValue="electric_2_wheeler_loan" className="mr-2" />
      <label htmlFor="electric_2_wheeler_loan" className="flex items-center">
        <i className="fas fa-motorcycle mr-2"></i> {/* Font Awesome icon for Electric 2 Wheeler Loan */}
        Electric 2 Wheeler Loan
      </label>
    </div>
    <div className="flex items-center mb-2">
      <input type="radio" id="ev_ancillary_loan" name="loan_type" defaultValue="ev_ancillary_loan" className="mr-2" />
      <label htmlFor="ev_ancillary_loan" className="flex items-center">
        <i className="fas fa-industry mr-2"></i> {/* Font Awesome icon for EV Ancillary Loan */}
        EV Ancillary Loan
      </label>
    </div>
    <div className="mt-4">
      <a href="/typeofloanholder" className="block w-full bg-blue-500 text-white py-2 rounded-lg text-center hover:bg-blue-600">Continue</a>
    </div>
  </form>
</div>

    </div>
  )
}

export default TypeOfLoan