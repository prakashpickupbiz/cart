import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
  ],
  reducers: {},
});

export const selectProducts = (state) => state.products;
export default productSlice.reducer;
