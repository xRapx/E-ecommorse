import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

//  product slice
const whishtSlice  = createSlice({
	name: 'whish',
  	initialState:{
		whish: []
	},
	reducers:{
		addWhish: (state, action) => {
			if (action.payload !== null && action.payload !== undefined) {
			  if (state.whish !== null && state.whish !== undefined) {
				const item = state.whish.find((item) => item !== null && item !== undefined && item._id === action.payload._id);
				toast.success('Add Whish Success!')
				if (item) {
				  item.quantity += action.payload.quantity;
				} else {
				  state.whish.push(action.payload);
				}
			  } else {
				console.error('state.whish không tồn tại hoặc chưa được khởi tạo');
			  }
			} else {
			  console.error('action.payload không tồn tại hoặc chưa được khởi tạo');
			}
		},
		resetWhish: (state) => {
			state.whish = []
			toast.error('Reset Whish return empty')
		}
	},
})

export const {addWhish , resetWhish} = whishtSlice.actions
export default whishtSlice.reducer