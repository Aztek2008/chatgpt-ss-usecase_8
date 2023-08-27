import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  message: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: string }>
    ) => {
      const { field, value } = action.payload;

      state[field] = value;
    },
  },
});

export const { updateField } = formSlice.actions;
export const formReducer = formSlice.reducer;
export const formActions = formSlice.actions;
