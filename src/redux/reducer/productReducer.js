import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

//  product slice
const productsSlice  = createSlice({
	name: 'products',
  	initialState:{
		product: []
	},
	reducers:{
		addToCart: (state, action) => {
			if (action.payload !== null && action.payload !== undefined) {
			  if (state.product !== null && state.product !== undefined) {
				const item = state.product.find((item) => item !== null && item !== undefined && item._id === action.payload._id);
				toast.success('AddCart Success!')
				if (item) {
				  item.quantity += action.payload.quantity;
				} else {
				  state.product.push(action.payload);
				}
			  } else {
				console.error('state.product không tồn tại hoặc chưa được khởi tạo');
			  }
			} else {
			  console.error('action.payload không tồn tại hoặc chưa được khởi tạo');
			}
		},
		resetCart: (state) => {
			state.product = [];
			// Dispatch a success toast
			toast.error('Reset Cart Return Empty')	
		},				
		deleteItem:(state,action) =>{
			state.product = state.product.filter(
				item => item._id !== action.payload
			)
			toast.error('Removed Product from cart')	
		},
		increaseQuantity:(state,action) =>{
			const item = state.product.find(
				item => item._id === action.payload._id
			)
			if(item){
				item.quantity += 1;
			}
		},
		drecreaseQuantity:(state,action) =>{
			const item = state.product.find(
				item => item._id === action.payload._id
			)
			if(item.quantity === 1){
				item.quantity = 1
            }else{
				item.quantity -= 1;
			}
		},
	},
})

export const {addToCart,resetCart ,deleteItem ,increaseQuantity ,drecreaseQuantity} = productsSlice.actions
export default productsSlice.reducer