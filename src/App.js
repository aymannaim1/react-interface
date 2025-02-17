import { Link } from 'react-router-dom';
import AppRoutes from './routes';

function App() {

  return (
    <div className="text-center min-h-screen bg-gray-100 p-5">
      <div className="max-w-[1200px] mx-auto p-5 bg-white rounded-lg shadow-sm">
        <nav>
          <Link to="/" className="mx-2.5 px-4 py-2 no-underline text-gray-700 rounded transition-colors hover:bg-gray-100">Home</Link>
          <Link to="/test" className="mx-2.5 px-4 py-2 no-underline text-gray-700 rounded transition-colors hover:bg-gray-100">Test Page</Link>
        </nav>
        <AppRoutes />
      </div>

    </div>
  );
}

export default App;
