import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Slim Fit T-Shirt",
    brand: "Nike",
    category: "T-Shirts",
    price: 1999,
    image:
      "https://via.placeholder.com/200x250.png?text=Slim+Fit+T-Shirt",
  },
  {
    id: 2,
    name: "Running Shoes",
    brand: "Adidas",
    category: "Shoes",
    price: 4999,
    image: "https://via.placeholder.com/200x250.png?text=Running+Shoes",
  },
  {
    id: 3,
    name: "Men’s Watch",
    brand: "Fossil",
    category: "Accessories",
    price: 8999,
    image: "https://via.placeholder.com/200x250.png?text=Men's+Watch",
  },
  {
    id: 4,
    name: "Denim Jacket",
    brand: "Levis",
    category: "Jackets",
    price: 5999,
    image: "https://via.placeholder.com/200x250.png?text=Denim+Jacket",
  },
];

const categories = ["T-Shirts", "Shoes", "Jackets", "Accessories"];
const brands = ["Nike", "Adidas", "Levis", "Fossil"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      product.price <= maxPrice
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Men’s Collection</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Filter Sidebar */}
        <div className="md:col-span-1 bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Category Filter */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Category</h3>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Brand</h3>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option value="">All</option>
              {brands.map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Max Price: Rs. {maxPrice}</h3>
            <input
              type="range"
              min="500"
              max="10000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.brand}</p>
                <p className="text-primary font-bold mt-2">Rs. {product.price}</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
