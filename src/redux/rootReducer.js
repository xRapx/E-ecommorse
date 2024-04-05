import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer"
import companyReducer from "./reducer/companyReducer"
import categoriesReducer from "./reducer/categoryReducer"
import arrangementReducer from "./reducer/arrangeReducer"
import productsReducer from "./reducer/productReducer"


const rootReducer = combineReducers({
	user: userReducer,
	company: companyReducer,
	categories: categoriesReducer,
	arrangement: arrangementReducer,
	products: productsReducer,
  });


export default rootReducer
