import { useDispatch } from 'react-redux';
import { setView } from '../../appSlice';
import './style.scss';

const Instructions = ({
    hasStarted,
    hasFinished,
    timePassed,
    finalTime
}) => {

    const dispatch = useDispatch();

    const getMessage = () => {
        if (!hasStarted) return 'Start typing to begin the test...';
        if (!hasFinished) return timePassed;
        return <h2 className={`instructions__finalTime`}>Time: {finalTime}s</h2>
    };

    return (
        <section className={`instructions`}>
            {getMessage()}
            {hasFinished ? <button type={`button`} onClick={() => dispatch(setView('home'))}>Go Back Home</button> : ''}
        </section>
    )
}

export default Instructions;