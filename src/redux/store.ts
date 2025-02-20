import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { baseApi } from './api/baseApi';
import authReducer from './features/auth/authSlice';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import storage from 'redux-persist/lib/storage';
export const rootReducer=combineReducers({
    [baseApi.reducerPath]:baseApi.reducer,
    auth:authReducer,
    cart:cartReducer,
    product:productReducer
})

const persistConfig={
    key:'root',
    storage,
    whitelist:['auth','cart','product']
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:['FLASH','RHYDRATE','PASUSE','PERSIST','PERGE','REGISTER']
        }
    }).concat(baseApi.middleware)
})


// type
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

//locally save and restore
export const persistor=persistStore(store);
