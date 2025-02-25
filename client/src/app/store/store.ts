import { configureStore, legacy_createStore } from '@reduxjs/toolkit';
import counterReducer, { counterSlice } from '../../features/contact/counterReducer';
import { useDispatch, useSelector } from 'react-redux';
import { catalogApi } from '../../features/catalog/catalogApi';
import { uiSlice } from '../layout/uiSlice';
import { darkThemeSlice } from '../layout/darkThemeSlice';

export function configureTheStore(){
    return legacy_createStore(counterReducer);
}

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath]: catalogApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer,
        darkTheme: darkThemeSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(catalogApi.middleware)
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()