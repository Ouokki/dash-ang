import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../reducers/profile.reducer';

export const setProfile = createAction(
  '[Profile] Set Profile',
  props<{ profile: UserProfile }>()
);

export const updateProfile = createAction(
  '[Profile] Update Profile',
  props<{ profileUpdate: Partial<UserProfile> }>() // Use profileUpdate instead of profile
);
