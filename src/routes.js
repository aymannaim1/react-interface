import { Routes, Route, Link } from 'react-router-dom';
import TestPage from './TestPage';
import EditPage from './EditPage';
import EditDetailsPage from './EditDetailsPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={
      <div className="mt-5">
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <table className="w-full border-collapse my-5">
          <thead>
            <tr>
              <th className="px-3 py-2 text-left bg-gray-50 font-semibold">User</th>
              <th className="px-3 py-2 text-left bg-gray-50 font-semibold">Origination Points</th>
              <th className="px-3 py-2 text-left bg-gray-50 font-semibold">Termination Points</th>
              <th className="px-3 py-2 text-left bg-gray-50 font-semibold">Edit</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'User One', origination: 1, termination: 50 },
              { name: 'User Two', origination: 20, termination: 15 },
              { name: 'User Three', origination: 30, termination: 25 },
            ].map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 py-2 border-b">{user.name}</td>
                <td className="px-3 py-2 border-b">{user.origination}</td>
                <td className="px-3 py-2 border-b">{user.termination}</td>
                <td className="px-3 py-2 border-b">
                  <Link to={`/edit/${user.name}`} className="text-blue-500 hover:text-blue-700">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/test" className="inline-block mt-5 px-5 py-2.5 bg-blue-500 text-white no-underline rounded transition-colors hover:bg-blue-600">
          Go to Test Page
        </Link>
      </div>
    } />
    <Route path="/test" element={<TestPage />} />
    <Route path="/edit/:userId" element={<EditPage />} />
    <Route path="/edit-details/:userId" element={<EditDetailsPage />} />
  </Routes>
);

export default AppRoutes;
