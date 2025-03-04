import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/userReducer";

const store = configureStore({
    reducer: {
        user: UserReducer,
    },
});

export default store;