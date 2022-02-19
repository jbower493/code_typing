import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        caseSensitivity: false
    },
    reducers: {
        toggleCaseSensitivity: state => {
            state.caseSensitivity = !state.caseSensitivity
        }
    }
});

export const { toggleCaseSensitivity } = settingsSlice.actions;
export default settingsSlice.reducer;