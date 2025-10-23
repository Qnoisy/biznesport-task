import { messageApi } from '@/entities/Messeges';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
export const store = configureStore({
	reducer: {
		[messageApi.reducerPath]: messageApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(messageApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
