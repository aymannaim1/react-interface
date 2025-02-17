import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditDetailsPage() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Sample user data
  const users = [
    { id: 1, name: 'User One', accountCode: 'AC001', description: 'Description One', server: 'Server A' },
    { id: 2, name: 'User Two', accountCode: 'AC002', description: 'Description Two', server: 'Server B' }
  ];

  // Find the user based on userId
  const user = users.find(u => u.name === userId);

  // State for IP address and port with validation
  const [ipAddress, setIpAddress] = useState(user ? user.ip : '');
  const [port, setPort] = useState(user ? user.port : '');
  const [ipError, setIpError] = useState('');
  const [portError, setPortError] = useState('');

  // Origination Point state
  const [actAsOriginationPoint, setActAsOriginationPoint] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [destinationTransformation, setDestinationTransformation] = useState('');
  const [sourceTransformation, setSourceTransformation] = useState('');
  const [capacity, setCapacity] = useState('');

  // Validation functions
  const validateIpAddress = (ip) => {
    const ipPattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipPattern.test(ip);
  };

  const validatePort = (port) => {
    const portNumber = parseInt(port, 10);
    return !isNaN(portNumber) && portNumber > 0 && portNumber <= 65535;
  };

  useEffect(() => {
    if (ipAddress && !validateIpAddress(ipAddress)) {
      setIpError('Invalid IP address format');
    } else {
      setIpError('');
    }
  }, [ipAddress]);

  useEffect(() => {
    if (port && !validatePort(port)) {
      setPortError('Port must be between 1 and 65535');
    } else {
      setPortError('');
    }
  }, [port]);

  // Sample server options
  const servers = ['Server A', 'Server B', 'Server C'];

  return (
    <div className="p-5 max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold mb-5">Edit Details for {user ? user.name : 'User Not Found'}</h1>

      {user ? (
        <div className="space-y-6">
          {/* Current User Section */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Current User</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <div className="p-2 bg-gray-100 rounded">{user.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Account Code</label>
                <div className="p-2 bg-gray-100 rounded">{user.accountCode}</div>
              </div>
            </div>
          </div>

          {/* General Section */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">General</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Account Code</label>
                <input
                  type="text"
                  defaultValue={user.accountCode}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  defaultValue={user.description}
                  className="w-full p-2 border rounded"
                  rows="3"
                />
              </div>
            </div>
          </div>

          {/* Network Settings Section */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Authentication</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">IP Address</label>
                <input
                  type="text"
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
                  className={`w-full p-2 border rounded ${ipError ? 'border-red-500' : 'border-gray-300'}`}
                />
                {ipError && <p className="text-red-500 text-sm mt-1">{ipError}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Port</label>
                <input
                  type="text"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  className={`w-full p-2 border rounded ${portError ? 'border-red-500' : 'border-gray-300'}`}
                />
                {portError && <p className="text-red-500 text-sm mt-1">{portError}</p>}
              </div>
            </div>
          </div>

          {/* Origination Point Section */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Origination Point</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Act as Origination Point</label>
                <select
                  value={actAsOriginationPoint ? 'Yes' : 'No'}
                  onChange={(e) => setActAsOriginationPoint(e.target.value === 'Yes')}
                  className="w-full p-2 border rounded"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Active</label>
                <select
                  value={isActive ? 'Yes' : 'No'}
                  onChange={(e) => setIsActive(e.target.value === 'Yes')}
                  className="w-full p-2 border rounded"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Destination Transformation</label>
                <input
                  type="text"
                  value={destinationTransformation}
                  onChange={(e) => setDestinationTransformation(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Source Transformation</label>
                <input
                  type="text"
                  value={sourceTransformation}
                  onChange={(e) => setSourceTransformation(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Capacity</label>
                <input
                  type="text"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Server Section */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Server</h2>
            <select
              defaultValue={user.server}
              className="w-full p-2 border rounded"
            >
              {servers.map((server, index) => (
                <option key={index} value={server}>
                  {server}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 ${
                ipError || portError ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              } text-white rounded`}
              disabled={!!ipError || !!portError}
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}

export default EditDetailsPage;
