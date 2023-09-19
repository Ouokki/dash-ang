import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from '../actions/profile.actions';

export interface UserProfile {
  name: string;
  email: string;
  appointementDate : string;
  dateOfBirth : string,
  licenseType :string,
  id : string,
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
    name: '',
    email: '',
    appointementDate : "",
    dateOfBirth : '',
    licenseType :'',
    id : '',
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



