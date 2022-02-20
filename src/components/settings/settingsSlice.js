import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        onlyLowercase: false
    },
    reducers: {
        toggleOnlyLowercase: state => {
            state.onlyLowercase = !state.onlyLowercase
        }
    }
});

export const { toggleOnlyLowercase } = settingsSlice.actions;
export default settingsSlice.reducer;