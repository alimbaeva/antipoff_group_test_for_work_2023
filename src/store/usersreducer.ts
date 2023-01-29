import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './index';
import { api } from '../api/api';
import { CreateUserI, UserI } from '../types/types';

export interface UserStateI {
  name: string;
  email: string;
  password: boolean;
  isAuthUser: boolean;
  token: string;
  isLoading: boolean;
  errSiginUp: boolean;
  users: UserI[];
  clikUserId: string;
  clikUserInfo: UserI;
}

export const initialUserState: UserStateI = {
  name: '',
  email: '',
  password: false,
  isAuthUser: localStorage.getItem('folseToken') ? true : false,
  token: '',
  isLoading: false,
  errSiginUp: false,
  users: [],
  clikUserId: '',
  clikUserInfo: {
    avatar: '',
    email: '',
    first_name: '',
    id: 0,
    last_name: '',
  },
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

export const getUser = createAsyncThunk('User/getUser', async (id: string) => {
  const data = await api.getUser(id);
  return data;
});

export const userReducer = createSlice({
  name: 'User',
  initialState: initialUserState,
  reducers: {
    removeUserId: (state) => {
      state.clikUserId = '';
    },
    registerUser: (state, action) => {
      state.isAuthUser = action.payload;
    },
  },
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
          state.isAuthUser = (action.payload as CreateUserI).password.length > 0 ? true : false;
          if (state.isAuthUser) localStorage.setItem('folseToken', `true`);
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
        }
        state.isLoading = false;
      });
    builder
      .addCase(getUser.pending, (state: UserStateI) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        if (action.payload === 409) {
          state.errSiginUp = true;
        } else {
          state.clikUserId = action.payload.data.id;
          state.clikUserInfo = action.payload.data;
        }
        state.isLoading = false;
      });
  },
});

const { actions: actionsUserSlice, reducer: reducerUserSlice } = userReducer;

export const getUserSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getUserssState = (state: RootState) => state;

export { actionsUserSlice, reducerUserSlice };
export const { removeUserId, registerUser } = actionsUserSlice;
