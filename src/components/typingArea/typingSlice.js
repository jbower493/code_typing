import { createSlice } from '@reduxjs/toolkit'

export const typingSlice = createSlice({
    name: 'typing',
    initialState: {
        errors: []
    },
    reducers: {
        addError: (state, action) => {
            state.errors.push(action.payload)
        }
    }
});

export const { addError } = typingSlice.actions;
export default typingSlice.reducer;