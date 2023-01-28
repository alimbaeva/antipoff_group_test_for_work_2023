import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './index';
import { api } from '../api/api';
import { CreateUserI, UserI } from '../types/types';

export interface UserStateI {
  name: string;
  email: string;
  password: string;
  token: string;
  isLoading: boolean;
  errSiginUp: boolean;
  users: UserI[];
  clikUserId: string;
  clikUserInfo: UserI[];
}

export const initialUserState: UserStateI = {
  name: '',
  email: '',
  password: '',
  token: '',
  isLoading: false,
  errSiginUp: false,
  users: [],
  clikUserId: '',
  clikUserInfo: [],
};

export const createNewUser = createAsyncThunk(
  'User/createNewUser',
  async (options: CreateUserI) => {
    const data = await api.createUser(options.name, options.email, options.password);
    return data;
  }
);

export const getAllUsers = createAsyncThunk('User/getAllUsers', async () => {
  const data = await api.getAllUsers();
  return data;
});

export const userReducer = createSlice({
  name: 'User',
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state: UserStateI) => {
        state.isLoading = true;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        if (action.payload === 409) {
          state.errSiginUp = true;
        } else {
          state.name = (action.payload as CreateUserI).name;
          state.email = (action.payload as CreateUserI).email;
          state.password = (action.payload as CreateUserI).password;
          // console.log(state.name, state.email, state.password);
        }
        state.isLoading = false;
      });
    builder
      .addCase(getAllUsers.pending, (state: UserStateI) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        if (action.payload === 409) {
          state.errSiginUp = true;
        } else {
          state.users = action.payload.data;
          console.log(action.payload.data);
        }
        state.isLoading = false;
      });
  },
});

const { actions: actionsUserSlice, reducer: reducerUserSlice } = userReducer;

export const getUserSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const getUserssState = (state: RootState) => state;

export { actionsUserSlice, reducerUserSlice };
// export const { setOpenSnackbarMain } = actionsUserSlice;
