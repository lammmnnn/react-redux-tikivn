import { configureStore, ThunkAction, Action, createStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../features/counter/counterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['itemList'],
}

const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;