import { useState } from "react"

const Contact = () => {
    
  const [formType, setFormType] = useState('track'); // 'track' or 'queries'

  const handleQueriesClick = () => {
    setFormType('queries');
  };

  const handleTrackClick = () => {
    setFormType('track');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-br from-blue-500 to-brown-500 p-8 rounded-lg shadow-lg">
          <div className="flex justify-between mb-6">
            <button
              id="queriesBtn"
              onClick={handleQueriesClick}
              className={`px-4 py-2 rounded ${formType === 'queries' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} font-bold`}
            >
              Queries
            </button>
            <button
              id="trackBtn"
              onClick={handleTrackClick}
              className={`px-4 py-2 rounded ${formType === 'track' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} font-bold`}
            >
              Track Application
            </button>
          </div>
          <div id="queriesForm" className={`form-content ${formType === 'queries' ? '' : 'hidden'}`}>
            <h1 className="text-2xl font-bold mb-4">Contact Us - Queries</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full px-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-700">Submit</button>
            </form>
          </div>
          <div id="trackForm" className={`form-content ${formType === 'track' ? '' : 'hidden'}`}>
            <h1 className="text-2xl font-bold mb-4">Contact Us - Track Application</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="applicationId" className="block text-sm font-bold mb-2">Application ID</label>
                <input type="text" id="applicationId" name="applicationId" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full px-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-700">Track</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact