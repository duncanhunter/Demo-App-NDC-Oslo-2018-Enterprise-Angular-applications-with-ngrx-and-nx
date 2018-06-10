import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthData } from './auth.reducer';
export const getAuthState = createFeatureSelector<AuthData>('auth');
export const getUser = createSelector(getAuthState, state => state.user);
