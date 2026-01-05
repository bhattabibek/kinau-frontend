import type { orderI } from "@/interfaces/order.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: orderI = {
  isLoading: false,
  isFetching: false,
  error: null,
  product: {
    id: "",
    name: "",
    price: 0,
    image: "",
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
