import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import foodsFilterReducer from './slices/foodsFilterSlice';
import selectedFoodSlice from './slices/selectedFoodSlice';

const persistedAuthReducer = persistReducer({ key: 'auth', storage }, authReducer);
const persistedSelectedFoodReducer = persistReducer({ key: 'selectedFood', storage }, selectedFoodSlice);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        foodsFilter: foodsFilterReducer,
        selectedFood: persistedSelectedFoodReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
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
