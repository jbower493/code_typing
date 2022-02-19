import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { toggleCaseSensitivity } from './settingsSlice';
import Switch from '../switch';

const Settings = () => {
    return (
        <header>
            <Switch
                label={`Case Sensitivity`}
                name={`case_sensitivity`}
                value={true}
            />
        </header>
    );
};

export default Settings;