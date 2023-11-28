import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import foodsFilterReducer from "./slices/foodsFilterSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistedAuthReducer = persistReducer({ key: 'auth', storage }, authReducer);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        foodsFilter: foodsFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Subscribe to store changes
// store.subscribe(() => {
//     console.log("Store updated!", store.getState());
// });

// Log initial state
// console.log("Initial store state:", store.getState());

// Create the persistor
const persistor = persistStore(store);

// Export store and persistor
export { store, persistor };