import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  currentPage: number;
  toggle: string;
  search: string;
  showButton: boolean;
}

const initialState: NavigationState = {
  currentPage: 1,
  toggle: 'tv',
  search: '',
  showButton: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    navigate: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setToggle: (state, action: PayloadAction<string>) => {
      state.toggle = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      console.log('uso', state.search);
      console.log('payload', action.payload);

      state.search = action.payload;
    },
    setShowButton: (state, action: PayloadAction<boolean>) => {
      state.showButton = action.payload;
    },
  },
});

export const { navigate, setToggle, setSearch, setShowButton } =
  navigationSlice.actions;

export default navigationSlice.reducer;
