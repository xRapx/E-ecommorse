import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState = {
	userInfo: [],
	products: [],
	checkedBrands:[],
	checkedCategorys:[],
}

export const ecommorseSlice = createSlice({
	name: 'ecommorse',
	initialState,
	reducers:{
		addToCart : (state, action) =>{
			const item = state.products.find(
				(item) => item._id === action.payload._id
			);
			if(item){
				item.quantity += action.payload.quantity;
			}else{
				state.products.push(action.payload)
			}
			// Dispatch a success toast
			toast.success("Product added to cart");
		},

		resetCart: (state) => {
			state.products = [];
			// Dispatch a success toast
			toast.error('Reset Cart Return Empty')	
		},

		toggleBrand:(state,action) => {
			const brand = action.payload;
			const isBrandChecked = state.checkedBrands.some(
				(b) => b._id === brand._id
			)

			if(isBrandChecked) {
				state.checkedBrands = state.checkedBrands.filter(
					(b) => b._id !== brand._id
				)
			}else {
				state.checkedBrands.push(brand)
			}
		},	
		
		toggleCattegory:(state,action) => {
			const category = action.payload;
			const isCategoryChecked = state.checkedCategorys.some(
				(c) => c._id === category._id
			)

			if(isCategoryChecked) {
				state.checkedCategorys = state.checkedCategorys.filter(
					(c) => c._id !== category._id
				)
			}else {
				state.checkedCategorys.push(category)
			}
		},
		deleteItem:(state,action) =>{
			state.products = state.products.filter(
				item => item._id !== action.payload
			)
			toast.error('Removed Product from cart')	
		},
		increaseQuantity:(state,action) =>{
			const item = state.products.find(
				item => item._id === action.payload._id
			)
			if(item){
				item.quantity += 1;
			}
		},
		drecreaseQuantity:(state,action) =>{
			const item = state.products.find(
				item => item._id === action.payload._id
			)
			if(item.quantity === 1){
				item.quantity = 1
            }else{
				item.quantity -= 1;
			}
		},
	}
})


export const {addToCart,resetCart,toggleBrand ,toggleCattegory,increaseQuantity,drecreaseQuantity,deleteItem} = ecommorseSlice.actions;

export default ecommorseSlice.reducer