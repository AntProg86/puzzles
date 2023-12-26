import { configureStore } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { Action, RootReducer } from './types';

// import languageSlice from '../shared/language/reducer';
import errorAbsoluteSlice from '#src/components/errorAbsolute/reducer';
import starWarsSlice from '#src/pages/star-wars/reducer';

export const rootReducer = configureStore<RootReducer, Action, Middleware[]>({
  reducer: {
    // language: languageSlice.reducer,
    errorAbsolute: errorAbsoluteSlice.reducer,
    starWars: starWarsSlice.reducer,
  },
});
