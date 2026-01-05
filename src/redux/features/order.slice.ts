import type { orderI } from "@/interfaces/order.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: orderI = {
  isLoading: false,
  isFetching: false,
  error: null,
  product: {
    isWeeklyDeals: false,
    isBestSeller: false,
    _id: "",
    id: "",
    name: "",
    description: "",
    category: {
      _id: "",
      name: "",
      slug: "",
      id: "",
    },
    basePrice: 0,
    variants: [],
    mainImages: [],
    tags: [],
    isActive: false,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "",
    totalStock: 0,
    priceRange: { min: 0, max: 0 },
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
