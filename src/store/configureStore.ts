import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../store/store";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export let store = configureStore({
    reducer: persistedReducer,
})
export let persistor = persistStore(store)

