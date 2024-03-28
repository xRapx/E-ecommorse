import { createSlice } from "@reduxjs/toolkit";

// categoriesSlice.js
const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		checkedCategorys:[]
	},
	reducers: {
		toggleCattegory:(state,action) => { // state = [] , action = {_id: 9007, title: 'Category 2'}
			const category = action.payload; // = {_id: 9007, title: 'Category 2'}
			const isCategoryChecked = state.checkedCategorys.some(
				(c) => c._id === category._id  // 0 === 9007 = false
			)

			if(isCategoryChecked) { // true
				state.checkedCategorys = state.checkedCategorys.filter( 
					(c) => c._id !== category._id // nếu trong mảng có id giống nhau thì loại bỏ bằng filter
				)
			}else {
				 state.checkedCategorys.push(category) // false
			}
		},
	},
});

export const { toggleCattegory} = categoriesSlice.actions
export default categoriesSlice.reducer
