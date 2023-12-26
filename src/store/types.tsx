import { AnyAction } from 'redux';
// import { LanguageState } from '../shared/language/types';
import { ErrorAbsoluteState } from '#src/components/errorAbsolute/types';
import { StarWarsReducer } from '#src/pages/star-wars/types';

export type Action = AnyAction;

export type RootReducer = {
  // language: LanguageState;
  errorAbsolute: ErrorAbsoluteState;
  starWars: StarWarsReducer
};
