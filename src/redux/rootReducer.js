import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer"
import brandsReducer from "./reducer/brandReducer"
import categoriesReducer from "./reducer/categoryReducer"
import arrangementReducer from "./reducer/arrangeReducer"
import productsReducer from "./reducer/productReducer"


const rootReducer = combineReducers({
	user: userReducer,
	brands: brandsReducer,
	categories: categoriesReducer,
	arrangement: arrangementReducer,
	products: productsReducer,
  });


export default rootReducer
