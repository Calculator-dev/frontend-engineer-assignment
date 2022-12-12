import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import navigateReducer from './features/NavigationsSlice';

const store = configureStore({
  reducer: navigateReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
