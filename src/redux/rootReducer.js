import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState = {
	userInfo: [],
	products: [],
	checkedBrands:[],
	checkedCategorys:[],
}

export const Ecommerse = createSlice({
	name: 'reducer',
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
		
	}
})


export const {addToCart} = Ecommerse.actions;

export default Ecommerse.reducer