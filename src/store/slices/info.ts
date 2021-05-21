import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InfoState = {
  readonly name: string;
  readonly address: string;
  readonly city: string;
  readonly country: string;
  readonly zip: string;
};

const initialState: InfoState = {
  name: '',
  address: '',
  city: '',
  country: '',
  zip: '',
};

type ChangePayload = {
  name: keyof InfoState;
  value: string;
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    changeInfo(state, action: PayloadAction<ChangePayload>) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { changeInfo } = infoSlice.actions;
export default infoSlice.reducer;
