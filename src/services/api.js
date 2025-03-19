// src/services/api.js
const API_URL = 'https://fakestoreapi.com';
const API_TIMEOUT = 5000; // 1.5 seconds timeout before showing fallback data

// Get all products
export const getProducts = async () => {
  try {
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timed out')), API_TIMEOUT)
    );
    
    // Create the fetch promise
    const fetchPromise = fetch(`${API_URL}/products`).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
    
    // Race the fetch against the timeout
    const data = await Promise.race([fetchPromise, timeoutPromise]);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return sample data if API fails
    return [
      {
        id: 1,
        title: "Moon Breaker Ship",
        price: 999999.99,
        category: "ships",
        image: "/api/placeholder/400/320",
        description: "The most powerful ship in the Republic fleet"
      },
      {
        id: 2,
        title: "Pulserifle X-90",
        price: 5999.99,
        category: "weapons",
        image: "/api/placeholder/400/320",
        description: "Standard issue Republic forces weapon"
      },
      {
        id: 3, 
        title: "Dreadnought Class Destroyer",
        price: 2500000.00,
        category: "ships",
        image: "/api/placeholder/400/320",
        description: "Heavy class battle cruiser with maximum firepower"
      },
      {
        id: 4,
        title: "Razor Armor",
        price: 15000.00,
        category: "gear",
        image: "/api/placeholder/400/320",
        description: "Elite armor for special operations"
      }
    ];
  }
};

// Get all product categories
export const getCategories = async () => {
  try {
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timed out')), API_TIMEOUT)
    );
    
    // Create the fetch promise
    const fetchPromise = fetch(`${API_URL}/products/categories`).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
    
    // Race the fetch against the timeout
    const data = await Promise.race([fetchPromise, timeoutPromise]);
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Return sample categories if API fails
    return ["ships", "weapons", "gear"];
  }
};

// Get a single product by ID with similar timeout pattern
export const getProductById = async (id) => {
  try {
    // Similar timeout implementation
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timed out')), API_TIMEOUT)
    );
    
    const fetchPromise = fetch(`${API_URL}/products/${id}`).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
    
    return await Promise.race([fetchPromise, timeoutPromise]);
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    // Return a sample product if API fails
    return {
      id: id,
      title: `Sample Product ${id}`,
      price: 999.99,
      category: "ships",
      image: "/api/placeholder/400/320",
      description: "Sample product description"
    };
  }
};

// Get products by category with similar timeout pattern
export const getProductsByCategory = async (category) => {
  try {
    // Using the same timeout pattern
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timed out')), API_TIMEOUT)
    );
    
    const fetchPromise = fetch(`${API_URL}/products/category/${category}`).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
    
    return await Promise.race([fetchPromise, timeoutPromise]);
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    // Return filtered sample products if API fails
    const sampleProducts = [
      {
        id: 1,
        title: "Moon Breaker Ship",
        price: 999999.99,
        category: "ships",
        image: "/api/placeholder/400/320",
        description: "The most powerful ship in the Republic fleet"
      },
      {
        id: 2,
        title: "Pulserifle X-90",
        price: 5999.99,
        category: "weapons",
        image: "/api/placeholder/400/320",
        description: "Standard issue Republic forces weapon"
      },
      {
        id: 3, 
        title: "Dreadnought Class Destroyer",
        price: 2500000.00,
        category: "ships",
        image: "/api/placeholder/400/320",
        description: "Heavy class battle cruiser with maximum firepower"
      },
      {
        id: 4,
        title: "Razor Armor",
        price: 15000.00,
        category: "gear",
        image: "/api/placeholder/400/320",
        description: "Elite armor for special operations"
      }
    ];
    return sampleProducts.filter(p => p.category === category);
  }
};

export default {
  getProducts,
  getProductById,
  getCategories,
  getProductsByCategory,
};