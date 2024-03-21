import { configureStore } from "@reduxjs/toolkit";
import ecommorseReducer from "./rootReducer"
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

// Mặc định cho cấu hình tuỳ chọn lưu trữ Key =... và nơi lưu trữ Store mặc định
const productConfig = {
	key: "root",
	version: 1,
	storage,
}

// Giữ lại dữ liệu ngay cả khi trình duyệt tắt and reload
const persistedReducer = persistReducer(productConfig , ecommorseReducer)

// Việc sử dụng configureStore giúp việc cấu hình Redux store trở nên nhanh chóng, linh hoạt và dễ dàng bảo trì
export const store = configureStore({
	reducer: {ecommorseReducer: persistedReducer},
	middleware:(getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			// serializableCheck được sử dụng để xác định các action nào sẽ được bỏ qua trong quá trình lưu trữ dữ liệu.
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
	})
}) 

// biến persistor thường được sử dụng cùng với persistStore để quản lý việc lưu trữ và khôi phục trạng thái của ứng dụng.
export const persistor = persistStore(store)