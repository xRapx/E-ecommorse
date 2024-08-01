import { createSlice } from "@reduxjs/toolkit";

// categoriesSlice.js
const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		checkedCategorys:[]
	},
	reducers: {

		// áp dụng cho checkbox input lọc sản phẩm 
		toggleCattegory:(state,action) => { // state = [] , action = {_id: 9007, title: 'Category 2'}
			const category = action.payload; // = {_id: 9007, title: 'Category 2'}
			const isCategoryChecked = state.checkedCategorys.some(
				(c) => c._id === category._id  // 0 === 9007 = false
			)

			if(isCategoryChecked) { // isCategoryChecked === false 
				state.checkedCategorys = state.checkedCategorys.filter( 
					(c) => c._id !== category._id //ngược lại nếu category === true nếu trong mảng có id giống nhau thì loại bỏ bằng filter
				)
			}else {
				 state.checkedCategorys.push(category) // isCategoryChecked === false để push category vào 
			}
		},
	},
});

export const { toggleCattegory} = categoriesSlice.actions
export default categoriesSlice.reducer
