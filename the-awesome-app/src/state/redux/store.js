import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';


const combinedReducer  = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})

//create a store
export const store = configureStore({
    reducer: combinedReducer
});

