'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { store } from '../config/store';

interface StoreProviderProps {
	children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
	return (
		<Provider store={store}>
			{children} <Toaster />
		</Provider>
	);
};
