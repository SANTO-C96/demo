import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';


const BasicDetails = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [incomeError, setIncomeError] = useState('');
  const [panError, setPanError] = useState('');
  const panInput = document.getElementById('pan');
  const incomeInput = document.getElementById('income');
  
  
  
  const handleSubmit = (e) => {
    
    e.preventDefault();

    if (isNaN(incomeInput.value.trim())) {
      setIncomeError("Please enter a valid income");
      return;
    }

    // Validate form fields
    if (!name || !dob || !pincode || !city) {
      setErrorMessage('Please fill in all fields');
      return;
    }
// Validate PAN number
if (panInput.value.trim().length !== 10) {
  setPanError("Please enter a valid 10-digit PAN number");
  setPanError('');
  return;
}
setIncomeError('');
    // Here you can proceed with form submission or any other action
    console.log('Form submitted successfully!');
  };

  const handleSubmit2 = () =>{
    navigate('/ongoing');
  }


  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Basic details</h2>
      <form onSubmit={handleSubmit} id="loan-form" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            <i className="fas fa-solid fa-user mr-1"></i>Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errorMessage && <div className="error-message text-red-500 text-sm">{errorMessage}</div>}
        </div>
        
        <div>
          <label htmlFor="dob" className="block text-sm font-semibold mb-1">
            <i className="fas fa-solid fa-calendar-alt mr-1"></i>Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pan" className="block text-sm font-semibold mb-1"><i className="fas fa-id-card mr-1"></i>PAN Number:</label>
          <div className='flex items-center'>
          <input type="text" id="pan" name="pan" required className="block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <div className="text-red-600 text-xs mt-1">{panError}</div>
          <button type="button" id="send-otp-btn"  className=" ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Verify Pan</button>
          </div>
          
        </div>

         <div className="mb-4">
          <label htmlFor="income" className="block text-sm font-semibold mb-1">Income(INR):</label>
          <input type="text" id="income" name="income" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <div className="text-red-600 text-xs mt-1">{incomeError}</div>
        </div>

        <div>
          <label htmlFor="pincode" className="block text-sm font-semibold mb-1">
            <i className="fas fa-solid fa-map-pin mr-1"></i>Pincode:
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
         
        <div>
          <label htmlFor="state" className="block text-sm font-semibold mb-1">
            <i className="fas fa-solid fa-map-marker-alt mr-1"></i>Loan State:
          </label>
          <select
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select State</option>
       <option value="Andhra Pradesh">Andhra Pradesh</option>
       <option value="Arunachal Pradesh">Arunachal Pradesh</option>
       <option value="Assam">Assam</option>
       <option value="Bihar">Bihar</option>
      <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
     </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-semibold mb-1">
            <i className="fas fa-solid fa-map-marker-alt mr-1"></i>Loan City:
          </label>
          <select
    id="city"
    name="city"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    required
    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
>
    <option value="" disabled>Select City</option>
    {/* <!-- Andaman and Nicobar Islands --> */}
    <option value="Port Blair">Port Blair</option>
    
    {/* <!-- Andhra Pradesh --> */}
    <option value="Visakhapatnam">Visakhapatnam</option>
    <option value="Vijayawada">Vijayawada</option>
    <option value="Guntur">Guntur</option>
    
    {/* <!-- Arunachal Pradesh --> */}
    <option value="Itanagar">Itanagar</option>
    
    {/* <!-- Assam --> */}
    <option value="Guwahati">Guwahati</option>
    <option value="Dibrugarh">Dibrugarh</option>
    <option value="Silchar">Silchar</option>
    
    {/* <!-- Bihar --> */}
    <option value="Patna">Patna</option>
    <option value="Gaya">Gaya</option>
    <option value="Bhagalpur">Bhagalpur</option>
    
    {/* <!-- Chandigarh --> */}
    <option value="Chandigarh">Chandigarh</option>
    
    {/* <!-- Chhattisgarh --> */}
    <option value="Raipur">Raipur</option>
    <option value="Bilaspur">Bilaspur</option>
    <option value="Bhilai">Bhilai</option>
    
    {/* <!-- Dadra and Nagar Haveli and Daman and Diu --> */}
    <option value="Daman">Daman</option>
    <option value="Diu">Diu</option>
    
    {/* <!-- Delhi --> */}
    <option value="Delhi">Delhi</option>
    
    {/* <!-- Goa --> */}
    <option value="Panaji">Panaji</option>
    <option value="Margao">Margao</option>
    
    {/* <!-- Gujarat --> */}
    <option value="Ahmedabad">Ahmedabad</option>
    <option value="Surat">Surat</option>
    <option value="Vadodara">Vadodara</option>
    
    {/* <!-- Haryana --> */}
    <option value="Gurgaon">Gurgaon</option>
    <option value="Faridabad">Faridabad</option>
    <option value="Panipat">Panipat</option>
    
    {/* <!-- Himachal Pradesh --> */}
    <option value="Shimla">Shimla</option>
    <option value="Manali">Manali</option>
    
    {/* <!-- Jammu and Kashmir --> */}
    <option value="Srinagar">Srinagar</option>
    <option value="Jammu">Jammu</option>
    
    {/* <!-- Jharkhand --> */}
    <option value="Ranchi">Ranchi</option>
    <option value="Jamshedpur">Jamshedpur</option>
    <option value="Dhanbad">Dhanbad</option>
    
    {/* <!-- Karnataka --> */}
    <option value="Bangalore">Bangalore</option>
    <option value="Mysore">Mysore</option>
    <option value="Hubli">Hubli</option>
    
    {/* <!-- Kerala --> */}
    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
    <option value="Kochi">Kochi</option>
    <option value="Kozhikode">Kozhikode</option>
    
    {/* <!-- Ladakh --> */}
    <option value="Leh">Leh</option>
    
    {/* <!-- Lakshadweep --> */}
    <option value="Kavaratti">Kavaratti</option>
    
    {/* <!-- Madhya Pradesh --> */}
    <option value="Bhopal">Bhopal</option>
    <option value="Indore">Indore</option>
    <option value="Jabalpur">Jabalpur</option>
    
    {/* <!-- Maharashtra --> */}
    <option value="Mumbai">Mumbai</option>
    <option value="Pune">Pune</option>
    <option value="Nagpur">Nagpur</option>
    
    {/* <!-- Manipur --> */}
    <option value="Imphal">Imphal</option>
    
    {/* <!-- Meghalaya --> */}
    <option value="Shillong">Shillong</option>
    
    {/* <!-- Mizoram --> */}
    <option value="Aizawl">Aizawl</option>
    
    {/* <!-- Nagaland --> */}
    <option value="Kohima">Kohima</option>
    
    {/* <!-- Odisha --> */}
    <option value="Bhubaneswar">Bhubaneswar</option>
    <option value="Cuttack">Cuttack</option>
    <option value="Puri">Puri</option>
    
    {/* <!-- Puducherry --> */}
    <option value="Puducherry">Puducherry</option>
    
    {/* <!-- Punjab --> */}
    <option value="Amritsar">Amritsar</option>
    <option value="Ludhiana">Ludhiana</option>
    <option value="Jalandhar">Jalandhar</option>
    
    {/* <!-- Rajasthan --> */}
    <option value="Jaipur">Jaipur</option>
    <option value="Jodhpur">Jodhpur</option>
    <option value="Udaipur">Udaipur</option>
    
    {/* <!-- Sikkim --> */}
    <option value="Gangtok">Gangtok</option>
    
    {/* <!-- Tamil Nadu --> */}
    <option value="Chennai">Chennai</option>
    <option value="Coimbatore">Coimbatore</option>
    <option value="Madurai">Madurai</option>
    
    {/* <!-- Telangana --> */}
    <option value="Hyderabad">Hyderabad</option>
    <option value="Warangal">Warangal</option>
    
    {/* <!-- Tripura --> */}
    <option value="Agartala">Agartala</option>
    
    {/* <!-- Uttar Pradesh --> */}
    <option value="Lucknow">Lucknow</option>
    <option value="Kanpur">Kanpur</option>
    <option value="Varanasi">Varanasi</option>
    
    {/* <!-- Uttarakhand --> */}
    <option value="Dehradun">Dehradun</option>
    <option value="Haridwar">Haridwar</option>
    
    {/* <!-- West Bengal --> */}
    <option value="Kolkata">Kolkata</option>
    <option value="Howrah">Howrah</option>
    <option value="Durgapur">Durgapur</option>
</select>

        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSubmit2}
          />
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
