import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from '../actions/profile.actions';

export interface UserProfile {
  name: string;
  email: string;
  appointementDate : string;
  card: PaymentCard;
}

export interface ProfileState {
  profile: UserProfile;
}

const cardPayment: PaymentCard = {

  cardnumber: "**** **** **** 1234",
  expiration: "12/24",
  fullname : "Younes Drissi",

}

const initialState: ProfileState = {
  profile: {
    name: 'Younes Drissi',
    email: 'younes.drissi@gmail.com',
    appointementDate : "You didnt't book any ...",
    card:cardPayment,
   
  },
};

export interface PaymentCard {
  cardnumber: string;
  expiration: string;
  fullname : string
  
}

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.setProfile, (state, { profile }) => ({ ...state, profile })),
  on(ProfileActions.updateProfile, (state, { profileUpdate }) => ({
    ...state,
    profile: { ...state.profile, ...profileUpdate }, // Merge the update with the existing profile
  }))
);



