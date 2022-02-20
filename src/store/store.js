import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../appSlice';
import settingsReducer from '../components/settings/settingsSlice';

export default configureStore({
    reducer: {
        app: appReducer,
        settings: settingsReducer
    }
});