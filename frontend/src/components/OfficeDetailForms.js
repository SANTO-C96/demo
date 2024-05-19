import React from 'react';
import { useNavigate } from 'react-router-dom';

function OfficeDetailsForm() {
    const navigate = useNavigate();
    const handleContinue= () =>{
        navigate('/salaryslip');
       }
   
    return (
        <div className="container mx-auto max-w-lg p-6 bg-white rounded-lg shadow">
            <h1 className="heading-lg text-xl font-semibold mb-4"><b>Office Details!</b></h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="address_line_1" className="block text-gray-700 font-bold mb-2"><i className="fas fa-home mr-1"></i>Office Address Line 1:</label>
                    <input type="text" id="address_line_1" name="address_line_1" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address_line_2" className="block text-gray-700 font-bold mb-2"><i className="fas fa-home mr-1"></i>Office Address Line 2/Landmark:</label>
                    <input type="text" id="address_line_2" name="address_line_2" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="pincode" className="block text-gray-700 font-bold mb-2"><i className="fas fa-solid fa-map-pin mr-1"></i>Pincode:</label>
                    <input type="text" id="pincode" name="pincode" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="employment_duration" className="block text-gray-700 font-bold mb-2"><i className="fas fa-calendar-alt mr-1"></i>Employment Duration:</label>
                    <select id="employment_duration" name="employment_duration" className="form-select mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" required>
                        <option value="">Select employment duration</option>
                        <option value="more_than_2_years">More than 2 years</option>
                        <option value="less_than_2_years">Less than 2 years</option>
                        <option value="more_than_5_years">More than 5 years</option>
                        <option value="less_than_5_years">Less than 5 years</option>
                        <option value="more_than_5_years">More than 8 years</option>
                        <option value="less_than_8_years">Less than 8 years</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="work_experience" className="block text-gray-700 font-bold mb-2"><i className="fas fa-briefcase"></i> Work Experience:</label>
                    <select id="work_experience" name="work_experience" className="form-select mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" required>
                        <option value="">Select your total work experience</option>
                        <option value="more_than_2_years">More than 2 years</option>
                        <option value="less_than_2_years">Less than 2 years</option>
                        <option value="more_than_5_years">More than 5 years</option>
                        <option value="less_than_5_years">Less than 5 years</option>
                        <option value="more_than_5_years">More than 8 years</option>
                        <option value="less_than_8_years">Less than 8 years</option>
                    </select>
                </div>
                <div className="mt-6">
                    <button type="continue" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleContinue}>Continue</button>
                </div>
            </form>
        </div>
    );
}

export default OfficeDetailsForm;
