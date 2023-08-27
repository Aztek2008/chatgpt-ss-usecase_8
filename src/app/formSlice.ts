import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

export interface FormState {
  users: FormData[];
}

const initialState: FormState = {
  users: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // updateField: (
    //   state,
    //   action: PayloadAction<{ field: keyof FormState; value: string }>
    // ) => {
    //   const { field, value } = action.payload;

    //   state[field] = value;
    // },
    addUser: (state, action: PayloadAction<FormData>) => {
      state.users.push(action.payload);
    },
  },
});

export const formReducer = formSlice.reducer;
export const formActions = formSlice.actions;
