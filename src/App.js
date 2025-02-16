import { Routes, Route, Link } from 'react-router-dom';
import TestPage from './TestPage';

function App() {
  return (
    <div className="text-center min-h-screen bg-gray-100 p-5">
      <div className="max-w-[1200px] mx-auto p-5 bg-white rounded-lg shadow-sm">
        <nav>
          <Link to="/" className="mx-2.5 px-4 py-2 no-underline text-gray-700 rounded transition-colors hover:bg-gray-100">Home</Link>
          <Link to="/test" className="mx-2.5 px-4 py-2 no-underline text-gray-700 rounded transition-colors hover:bg-gray-100">Test Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="mt-5">
              <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
              <table className="w-full border-collapse my-5">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left bg-gray-50 font-semibold">ID</th>
                    <th className="px-3 py-2 text-left bg-gray-50 font-semibold">Name</th>
                    <th className="px-3 py-2 text-left bg-gray-50 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-2 border-b">1</td>
                    <td className="px-3 py-2 border-b">Item One</td>
                    <td className="px-3 py-2 border-b">Active</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-2 border-b">2</td>
                    <td className="px-3 py-2 border-b">Item Two</td>
                    <td className="px-3 py-2 border-b">Inactive</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-2 border-b">3</td>
                    <td className="px-3 py-2 border-b">Item Three</td>
                    <td className="px-3 py-2 border-b">Active</td>
                  </tr>
                </tbody>
              </table>
              <Link to="/test" className="inline-block mt-5 px-5 py-2.5 bg-blue-500 text-white no-underline rounded transition-colors hover:bg-blue-600">
                Go to Test Page
              </Link>
            </div>
          } />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
