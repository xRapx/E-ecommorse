import { createSlice } from "@reduxjs/toolkit";

// brandsSlice.js
const brandsSlice = createSlice({
	name: 'brands',
	initialState:{
		checkedBrands:[]
	},
	reducers: {
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
	},
});

export const { toggleBrand} = brandsSlice.actions
export default brandsSlice.reducer
