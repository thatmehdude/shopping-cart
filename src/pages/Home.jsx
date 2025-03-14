import shipI from "../assets/ships/MoonBreakerr.png"; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to The Reaper's Personal Armoury</h1>
        <p className="text-xl text-gray-600">Discover amazing Moon Breakers, Dreadnoughts at great prices</p>
      </div>
      
      <div className="bg-indigo-100 rounded-lg p-8 shadow-md mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">Shop the Latest Planet desroying weapons, produced by Sun Industries</h2>
            <p className="text-gray-700 mb-6">Browse our wide selection of products, from ships to missiles, legion gear and more.</p>
            <Link 
              to="/products" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-block"
            >
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={shipI} 
                alt="Featured product" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Free Shipping</h3>
          <p className="text-gray-600">On orders over 5 billion credits</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Payment</h3>
          <p className="text-gray-600">Safe & reliable checkout</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Returns</h3>
          <p className="text-gray-600">30 day money back guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Home;