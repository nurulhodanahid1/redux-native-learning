import { configureStore, combineReducers} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import themeReducer from "./themeSlice";

// 1. create reducer
const rootReducer = combineReducers({
    counter : counterReducer,
    theme : themeReducer,

});

// 2. create store
const store = configureStore({
    reducer: rootReducer,
});

export default store;