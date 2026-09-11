import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1,999",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2,499",
      category: "Wearables",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: "₹999",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "₹1,499",
      category: "Electronics",
    },
    {
      id: 5,
      name: "Fitness Tracker",
      price: "₹1,299",
      category: "Wearables",
    },
    {
      id: 6,
      name: "Power Bank",
      price: "₹799",
      category: "Accessories",
    },
  ];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

     
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-pink-600">
            Divine Grace
          </h1>

         
          <div className="flex items-center gap-2">
            <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-3 py-2 rounded-lg">
              Login
            </button>

            <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-3 py-2 rounded-lg">
              Sign Up
            </button>
          </div>

        </div>
      </nav>

   
      <section className="text-center px-6 py-16">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to Divine Grace
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Find the best products at affordable prices.
        </p>

      </section>

     
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-8 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
        /> 

        <h2 className="text-3xl font-bold mb-8">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >

              
              <div className="h-40 bg-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-pink-600 font-semibold">
                  Product Image
                </span>
              </div>

            
              <p className="text-sm text-gray-500 mt-5">
                {product.category}
              </p>

              
              <h3 className="text-xl font-bold mt-2">
                {product.name}
              </h3>

              
              <p className="text-2xl font-bold text-pink-600 mt-3">
                {product.price}
              </p>

              <button className="w-full mt-5 bg-pink-600 hover:bg-pink-700 transition text-white py-3 rounded-lg font-semibold">
                Add to Cart
              </button>

            </div>
          ))}

        </div>

      </section>

     
      <footer className="bg-pink-600 text-white text-center py-6 mt-16">
        <p>&copy; 2026 Divine Grace. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;