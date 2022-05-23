import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../appSlice';
import settingsReducer from '../components/settings/settingsSlice';
import typingReducer from '../components/typingArea/typingSlice';

export default configureStore({
    reducer: {
        app: appReducer,
        settings: settingsReducer,
        typing: typingReducer
    }
});