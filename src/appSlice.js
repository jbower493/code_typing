import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        view: 'home'
    },
    reducers: {
        setView: (state, action) => {
            state.view = action.payload
        }
    }
});

export const { setView } = appSlice.actions;
export default appSlice.reducer;