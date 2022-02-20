import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { toggleOnlyLowercase } from './settingsSlice';
import Switch from '../switch';

const Settings = () => {
    const onlyLowercase = useSelector(state => state.settings.onlyLowercase);
    const dispatch = useDispatch();

    return (
        <header>
            <Switch
                label={`Only Lowercase`}
                name={`only_lowercase`}
                value={onlyLowercase}
                toggle={() => dispatch(toggleOnlyLowercase())}
            />
        </header>
    );
};

export default Settings;