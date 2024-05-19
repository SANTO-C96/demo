import React, { useState } from 'react';

function SetNewPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate password format
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      setPasswordError("Password must contain at least 8 characters with one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*).");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match. Please re-enter.");
      setNewPassword('');
      setConfirmNewPassword('');
      return;
    }

    // Show success message
    setSuccessMessageVisible(true);

    // You can proceed with password update logic here
    console.log('New password set successfully:', newPassword);
    // You can redirect or show a success message here
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <div className="mb-4">
          <h5 className="text-lg font-semibold">Set New Password</h5>
          <p className="text-sm text-gray-700 mb-2">Enter your new password below.</p>
        </div>
        <form onSubmit={handleSubmit} id="new-password-form">
          <div className="mb-3">
            <label htmlFor="new-password" className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="new-password"
              placeholder="Enter New Password"
              required
            />
            <span id="password-error" className="text-xs text-red-500">{passwordError}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-new-password" className="block text-sm font-medium mb-1">Confirm New Password</label>
            <input
              type="password"
              id="confirm-new-password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="confirm-new-password"
              placeholder="Confirm New Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              id="set-new-password"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Set New Password
            </button>
          </div>
          {successMessageVisible && (
            <div id="success-message" className="text-green-500 font-semibold">New password set successfully!</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SetNewPasswordForm;
