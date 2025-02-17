import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditPage() {
  const { userId } = useParams();

  // Sample user data with multiple entries
  const users = [
    { id: 1, name: 'User One', description: 'Description for User One', ip: '192.168.1.1' },
    { id: 2, name: 'User One', description: 'Another description for User One', ip: '192.168.1.2' },
    { id: 3, name: 'User Two', description: 'Description for User Two', ip: '192.168.1.3' },
    { id: 4, name: 'User Two', description: 'Another description for User Two', ip: '192.168.1.4' },
    { id: 5, name: 'User Three', description: 'Description for User Three', ip: '192.168.1.5' }
  ];

  // Find the users based on userId
  const userEntries = users.filter(u => u.name === userId);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Edit Page for {userEntries.length > 0 ? userId : 'User Not Found'}</h1>
      {userEntries.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-2 text-left font-semibold">ID</th>
              <th className="px-3 py-2 text-left font-semibold">Description</th>
              <th className="px-3 py-2 text-left font-semibold">IP Address</th>
              <th className="px-3 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userEntries.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 border-b">
                <td className="px-3 py-2">{user.id}</td>
                <td className="px-3 py-2">{user.description}</td>
                <td className="px-3 py-2">{user.ip}</td>
                <td className="px-3 py-2 space-x-2">
                  <Link to={`/edit-details/${user.name}`} className="text-blue-500 hover:text-blue-700">Edit</Link>
                  <button className="text-yellow-500 hover:text-yellow-700">Hide</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}

export default EditPage;
