import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HouseOwnershipForm = () => {
    const [ownershipType, setOwnershipType] = useState('own');
    const [formData, setFormData] = useState({
        currentAddressLine1: '',
        currentAddressLine2: '',
        currentPincode: '',
        currentHomeStayDuration: '',
        permanentAddressLine1: '',
        permanentAddressLine2: '',
        permanentPincode: '',
        permanentHomeStayDuration: ''
    });
   const navigate = useNavigate();
    const toggleAddressSection = (type) => {
        setOwnershipType(type);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        // You can handle form submission here
        const resultData = {
            ownershipType,
            ...formData
        };
        console.log(resultData);
        // Reset form data
        setFormData({
            currentAddressLine1: '',
            currentAddressLine2: '',
            currentPincode: '',
            currentHomeStayDuration: '',
            permanentAddressLine1: '',
            permanentAddressLine2: '',
            permanentPincode: '',
            permanentHomeStayDuration: ''
        });
        setOwnershipType('');
    };

    const copyCurrentAddress = () => {
        // Implement logic to copy current address to permanent address
        setFormData({
            ...formData,
            permanentAddressLine1: formData.currentAddressLine1,
            permanentAddressLine2: formData.currentAddressLine2,
            permanentPincode: formData.currentPincode,
            permanentHomeStayDuration: formData.currentHomeStayDuration
        });
    };

    const handleNext= () =>{
     navigate('/officedetails');
    }

    return (
        <div className="container mx-auto py-8">
            <form id="houseOwnershipForm" className="mb-8">
                <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="heading-lg text-xl font-semibold mb-4"><b>Choose Your Ownership!</b></h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Select House Ownership</label>
                        <div className="inline-flex items-center">
                            <input
                                type="radio"
                                id="ownHouse"
                                name="houseOwnership"
                                value="own"
                                className="form-radio h-5 w-5 text-blue-600"
                                checked={ownershipType === 'own'}
                                onClick={() => toggleAddressSection('own')}
                            />
                            <label htmlFor="ownHouse" className="ml-2">Own</label>
                        </div>
                        <div className="inline-flex items-center ml-3">
                            <input
                                type="radio"
                                id="rentedHouse"
                                name="houseOwnership"
                                value="rented"
                                className="form-radio h-5 w-5 text-blue-600"
                                checked={ownershipType === 'rented'}
                                onClick={() => toggleAddressSection('rented')}
                            />
                            <label htmlFor="rentedHouse" className="ml-2">Rented</label>
                        </div>

                        <div className="inline-flex items-center ml-3">
                            <input
                                type="radio"
                                id="parentalhouse"
                                name="houseOwnership"
                                value="parantelhouse"
                                checked={ownershipType === 'parentalhouse'}
                                className="form-radio h-5 w-5 text-blue-600"
                                onClick={() => toggleAddressSection('parentalhouse')}
                            />
                            <label htmlFor="rentedHouse" className="ml-2">Parental</label>
                        </div>
                    </div>
                    {ownershipType && (
                        <div id="addressSection">
                            {ownershipType === 'own' ? (
                                <div id="ownAddressSection">
                                    <div className="mb-4">
                                        <label htmlFor="currentAddressLine1" className="block text-gray-700"><i className="fas fa-home mr-1"></i>Current Address Line 1</label>
                                        <input
                                            type="text"
                                            id="currentAddressLine1"
                                            name="currentAddressLine1"
                                            placeholder="Enter current address line 1"
                                            className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
                                            onChange={handleChange}
                                            value={formData.currentAddressLine1}
                                        />
                                    </div>
                                    {/* More input fields for own address */}
             <div>
  <div className="mb-4">
    <label htmlFor="currentAddressLine2" className="block text-gray-700"><i className="fas fa-home mr-1" />Current Address Line 2/Landmark</label>
    <input type="text" id="currentAddressLine2" name="currentAddressLine2" placeholder="Enter current address line 2 or landmark" className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" onChange={handleChange}
                                            value={formData.currentAddressLine2} />
  </div>
  <div className="mb-4">
    <label htmlFor="currentPincode" className="block text-gray-700"><i className="fas fa-solid fa-map-pin mr-1" />Pincode</label>
    <input type="text" id="currentPincode" name="currentPincode" placeholder="Enter pincode" className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" onChange={handleChange}
                                            value={formData.currentPincode}/>
  </div>
  <div className="mb-4">
    <label htmlFor="currentHomeStayDuration" className="block text-gray-700"><i className="fas fa-lock mr-1" />Home Stay Duration</label>
    <select id="currentHomeStayDuration" name="currentHomeStayDuration" className="form-select mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" onChange={handleChange}
                                            value={formData.currentHomeStayDuration} >
      <option value>Select Home Stay Duration</option>
      <option value="more_than_2_years">More than 2 years</option>
      <option value="less_than_2_years"> Less than 2 years</option>
      <option value="more_than_5_years">More than 5 years</option>
      <option value="less_than_5_years">Less than 5 years</option>
      <option value="more_than_5_years">More than 8 years</option>
      <option value="less_than_8_years">Less than 8 years</option>
    </select>
  </div>
</div>

                                </div>
                            ) : (
                                <div id="rentedSection">
                                    <div className="mb-4">
                                        <label htmlFor="rentedAddressLine1" className="block text-gray-700"><i className="fas fa-home mr-1"></i>Current Address Line 1</label>
                                        <input
                                            type="text"
                                            id="rentedAddressLine1"
                                            name="rentedAddressLine1"
                                            placeholder="Enter rented address line 1"
                                            className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
                                            onChange={handleChange}
                                            value={formData.rentedAddressLine1}
                                        />
                                    </div>
                                    {/* More input fields for rented address */}
            <div>
  <div className="mb-4">
    <label htmlFor="rentedAddressLine2" className="block text-gray-700"><i className="fas fa-home mr-1" />Current Address Line 2/Landmark</label>
    <input type="text" id="rentedAddressLine2" name="rentedAddressLine2" placeholder="Enter rented address line 2" className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" />
  </div>
  <div className="mb-4">
    <label htmlFor="currentPincode" className="block text-gray-700"><i className="fas fa-solid fa-map-pin mr-1" />Pincode</label>
    <input type="text" id="currentPincode" name="currentPincode" placeholder="Enter pincode" className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" />
  </div>
  <div className="mb-4">
    <label htmlFor="monthlyrent" className="block text-gray-700"><i className="fas fa-money-bill-wave mr-1" />Monthly rent</label>
    <input type="text" id="monthlyrent" name="monthlyrent" placeholder="Enter your monthly rent" className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" />
  </div>
  <div className="mb-4">
    <label htmlFor="rentedHomeStayDuration" className="block text-gray-700"><i className="fas fa-lock mr-1" />Home Stay Duration</label>
    <select id="rentedHomeStayDuration" name="rentedHomeStayDuration" className="form-select mt-1 block w-full border border-gray-300 rounded-md px-4 py-2">
      <option value>Select Home Stay Duration</option>
      <option value="more_than_2_years">More than 2 years</option>
      <option value="less_than_2_years">Less than 2 years</option>
      <option value="more_than_5_years">More than 5 years</option>
      <option value="less_than_5_years">Less than 5 years</option>
      <option value="more_than_8_years">More than 8 years</option>
      <option value="less_than_8_years">Less than 8 years</option>
    </select>
  </div>
</div>

                                </div>
                            )}
                            {/* Additional address input fields */}
                        </div>
                    )}
                    <div className="mb-4">
                        <input
                            type="checkbox"
                            id="sameAsCurrentAddress"
                            onChange={copyCurrentAddress}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label htmlFor="sameAsCurrentAddress" className="ml-2"><b>Permanent Address Same as Current Address</b></label>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="permanentAddressLine1" className="block text-gray-700"><i className="fas fa-home mr-1"></i>Permanent Address Line 1</label>
                        <input
                            type="text"
                            id="permanentAddressLine1"
                            name="permanentAddressLine1"
                            placeholder="Enter permanent address line 1"
                            className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
                            onChange={handleChange}
                            value={formData.permanentAddressLine1}
                        />
                    </div>
                    {/* More input fields for permanent address */}
                   <div>
  <div className="mb-4">
    <label htmlFor="permanentAddressLine2" className="block text-gray-700"><i className="fas fa-home mr-1" />Permanent Address Line 2/Landmark</label>
    <input type="text" id="permanentAddressLine2" name="permanentAddressLine2" placeholder="Enter permanent address line 2 or landmark" className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" onChange={handleChange}
                            value={formData.permanentAddressLine2} />
  </div>
  <div className="mb-4">
    <label htmlFor="permanentPincode" className="block text-gray-700"><i className="fas fa-solid fa-map-pin mr-1" />Pincode</label>
    <input type="text" id="permanentPincode" name="permanentPincode" placeholder="Enter pincode" className="form-input mt-1 block w-full border border-gray-300 rounded-md px-4 py-2" onChange={handleChange}
                            value={formData.permanentPincode }/>
  </div>
</div>

                    <button
                        type="button"
                        onClick={() => {
                            handleSubmit();
                            handleNext();
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div id="result" className="hidden border border-gray-300 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Selected House Ownership</h2>
                <div id="ownershipData"></div>
            </div>
        </div>
    );
};

export default HouseOwnershipForm;
