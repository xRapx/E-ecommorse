import { createSlice } from "@reduxjs/toolkit";

// arrangementSlice.js
const arrangementSlice = createSlice({
	name: 'arrangement',
	initialState: {
		arrangement:false
	},
	reducers: {
	  handleArrangement: (state, action) => {
		state.arrangement = action.payload;
	  },
	},
});

export const {handleArrangement} = arrangementSlice.actions
export default arrangementSlice.reducer
