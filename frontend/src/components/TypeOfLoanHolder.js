import React from 'react'

const TypeOfLoanHolder = () => {
  return (
    <div>
<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-center mb-4">Hello, Tell Us about yourself!</h1>
  <p className="text-lg text-gray-600 text-center mb-6">Choose your employment type:</p>
  <form className="space-y-4">
    <div className="flex items-center">
      <input type="radio" id="salaried" name="employment" className="form-radio text-blue-500" defaultChecked />
      <label htmlFor="salaried" className="ml-2 flex items-center">
        <span className="mr-2">
          <i className="fas fa-user-tie"></i> {/* Font Awesome icon for salaried */}
        </span>
        Salaried
      </label>
    </div>
    <div className="flex items-center">
      <input type="radio" id="self-employed" name="employment" className="form-radio text-blue-500" />
      <label htmlFor="self-employed" className="ml-2 flex items-center">
        <span className="mr-2">
          <i className="fas fa-user-alt"></i> {/* Font Awesome icon for self-employed */}
        </span>
        Self Employed/Business Owner
      </label>
    </div>
    <a href="/basic" class="block w-full bg-blue-500 text-white py-2 rounded-lg text-center hover:bg-blue-600">Continue</a>
  </form>
</div>
    </div>
  )
}

export default TypeOfLoanHolder