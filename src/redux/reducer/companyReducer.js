import { createSlice } from "@reduxjs/toolkit";

// brandsSlice.js
const companySlice = createSlice({
	name: 'company',
	initialState:{
		checkedCompany:[]
	},
	reducers: {
		toggleCompany:(state,action) => {
			const company = action.payload;
			const isCompanyChecked = state.checkedCompany.some(
				(b) => b._id === company._id
			)

			if(isCompanyChecked) {
				state.checkedCompany = state.checkedCompany.filter(
					(b) => b._id !== company._id
				)
			}else {
				 state.checkedCompany.push(company)
			}
		},
	},
});

export const { toggleCompany} = companySlice.actions
export default companySlice.reducer
