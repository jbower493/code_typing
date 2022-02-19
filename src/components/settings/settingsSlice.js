import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        caseSensitivity: true
    },
    reducers: {
        toggleCaseSensitivity: state => !state.caseSensitivity
    }
});

export const { increment, decrement, incrementByAmount } = settingsSlice.actions;
export default settingsSlice.reducer;