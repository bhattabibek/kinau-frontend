import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    productId: string;
    product?: any;
    name: string;
    price: number;
    image?: string;
    quantity: number;
    variant?: any;
}

interface initialStateI {
    isLoading: boolean;
    isFetching: boolean;
    error: unknown;
    carts: CartItem[];
}

const initialState: initialStateI = {
    isLoading: false,
    isFetching: false,
    error: null,
    carts: JSON.parse(localStorage.getItem("cart") || "[]"),
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const incomingId = action.payload.productId ?? action.payload.product;
            if (!incomingId) return;

            const existingItem = state.carts.find(
                (item) => item.productId === incomingId
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.carts.push({
                    ...action.payload,
                    productId: incomingId,
                    variant: action.payload.variant ?? null,
                    quantity: action.payload.quantity ?? 1,
                });
            }

            localStorage.setItem("cart", JSON.stringify(state.carts));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.carts = state.carts.filter(
                (item) => (item.productId ?? item.product) !== action.payload
            );
            localStorage.setItem("cart", JSON.stringify(state.carts));
        },
        clearCart: (state) => {
            state.carts = [];
            localStorage.removeItem("cart");
        },
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;