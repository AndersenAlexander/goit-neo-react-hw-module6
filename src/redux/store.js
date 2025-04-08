// src/redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Configuration for persisting the contacts slice
const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

// Wrap the contacts reducer with persistReducer
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

// Combine the reducers
const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filtersReducer,
});

// Create the Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create and export the persistor for use in PersistGate
export const persistor = persistStore(store);
