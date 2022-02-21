import { useDispatch } from 'react-redux';
import { setView } from '../../appSlice';
import './style.scss';

const Instructions = ({
    startTime,
    endTime,
    currentTime
}) => {

    const dispatch = useDispatch();

    const getMessage = () => {
        if (!startTime) return 'Start typing to begin the test...';
        if (startTime && !endTime) return ((currentTime ? currentTime - startTime : 0) / 1000).toFixed(1);
        return <h2 className={`instructions__finalTime`}>Time: {((endTime - startTime) / 1000).toFixed(1)}s</h2>
    };

    return (
        <section className={`instructions`}>
            {getMessage()}
            {endTime ? <button type={`button`} onClick={() => dispatch(setView('home'))}>Go Back Home</button> : ''}
        </section>
    )
}

export default Instructions;