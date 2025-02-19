import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

export const rootReducer=combineReducers({
    
})

export const store=configureStore({
    reducer:{}
})





// type
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

//locally save and restore
export const persistor=persistStore(store);
