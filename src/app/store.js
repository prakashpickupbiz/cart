import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";
import buttonsReducer from "../features/buttonSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    buttons: buttonsReducer,
  },
});

export default store;
