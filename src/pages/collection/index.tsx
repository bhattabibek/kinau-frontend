import ProductCard from "@/components/ui/card/product-card";
import React from "react";

const Collection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow">
          {/* Brand */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Brand</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Brand 1
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Brand 2
              </label>
            </div>
          </div>

          {/* Color */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Color</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Red
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Blue
              </label>
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Size</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Small
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Large
              </label>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Price Range
            </h2>
            <div className="flex justify-between text-sm text-gray-600 mb-3">
              <span id="slider-min">RS 5,000</span>
              <span id="slider-max">RS 100,000</span>
            </div>

            <div className="relative w-full h-1 bg-gray-200 rounded">
              <input
                type="range"
                min="0"
                max="200000"
                value="5000"
                className="absolute w-full h-1 appearance-none bg-transparent accent-indigo-400 "
                id="range-min"
              />
              <input
                type="range"
                min="0"
                max="200000"
                value="100000"
                className="absolute w-full h-1 appearance-none bg-transparent accent-indigo-400"
                id="range-max"
              />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Collection;
