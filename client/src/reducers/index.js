import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import formReducer from "./formReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        form: formReducer,
    },
});

export default store;
