import { useState } from "react";

// Example CRUD components (tables + forms)
import ProductList from "@/components/admin/Product/ProductList";
import ProductForm from "@/components/admin/Product/ProductForm";

import CategoryList from "@/components/admin/Category/CategoryList";
import CategoryForm from "@/components/admin/Category/CategoryForm";

import VariantList from "@/components/admin/Variant/VariantList";
import VariantForm from "@/components/admin/Variant/VariantForm";

import SizeList from "@/components/admin/Size/SizeList";
import SizeForm from "@/components/admin/Size/SizeForm";

import ColorList from "@/components/admin/Color/ColorList";
import ColorForm from "@/components/admin/Color/ColorForm";
import MonthlyOrdersSalesChart from "../admin/Sales";

export interface EditingProduct {
  _id: string;
  name: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  brand: string;
  basePrice: string;
  mainImages: any[]; // or string[] if URLs
  tags: string[];
  weight: number;
}

export interface EditingCategory {
  id: string;
  name: string;
}
export interface EditingVariant {
  _id: string;
  product: string;
  color: string;
  size: string;
  sku: string;
  price: number;
  discountPrice: number;
  stock: number;
}

export interface EditingSize {
  _id: string;
  name: string;
  code: string;
  description: string;
}
export interface EditingColor {
  _id: string;
  name: string;
  hexCode: string;
}

export default function AdminDashboard() {
  // Toggle forms
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<EditingProduct | null>(
    null
  );

  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingCategory, setEditingCategory] =
    useState<EditingCategory | null>(null);

  const [showVariantForm, setShowVariantForm] = useState(false);
  const [editingVariant, setEditingVariant] = useState<EditingVariant | null>(
    null
  );

  const [showSizeForm, setShowSizeForm] = useState(false);
  const [editingSize, setEditingSize] = useState<EditingSize | null>(null);

  const [showColorForm, setShowColorForm] = useState(false);
  const [editingColor, setEditingColor] = useState<EditingColor | null>(null);

  const handleAddCategory = () => {
    setEditingCategory(null);
    setShowCategoryForm(!showCategoryForm);
  };
  const handleEditCategory = (category: { id: string; name: string }) => {
    setEditingCategory(category);
    setShowCategoryForm(true);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowProductForm(!showProductForm);
  };

  const handleEditProduct = (product: EditingProduct) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleAddSize = () => {
    setEditingSize(null);
    setShowSizeForm(!showSizeForm);
  };

  const handleEditSize = (size: EditingSize) => {
    setEditingSize(size);
    setShowSizeForm(true);
  };

  const handleAddColor = () => {
    setEditingColor(null);
    setShowColorForm(!showColorForm);
  };

  const handleEditColor = (color: EditingColor) => {
    setEditingColor(color);
    setShowColorForm(true);
  };

  const handleEditVariant = (variant: EditingVariant) => {
    setEditingVariant(variant);
    setShowVariantForm(true);
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto space-y-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <MonthlyOrdersSalesChart />

        {/* Products */}
        <div>
          <button
            onClick={handleAddProduct}
            className="group flex items-center justify-center gap-2 
                   bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold 
                   px-6 py-1 mb-2 rounded-full shadow-md
                   hover:from-green-600 hover:to-green-700
                   transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
          >
            <span className="text-lg font-bold transition-transform duration-200 group-hover:translate-x-1">
              +
            </span>
            {showProductForm ? "Close Product Form" : "Add Product"}
          </button>
          {showProductForm && <ProductForm initialData={editingProduct} />}
          <ProductList handleEditProduct={handleEditProduct} />
        </div>

        {/* Categories */}
        <div>
          <button
            onClick={handleAddCategory}
            className="group flex items-center justify-center gap-2 
                   bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold 
                   px-6 py-1 mb-2 rounded-full shadow-md
                   hover:from-green-600 hover:to-green-700
                   transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
          >
            <span className="text-lg font-bold transition-transform duration-200 group-hover:translate-x-1">
              +
            </span>
            {showCategoryForm ? "Close Category Form" : "Add Category"}
          </button>
          {showCategoryForm && <CategoryForm initialData={editingCategory} />}
          <CategoryList handleEditCategory={handleEditCategory} />
        </div>

        {/* Variants */}
        <div>
          <button
            onClick={() => setShowVariantForm(!showVariantForm)}
            className="group flex items-center justify-center gap-2 
                   bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold 
                   px-6 py-1 mb-2 rounded-full shadow-md
                   hover:from-green-600 hover:to-green-700
                   transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
          >
            <span className="text-lg font-bold transition-transform duration-200 group-hover:translate-x-1">
              +
            </span>
            {showVariantForm ? "Close Variant Form" : "Add Variant"}
          </button>
          {showVariantForm && <VariantForm initialData={editingVariant} />}
          <VariantList handleEditVariant={handleEditVariant} />
        </div>

        {/* Sizes */}
        <div>
          <button
            onClick={handleAddSize}
            className="group flex items-center justify-center gap-2 
                   bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold 
                   px-6 py-1 mb-2 rounded-full shadow-md
                   hover:from-green-600 hover:to-green-700
                   transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
          >
            <span className="text-lg font-bold transition-transform duration-200 group-hover:translate-x-1">
              +
            </span>
            {showSizeForm ? "Close Size Form" : "Add Size"}
          </button>
          {showSizeForm && <SizeForm initialData={editingSize} />}
          <SizeList handleEditSize={handleEditSize} />
        </div>

        {/* Colors */}
        <div>
          <button
            onClick={handleAddColor}
            className="group flex items-center justify-center gap-2 
                   bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold 
                   px-6 py-1 mb-2 rounded-full shadow-md
                   hover:from-green-600 hover:to-green-700
                   transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
          >
            <span className="text-lg font-bold transition-transform duration-200 group-hover:translate-x-1">
              +
            </span>
            {showColorForm ? "Close Color Form" : "Add Color"}
          </button>
          {showColorForm && <ColorForm initialData={editingColor} />}
          <ColorList handleEditColor={handleEditColor} />
        </div>
      </main>
    </div>
  );
}
