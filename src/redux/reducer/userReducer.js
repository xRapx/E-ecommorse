import { createSlice } from "@reduxjs/toolkit";

// userSlice.js
const userSlice = createSlice({
	name: 'user',
	initialState: {
	  userInfo: [],
	  userToken: localStorage.getItem('userToken') || null,
	},
	reducers: {
	  login: (state, action) => {
		state.userInfo = action.payload;	
		// window.location.href = '/'
	  },
	  logout: (state) => {
		state.userToken = null;
		localStorage.removeItem('userToken')
	  },
	},
});

export const {login, logout} = userSlice.actions
export default userSlice.reducer
