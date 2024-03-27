import {createSlice} from '@reduxjs/toolkit';
// import {createAsyncThunk} from '@reduxjs/toolkit';
// import axios from 'axios';
import { toast } from 'react-toastify';


const initialState = {
	userInfo: [],
	userToken: localStorage.getItem('userToken') || null,
	products: [],
	checkedBrands:[],
	checkedCategorys:[],
}

// Tạo một action async để thêm sản phẩm vào giỏ hàng trên server
// export const addToCart = createAsyncThunk(
// 	'ecommorse/addToCart',
// 	async (product, { rejectWithValue }) => {
// 	  try {
// 		// const response = await axios.post('http://your-api-url/cart', product);
// 		// toast.success("Product added to cart");
// 		await localStorage.setItem("Products",JSON.stringify(product))
// 		alert("Product added to cart");
// 		// console.log(response);
// 		// return response.data;
// 	  } catch (err) {
// 		return rejectWithValue(`Lỗi không thể gửi SP lên SV`,err.response.data);
// 	  }
// 	}
//   );

export const ecommorseSlice = createSlice({
	name: 'ecommorse',
	initialState ,
	reducers:{
		login : (state, action) => {
			state.userToken = action.payload;
			localStorage.setItem('userToken', action.payload)
			window.location.href = '/'
		},
		logout : (state) => {
			state.userToken = null;
			localStorage.removeItem('userToken')
		},
		addToCart: (state, action) => {
			if (action.payload !== null && action.payload !== undefined) {
			  if (state.products !== null && state.products !== undefined) {
				const item = state.products.find((item) => item !== null && item !== undefined && item._id === action.payload._id);
				toast.success('AddCart Success!')
				if (item) {
				  item.quantity += action.payload.quantity;
				} else {
				  state.products.push(action.payload);
				}
			  } else {
				console.error('state.products không tồn tại hoặc chưa được khởi tạo');
			  }
			} else {
			  console.error('action.payload không tồn tại hoặc chưa được khởi tạo');
			}
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
	},
	// builder
	// extraReducers: (builder) => {
	// 	builder.addCase(addToCart.fulfilled, (state, action) => {
	// 	  // Cập nhật state khi sản phẩm được thêm vào giỏ hàng thành công
	// 	  state.products.push(action.payload);
	// 	  toast.success("Product added to cart");
	// 	});
	// 	builder.addCase(addToCart.rejected, (state, action) => {
	// 	  // Xử lý lỗi khi thêm sản phẩm vào giỏ hàng thất bại
	// 	  console.error('Failed to add product to cart:', action.error);
	// 	});
	//   },
})


export const {login,logout,addToCart,resetCart,toggleBrand ,toggleCattegory,increaseQuantity,drecreaseQuantity,deleteItem} = ecommorseSlice.actions;

export default ecommorseSlice.reducer