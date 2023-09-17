import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from '../reducers/profile.reducer';

const getProfileFeatureState = createFeatureSelector<ProfileState>('profile');

export const getProfile = createSelector(
  getProfileFeatureState,
  (state) => state.profile
);
