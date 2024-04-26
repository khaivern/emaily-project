import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import formReducer from "./formReducer";
import surveyReducer from "./surveyReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        form: formReducer,
        surveys: surveyReducer,
    },
});

export default store;
