import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Using localStorage
import { thunk } from "redux-thunk";
import reducer, { RootState } from "./reducers";
import authMiddleware from "./middleware/authMiddleware";

// Setting up Redux DevTools and middleware
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configuring redux-persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer<RootState>(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(authMiddleware, thunk))
);

// Initialize persistor to keep track of persisted state
export const persistor = persistStore(store);
