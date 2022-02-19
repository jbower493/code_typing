import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { toggleCaseSensitivity } from './settingsSlice';
import Switch from '../switch';

const Settings = () => {
    const caseSensitivity = useSelector(state => state.settings.caseSensitivity);
    const dispatch = useDispatch();
console.log(caseSensitivity)
    return (
        <header>
            <Switch
                label={`Case Sensitivity`}
                name={`case_sensitivity`}
                value={caseSensitivity}
                toggle={() => dispatch(toggleCaseSensitivity())}
            />
        </header>
    );
};

export default Settings;