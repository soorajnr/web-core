// reducers/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  user: any;
  error: any;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    isLoggedIn: true,
    user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    user: null,
    error,
  })),
  on(AuthActions.logout, state => initialState)
);
