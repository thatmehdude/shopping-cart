import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-block"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;